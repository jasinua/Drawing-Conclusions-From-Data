"""Exercise 9: two-sample t-test (equal variances) on the portfolio A/B data.

Question: do visitors view portfolio A for a different time than portfolio B?
  H0: mean view time is the same for A and B   (muA = muB)
  Ha: the mean view times are different        (muA != muB)  -> two-sided test

Run:  python3 ttest_portfolio.py
Needs only the standard library; uses scipy for the p-value if it is installed.
"""
import csv
import math
import statistics as st
from pathlib import Path

# Path to the data, built from this file's location so it works from any folder.
# portfolio_2col.csv has one column per group: "a" and "b" (view time in seconds).
CSV = Path(__file__).parent / "Ch_7_csv_data" / "portfolio_2col.csv"


def load():
    """Read the CSV and return the view times of group A and group B as two lists."""
    with open(CSV, newline="") as f:
        rows = list(csv.DictReader(f))      # each row looks like {"a": "38.1", "b": "30.7"}
    a = [float(r["a"]) for r in rows if r["a"]]   # "if r[...]" skips empty cells
    b = [float(r["b"]) for r in rows if r["b"]]
    return a, b


def p_two_sided(t, df):
    """Two-sided p-value: the chance of a t at least this far from 0 (either side) if H0 is true."""
    try:
        # Easy way: scipy's t-distribution. sf = "survival function" = area in the upper tail.
        # We double it because the test is two-sided (both tails count).
        from scipy import stats
        return 2 * stats.t.sf(abs(t), df)
    except ImportError:
        # No scipy installed: compute the same tail area ourselves.
        # c * (1 + x^2/df)^(-(df+1)/2) is the formula for the t-distribution curve.
        c = math.gamma((df + 1) / 2) / (math.sqrt(df * math.pi) * math.gamma(df / 2))
        pdf = lambda x: c * (1 + x * x / df) ** (-(df + 1) / 2)
        # Add up the area under the curve from |t| out to far right (Simpson's rule).
        # 200 units past |t| is effectively infinity; the tail is tiny by then.
        lo, hi, n = abs(t), abs(t) + 200, 200000
        h = (hi - lo) / n
        s = pdf(lo) + pdf(hi) + sum((4 if i % 2 else 2) * pdf(lo + i * h) for i in range(1, n))
        return 2 * s * h / 3                # one tail's area, doubled for both tails


# ---- Step 1: group statistics -------------------------------------------------
a, b = load()
na, nb = len(a), len(b)                     # sample sizes (50 and 50)
ma, mb = st.mean(a), st.mean(b)             # group means (the white lines on the dot plot)
sa, sb = st.stdev(a), st.stdev(b)           # sample standard deviations (spread inside each group)

# ---- Step 2: pool the spread --------------------------------------------------
# "Assuming equal population variances" means we treat both groups as having the same
# true spread, so we blend the two standard deviations into one (weighted by group size).
df = na + nb - 2                            # degrees of freedom: 50 + 50 - 2 = 98
sp = math.sqrt(((na - 1) * sa ** 2 + (nb - 1) * sb ** 2) / df)   # pooled standard deviation

# ---- Step 3: standard error and t ---------------------------------------------
# Standard error = how much the DIFFERENCE between two group means would wobble by luck.
se = sp * math.sqrt(1 / na + 1 / nb)
# t = observed gap between the means, measured in standard errors.
# Near 0 -> the gap is typical luck. Far from 0 -> surprising if H0 is true.
t = (ma - mb) / se

# ---- Step 4: p-value and decision ---------------------------------------------
p = p_two_sided(t, df)
ALPHA = 0.05                                # cutoff chosen BEFORE looking at the data

# ---- Print the results --------------------------------------------------------
print(f"A: n = {na}, mean = {ma:.1f}, s = {sa:.2f}")
print(f"B: n = {nb}, mean = {mb:.1f}, s = {sb:.2f}")
print(f"pooled s = {sp:.2f}, SE = {se:.3f}")
print(f"t = {t:.2f}, df = {df}")
print(f"p = {p:.8f}  (3 decimals: {p:.3f})")
# Decision rule: p < alpha -> reject H0. Otherwise fail to reject (which is NOT proof of no difference).
print(f"p < {ALPHA}: reject H0, the mean view times differ." if p < ALPHA
      else f"p >= {ALPHA}: fail to reject H0.")
