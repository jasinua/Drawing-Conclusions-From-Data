# Chapter 7 activities: worked answers

All numbers below were computed from the CSVs in `Ch_7_csv_data/`. Where a question does not state a significance level, α = 0.05 is used. The t-distribution was implemented by hand and checked against known reference values (t = 2.0, df = 10 gives p = 0.0734, and so on).

---

## 1. Estimate the probability of an event (die_roll_simulation_data)
1. **Expected sixes in 100 rolls of a fair die:** 100 × 1/6 = **16.67**.
2. **How surprising is 29 sixes?** Very. It is almost twice the expected 16.67, and in the simulation it is the largest value in all 1,000 trials.
3. **Histogram:** `count_of_six` over 1,000 simulated trials of 100 rolls. It is bell-shaped and centered near 16.6 (mean 16.58, range 5 to 29).
4. **Trials with 29 or more sixes:** **1** of 1,000 (a single trial landed exactly on 29).
5. **Estimated probability:** 1 / 1000 = **0.001**. The exact binomial value is P(X ≥ 29) = 0.0015.
6. **Conclusion:** 0.001 is far below α = 0.05, so reject H₀ (the die is fair). There is strong evidence the die is **not** fair. It is evidence, not proof.
7. **STAR**
   - **Situation:** Michael says his die is fair. In 100 rolls it showed a six 29 times.
   - **Task:** Decide whether 29 sixes is evidence against H₀: P(six) = 1/6.
   - **Action:** Simulate 1,000 trials of 100 fair rolls (seed 777) and count how many trials have 29 or more sixes.
   - **Result:** 1 of 1,000 trials, about 0.001, which is below 0.05. Evidence the die is not fair.

## 2. Make a statistical inference (school day length)
1. **H₀:** There is no difference in student well-being between the 8-hour and the 6-hour school day.
2. **Hₐ:** The 6-hour day leads to better student well-being.
3. **p = 0.08:** **fail to reject** H₀ (0.08 ≥ 0.05).
4. **Conclusion at p = 0.08:** The p-value is above the 0.05 significance level, so we do not have evidence for the alternative that the shorter day improves well-being. Keep the traditional 8-hour day for now (and collect more data). This does not prove the two schedules are equal.
5. **p = 0.003:** **reject** H₀ (0.003 < 0.05).
6. **Conclusion at p = 0.003:** The p-value is below the 0.05 significance level, so we have evidence for the alternative. Recommend moving to the shortened 6-hour day.

## 3. Evaluate a hypothesis (school)
1. **H₀:** The proportion of all students in the least difficult classes (difficulty < 2) is 0.10 (or more).
2. **Hₐ:** That proportion is less than 0.10.
3. **Hypothesized proportion:** **0.10**.
4. **Sample proportion:** 3 of 58 students have an average difficulty below 2, so **0.05** (0.0517).
5. **Decision:** **fail to reject H₀.** One-sided z-test: z = −1.23, p = 0.110. The exact binomial test gives p = 0.156. Both are above 0.05, so 3 of 58 is not unusual if the true proportion is 10%.

## 4. t-test on observational data (volleyball)
Is Indy's true average hitting percentage greater than 30%?
1. **H₀:** μ = 30 (her average hitting percentage is 30%).
2. **Hₐ:** μ > 30.
3. **Does a few sub-30% games mean she failed?** **No.** Individual games vary a lot (the standard deviation is 22.5 points; 17 of her 50 sets are below 30). What matters is whether the **average** over all 50 sets is high enough, relative to that variability, to rule out chance.
4. **Sample average:** **38.26**.
5. **Standard deviation:** **22.52**.
6. **t-statistic:** t = (38.26 − 30) / (22.52 / √50) = **2.59** (df = 49).
7. **p-value:** **0.006** (one-sided, Hₐ: μ > 30). The two-sided value is 0.012.
8. **Decision:** **reject H₀.** p = 0.006 < 0.05, so there is evidence that her true average hitting percentage is above 30%.
9. **Why hesitate to generalize?** The data are only 50 preseason scrimmage sets: a small sample, with weaker or different opposition, and hitting percentage varies widely from set to set. Results may not carry over to her regular-season games.

## 5. t-test with a different alternative (school, daily_fruit_veg)
H₀: μ = 2.21; Hₐ: μ < 2.21. Sample: n = 58, mean 1.879, SD 1.186.
1. **t-statistic:** **−2.124** (df = 57).
2. **p-value:** **0.019** (left tail).
3. **Decision: b.** We can reject the null hypothesis in favor of the alternative that the mean number of fruit/vegetable servings at this school is **less than** 2.21.
4. **STAR**
   - **Situation:** Hazel and Everett's school averages 2.21 servings a day. They suspect a neighboring school is less healthy. Their sample from that school has mean 1.88 (n = 58).
   - **Task:** Test H₀: μ = 2.21 against Hₐ: μ < 2.21 at α = 0.05.
   - **Action:** A one-sample t-test: t = −2.124, df = 57.
   - **Result:** p = 0.019 < 0.05. Evidence that the neighboring school's students eat fewer servings. It is observational, so it says nothing about why, and it applies to the population the sample represents.

