# REGRESSION CHECKLIST — Partner Offer Portal

## Purpose
Ensure recent changes to partner rules, configuration, or UI did not break core offer workflows.
This checklist is executed before demos, releases, or sharing results with stakeholders.

---

## Scope (What We Validate)
- Offer creation and persistence
- Partner rule enforcement (enable flag, min/max amounts)
- Offer status correctness (`validated` vs `rejected`)
- QA findings logging consistency
- Core UI demo loads without errors

---

## Regression Scenario — Partner Rule Change (AIRNOVA)

### Goal
Verify that stored offer statuses (`offers.status`) correctly reflect the **expected status**
derived from current `partner_rules` after configuration changes.

---

### Rule Logic (Expected Status)
An offer is expected to be:

- `rejected` if partner rules disable offers
- `rejected` if `offer.amount < min_amount`
- `rejected` if `offer.amount > max_amount`
- `validated` otherwise

---

### Steps Performed
- [x] Recalculated expected offer status using SQL CTE logic based on current `partner_rules`
- [x] Compared stored status (`offers.status`) against derived `expected_status`
- [x] Identified mismatched rows where stored status was outdated
- [x] Backfilled `offers.status` using a controlled `UPDATE + CTE`, scoped to AIRNOVA only
- [x] Re-ran regression comparison query

---

### Result
✅ **Regression clean**  
All AIRNOVA offers now match the expected status derived from current partner rules.  
Final regression query returned **0 mismatched rows**.

---

## Quick UI Smoke Check (Optional)
- [ ] Home page loads (`index.html`)
- [ ] Navigation works (Home / Case Study / Contact)
- [ ] Mini demo loads and JavaScript runs without console errors
- [ ] Form validation blocks invalid inputs
- [ ] JSON preview renders correctly after submission

---

## Notes
If regression mismatches appear in the future:
1. Verify current values in `partner_rules`
2. Re-run regression mismatch query
3. Apply controlled backfill only for affected partners
4. Re-verify until mismatch query returns **0 rows**