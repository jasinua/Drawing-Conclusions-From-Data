# How to present each slide

**Story in one line:** a pattern in a sample becomes a conclusion only after good design, honest analysis and careful interpretation.

**Keys:** `→` next · `←` back · `L` English/Albanian · full notes in `notes.html`.
**Icons:** 🗳 ask the room · 🖱 click through steps

---

## Part 1 · The problem (1–7)

| # | Slide | Say | Do |
|---|-------|-----|----|
| 1 | Opening | We collect data all the time. The step from data to a conclusion is where things go wrong. | Just open. |
| 2 | The problem | A sample of students with sleep and GPA. What can we actually say? | 🗳 vote, then click their answer. |
| 3 | EDA vs inference | Before: describing data. Now: jumping from sample to population. That jump is **inference**. | Read the definition. |
| 4 | Population vs sample | We can't ask all 10,000 students, so we study a sample. A conclusion is only as good as the sample. | Drag the slider. |
| 5 | Sample size question | Which sample size would you trust? | 🗳 vote, click their choice. |
| 6 | Drawing a sample | Random picks from the whole jar. The white line is the sample average, in real life we never see the true mean. Margin of error = 1.96 × σ / √n. | Watch it play, press Replay if needed. |
| 7 | Sample size | One survey is close but not exact. We repeat it 25 times only to *see* how much a single survey can miss. Bigger sample, tighter dots. 4× the students only halves the error. Size doesn't fix bias. | 🗳 vote, 🖱 click through. |

## Part 2 · Study design (8–12)

| # | Slide | Say | Do |
|---|-------|-----|----|
| 8 | Scientific method | Six steps, each applies to our sleep study. The last loops back to a new question. | 🖱 six steps. |
| 9 | Experiment vocabulary | Sleep = explanatory, GPA = response. Course load = **confounder**, related to both. | 🖱 four cards. |
| 10 | Study design | Observational: we only record. Experiment: a random process assigns the treatment. Only an experiment can talk about **cause**. | Click both options. |
| 11 | Sleep case study | Course load changes sleep and GPA at the same time. | Click Next twice. |
| 12 | Correlation | r = 0.48: positive, moderate. r = how sleep and GPA move together ÷ how much each varies. Does it prove causation? **No.** | 🗳 YES/NO, then dots recolor by course load. |

## Part 3 · Inference language and the t-test (13–21)

| # | Slide | Say | Do |
|---|-------|-----|----|
| 13 | Language of inference | Four terms: H₀, Hₐ, p-value, α. Say "reject H₀" or "fail to reject H₀". A large p never proves H₀. | Point at each card. |
| 14 | Inference for a mean | Hazel and Everett: is the average GPA above 3.0? They got 3.971. Is that luck or real? A mean isn't Heads/Tails, so we use the **t-test**. | 🖱 steps. |
| 15 | Same distance, different spread | Same 3.971, but with small spread it is very surprising, with big spread it isn't. Spread lets us judge objectively. | Compare the two figures. |
| 16 | The t-test | t = how far the sample mean is from 3.0, in standard-error units. `s` is the sample standard deviation. | 🖱 Next: distance → standard error → t → p. |
| 17 | Null distribution of t | If H₀ is true, t is near 0. Ours is 21.8, far in the tail, so p ≈ 0. Strong evidence. Only about students like our sample. | 🖱 steps. |
| 18 | Significance | Shaded tails = p-value. Significant is a decision rule, not "important". | Toggle Study 1 / Study 2. |
| 19 | Scope of inference | Who can we generalize to? Only the population the sampling represents. | Ask, then reveal. |
| 20 | Extrapolation | Our data covers 4–10 hours. At 18 hours the line predicts GPA > 4.0. Don't predict outside the range. | Click to extend the line. |
| 21 | Type I and II errors | Type I: see an effect that isn't there (prob. α). Type II: miss one that is. | Toggle between them. |

## Part 4 · A/B testing (22–29)

