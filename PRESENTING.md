# How to present each slide

**Story in one line:** Hazel and Everett check their school's claim, and a pattern in a sample becomes a conclusion only after good design, honest analysis and careful interpretation.

**Cast:** Hazel (12th grader), Everett (her best friend), Michael (loves magic), the manager of Oasana (a non-profit).
**Keys:** `â†’` next Â· `â†` back Â· `L` English/Albanian Â· full notes in `notes.html`.
**Icons:** ðŸ—³ ask the room Â· ðŸ–± click through steps

---

## Prologue Â· The claim (1–3)

| # | Slide | Say | Do |
|---|-------|-----|----|
| 1 | Opening | We collect data all the time. The step from data to a conclusion is where things go wrong. | Just open. |
| 2 | Meet Hazel and Everett | A story first. Hazel is a 12th grader at a popular high school that just made national news for its exceptional test scores. Everett is her best friend. The local newspaper wants to know the secret. | 🖱 Hazel → Everett → the newspaper. |
| 3 | The claim | The school says sleep and health explain it. That is quietly a *causal* claim. Hazel is not convinced. | ðŸ–± quote â†’ Hazel's doubt â†’ "check it with data". |

## Act 1 Â· The plan (4–6)

| # | Slide | Say | Do |
|---|-------|-----|----|
| 4 | Three hunches | They can't ask all 384 students, so they survey a sample. Three testable hunches: sleep, grades, the link. | ðŸ–± three cards, then press **Survey 58 students** a few times. Each sample differs: that is why we need inference. |
| 5 | Bigger sample, smaller margin of error | A bigger sample lands closer to the truth. Margin of error = 1.96 × σ / √n. 500 → ±0.044, 1,000 → ±0.031, 2,000 → ±0.022. 4× the students only halves the error, and size never fixes bias. | 🖱 headline → formula → three bars → warning. |
| 6 | Scientific method | Six steps, each applies to the study. The last loops back to a new question. | ðŸ–± six steps. |

## Act 2 Â· Gathering evidence (7–12)

Data here comes from another school (400 students).

| # | Slide | Say | Do |
|---|-------|-----|----|
| 7 | Experiment vocabulary | An experiment applies a treatment on purpose. In Hazel and Everett's study: sleep = explanatory (what we suspect drives it), GPA = response (what we measure). | ðŸ–± four cards. |
| 8 | Study design | Observational: we only record. Experiment: a random process assigns the treatment. Only an experiment can talk about **cause**. | Click both options. |
| 9 | What else could be hiding? | Sleep and GPA move together, but what else changes both? Course load affects sleep and GPA at the same time: that is a **confounder**. | Click Next twice. |
| 10 | Correlation | Positive, moderate. Does it prove causation? **No.** | ðŸ—³ YES/NO, then dots recolor by course load. |
| 11 | Ice cream and drownings | Real data: sales and drownings rise together (r ≈ 0.50). Ban ice cream? No: **temperature** drives both. Hold it fixed and the link vanishes. | 🖱 scatter → color by temperature → hidden-cause diagram. |
| 12 | Case study | Each dot is a community; its color is how it differs. Observing states with vs without a law compares different kinds of places. California gave 1,000+ communities the law in *random order*, so both groups have the same mix. | 🖱 observe → randomize → "random order → the law is the difference". |

## Act 3 Â· The suspicious coin (13–18)

| # | Slide | Say | Do |
|---|-------|-----|----|
| 13 | Michael's coin | 60 Heads in 100 flips. Is that surprising for a fair coin? | ðŸ—³ give them ~1 min for aâ€“e. Try the live coin lab. |
| 14 | Coin solution | Count 60 or more: 3 of 100 â‰ˆ **0.03**. Below Î± = 0.05, so reject "fair". Evidence, **not proof**. | ðŸ–± six steps. |
| 15 | Statistical significance | Name it: enough evidence to reject Hâ‚€ = significant. Not the same as large or important. | ðŸ–± steps. |
| 16 | Hypotheses | Map the coin onto the vocabulary. Null has "=", alternative has >, < or â‰ . | ðŸ–± steps. |
| 17 | Rejecting the null | Memory aid: reject a negative and you get a positive. | Show the cartoon. |
| 18 | Statistic and p-value | Statistic = a number from the sample. p-value = chance of a result this extreme if Hâ‚€ is true. | ðŸ–± steps. |

## Act 4 Â· Cracking the case (19–26)