## 6. Correlation (icecream1 and icecream2)
1. **Hₐ:** There is a positive correlation between ice cream sales and drownings (ρ > 0).
2. **H₀:** There is no correlation (ρ = 0).
3. **Correlation in H₀:** **0.00**.
4. **Observed correlation (sales, drownings):** **0.50**.
5. **p-value:** t = 5.73, df = 98, one-sided p ≈ 5.5 × 10⁻⁸ (< 0.001). That is below 0.05, so **reject H₀**: the association is statistically significant. It is evidence of a correlation, not of causation.
6. **Temperature and ice cream sales:** r = **0.91**.
7. **Significant at p < 0.05?** **Yes** (p ≈ 2 × 10⁻⁴⁰).
8. **Temperature and drownings:** r = **0.56**.
9. **Significant at p < 0.05?** **Yes** (p ≈ 1 × 10⁻⁹).
10. **Temperature is a confounding variable.** It is associated with both ice cream sales and drownings (hot days mean more ice cream and more swimming, and more swimmers means more drownings). That creates a relationship between sales and drownings without ice cream causing anything.
11. **STAR**
    - **Situation:** A news outlet claims ice cream raises drowning risk. The data are 100 days of sales and drownings.
    - **Task:** Test whether sales and drownings are correlated, and look for another factor explaining it.
    - **Action:** Correlation tests: sales vs drownings r = 0.50; temperature vs sales r = 0.91; temperature vs drownings r = 0.56. All p < 0.001.
    - **Result:** The sales–drownings correlation is real in this data, but temperature is a confounder. Heat drives both, so the data give no support for "ice cream causes drowning."

## 7. Type I and Type II errors
1. **Court case** (H₀: innocent; Hₐ: guilty)
   - a. Guilty when guilty: **True positive.**
   - b. Guilty when innocent: **False positive, Type I error.**
   - c. Not guilty when innocent: **True negative.**
   - d. Not guilty when guilty: **False negative, Type II error.**
2. **Hazel and Everett's correlation** (H₀: ρ = 0; Hₐ: ρ > 0)
   - a. Conclude ρ > 0 when it is: **True positive.**
   - b. Conclude ρ > 0 when it isn't: **False positive, Type I error.**
   - c. Conclude ρ is not > 0 when it isn't: **True negative.**
   - d. Conclude ρ is not > 0 when it is: **False negative, Type II error.**

## 8. A/B test hypotheses (Matthew's portfolio)
1. **H₀:** The average time visitors spend viewing the portfolio is the same for A and B (μ_A = μ_B).
2. **Hₐ:** Portfolio A keeps visitors on the site longer than Portfolio B (μ_A > μ_B).

## 9. t-tests on A/B data (portfolio, portfolio_2col)
1. **Treatment A participants:** **50**.
2. **Treatment B participants:** **50**.
3. **Mean view time, A:** **43.7** seconds.
4. **Mean view time, B:** **32.5** seconds.
5. **Null hypothesis:** μ_A = μ_B.
6. **Alternative hypothesis:** μ_A ≠ μ_B (the question asks whether the means are "different").
7. **Which test?** A **two-sample** t-test (two independent groups).
8. **p-value** (equal variances): t = 5.64, df = 98, p = **0.000** (about 1.6 × 10⁻⁷).
9. **Inference at 0.05:** p < 0.05, so reject H₀. There is a statistically significant difference in view time, and A is higher (43.7 s vs 32.5 s). Visitors were randomly assigned, so the difference can be attributed to the portfolio.
10. **STAR**
    - **Situation:** Matthew tested two portfolios with 100 randomly assigned visitors, 50 each, and recorded view time.
    - **Task:** Decide whether average view time differs between A and B at α = 0.05.
    - **Action:** A two-sample t-test with equal variances: t = 5.64, df = 98.
    - **Result:** p < 0.001. A held visitors for longer (43.7 s vs 32.5 s). Note that in this data B got more contacts (24 vs 11), so longer viewing is not the same as more contacts.

## 10. Type I and Type II errors in A/B results (Oasana testimonials)
1. **True negative.** There is truly no difference, and they correctly failed to reject H₀.
2. **False negative, Type II error.** There was a real difference, but they failed to reject H₀.
3. **False positive, Type I error.** They rejected H₀ although there is no real difference.

---

### Check against the earlier Michael's-coin slides (26–28)
`Ch_7_csv_data/coin_flip_simulation.csv` is **not** the same simulation as the printed Figure 7.7. In the CSV, 2 of 100 trials have 60 or more Heads (both exactly 60, so about 0.02), while the figure shows 3 of 100 (about 0.03). The conclusion is the same: reject H₀ at α = 0.05.