| # | Slide | Say | Do |
|---|-------|-----|----|
| 22 | What is an A/B test | A race between two versions. Visitors are **randomly** assigned to A or B. Compare a metric. | 🖱 steps. |
| 23 | A/B testing | Non-profit, two donation pages, shown at the same time. Randomization makes it an experiment. | Read it out. |
| 24 | A/B phases | Testing phase (small group, A vs B), then implementation (roll out the winner). 5,000 of 50,000 visitors take part. | 🖱 steps. |
| 25 | Randomization steps | 1) choose how many take part, 2) pick them at random, 3) split randomly into A and B. Equal-sized groups. | 🖱 steps. |
| 26 | After the testing phase | Before rolling out: was it timing? Is it significant? Does it last? Are testers representative? | 🖱 steps. |
| 27 | Two-sample t-test | Two groups, so two-sample t-test. H₀: no difference. Same logic as before: t near 0 if H₀ is true. Also think practical size. | 🖱 steps. |
| 28 | A/B test result | B is about €2 higher, but don't call it better yet. | Click Run (t-test), then Implement. |
| 29 | Simultaneous testing | Run A and B together, otherwise season, holidays and the economy get mixed in. | Read it out. |

## Part 5 · Tools and pitfalls (30–34)

| # | Slide | Say | Do |
|---|-------|-----|----|
| 30 | What is QuickSight | AWS dashboards in the browser: data source → dataset → analysis → dashboard. We use it to **describe**, not to test. | Walk the four steps. |
| 31 | QuickSight | Our CSVs, three visuals. | Show the screenshots. |
| 32 | p-hacking | Keep changing things until p < 0.05 and it is not evidence, it is searching. | 🖱 click through. |
| 33 | Challenge | B has the higher average. Which conclusion is justified *before* the test? | 🗳 hand it to the room. |
| 34 | Conclusion | Recap the whole chain once. Close on the last line. | Read the chain. |

## Part 6 · Practice and review (35–44)

| # | Slide | Say | Do |
|---|-------|-----|----|
| 35 | Michael's coin | 60 Heads in 100 flips. Is that surprising for a fair coin? Figure 7.7 shows what a fair coin does. | 🗳 give them ~1 min for a–e. |
| 36 | Coin solution | Most trials near 50. Michael's 60: count 60 or more = 3 of 100 ≈ **0.03**. Below α = 0.05, so reject "fair". Evidence, **not proof**. | 🖱 six steps. |
| 37 | Statistical significance | Name it: enough evidence to reject H₀ = statistically significant. Not the same as large or important. | 🖱 steps. |
| 38 | STAR framework | Write results as Situation, Task, Action, Result. | 🖱 four steps. |
| 39 | Hypotheses | Map the coin onto the vocabulary. Null has "=", alternative has >, < or ≠. | 🖱 steps. |
| 40 | Rejecting the null | Memory aid: reject a negative and you get a positive. "Reject H₀" means "yes, there is a change". | Show the cartoon. |
| 41 | Statistic and p-value | Statistic = a number from the sample (here, # of Heads). p-value = chance of a result this extreme if H₀ is true. Lower p, stronger evidence. | 🖱 steps. |
| 42 | Study methods | Does group study give higher scores? H₀: no difference. α = 0.05, set **before** the data. | 🗳 ~2 min to fill the blanks. |
| 43 | Fill the blanks | Compare p with α. p = 0.002 → reject H₀. p = 0.20 → fail to reject (not proof they're equal). | Pick a scenario, 🖱 Next step. |
| 44 | Questions and thanks | Thank them. If quiet, ask: *Which result surprised you most? Where could a confounder hide in a study you know?* | Open the floor. |

---

## Say these three things out loud

1. **Evidence, not proof.** Rejecting H₀ never proves anything.
2. **Correlation is not causation.** Only a randomized experiment supports cause.
3. **Significant is not important.** p < α is a decision rule, not the size of the effect.