| # | Slide | Say | Do |
|---|-------|-----|----|
| 19 | Inference for a mean | Is the average GPA above 3.0? They got 3.971. A mean isn't Heads/Tails, so we use the **t-test**. | ðŸ–± steps. |
| 20 | Same distance, different spread | Same 3.971, but small spread is very surprising, big spread isn't. | Compare the two figures. |
| 21 | The t-test | t = distance from 3.0 in standard-error units. | ðŸ–± distance â†’ SE â†’ t â†’ p. |
| 22 | Null distribution of t | If Hâ‚€ is true, t is near 0. Ours is 21.8, so p â‰ˆ 0. | ðŸ–± steps. |
| 23 | Reading the p-value | Shaded tails = p-value. Significant is a decision rule. | Toggle Study 1 / Study 2. |
| 24 | The verdict | Grades high âœ“, sleep tracks GPA âœ“, but most students do **not** sleep 8 h âœ—. Half right, and only an association. | ðŸ–± steps. |
| 25 | Scope of inference | Generalize only to the population the sampling represents. | Ask, then reveal. |
| 26 | Extrapolation | Data covers 4â€“10 hours. Don't predict outside the range. | Click to extend the line. |

## Act 5 Â· When evidence lies (27)

| # | Slide | Say | Do |
|---|-------|-----|----|
| 27 | The confusion matrix | Four cells. Type I: see an effect that isn't there (prob. α). Type II: miss one that is. **Precision** = of what we flagged, how much was real. **Recall** = of what is real, how much we caught. | Toggle through the four views. |

## Act 6 Â· The experiment (28–39)

| # | Slide | Say | Do |
|---|-------|-----|----|
| 28 | Their website | Back to Hazel and Everett: their website collects donations for the school club. What if a new donate page brings in more? Instead of guessing, they test it. | 🖱 Hazel → Everett → "they test it". |
| 29 | What is an A/B test | A race between two versions. Visitors are **randomly** assigned. | ðŸ–± steps. |
| 30 | A/B testing | Oasana: two donation pages, shown at the same time. | Read it out. |
| 31 | A/B phases | Testing phase, then implementation. 5,000 of 50,000 visitors take part. | ðŸ–± steps. |
| 32 | Randomization steps | Choose how many, pick at random, split randomly. | ðŸ–± steps. |
| 33 | After the testing phase | Was it timing? Significant? Does it last? Representative? | ðŸ–± steps. |
| 34 | Two-sample t-test | Two groups, so two-sample t-test. Hâ‚€: no difference. | ðŸ–± steps. |
| 35 | A/B test result | B is higher, but don't call it better yet. | Click Run, then Implement. |
| 36 | Simultaneous testing | Run A and B together, or season and holidays get mixed in. | Read it out. |
| 37 | What is QuickSight | AWS dashboards: data source â†’ dataset â†’ analysis â†’ dashboard. We **describe**, not test. | Walk the four steps. |
| 38 | QuickSight | Our CSVs, three visuals. | Show the screenshots. |
| 39 | Dashboards describe. Inference decides. | QuickSight shows what is in the data: average, spread, whether two things move together. It cannot tell us if a pattern is real: that is the t-test and p-value. And a dashboard shows whatever you feed it, so bias and confounders still matter. | 🖱 left (describe) → right (decide) → Hazel's pipeline → warning. |

## Epilogue Â· The big picture (40–46)

| # | Slide | Say | Do |
|---|-------|-----|----|
| 40 | p-hacking | Keep changing things until p < 0.05 and it is searching, not evidence. | ðŸ–± click through. |
| 41 | Challenge | B has the higher average. Which conclusion is justified *before* the test? | ðŸ—³ hand it to the room. |
| 42 | Conclusion | Recap the whole chain once. Close on the last line. | Read the chain. |
| 43 | STAR framework | Write results as Situation, Task, Action, Result. | ðŸ–± four steps. |
| 44 | Study methods | Does group study give higher scores? Î± = 0.05, set **before** the data. | ðŸ—³ ~2 min to fill the blanks. |
| 45 | Fill the blanks | p = 0.002 â†’ reject Hâ‚€. p = 0.20 â†’ fail to reject (not proof they're equal). | Pick a scenario, ðŸ–± Next step. |
| 46 | Questions and thanks | Thank them. If quiet, ask: *Which result surprised you most? Where could a confounder hide in a study you know?* | Open the floor. |

---

## Say these three things out loud

1. **Evidence, not proof.** Rejecting Hâ‚€ never proves anything.
2. **Correlation is not causation.** Only a randomized experiment supports cause.
3. **Significant is not important.** p < Î± is a decision rule, not the size of the effect.
