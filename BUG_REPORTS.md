# BUG REPORTS — Partner Offer Portal

This document records defects identified during validation and regression testing.
All issues are documented in a concise, reproducible format suitable for developers and stakeholders.

---

## BUG-001 — Offer status not aligned with updated partner rules

**Area:** Data / Configuration / Status Validation  
**Partner:** AIRNOVA  
**Severity:** Major  
**Status:** Fixed  

---

### Summary
Stored offer status in `offers.status` did not reflect the latest rule logic defined in `partner_rules`
after partner configuration updates.

---

### Expected Behavior
Offer status should be consistently derived from partner rules:

- Partner disabled → `rejected`
- Amount below minimum → `rejected`
- Amount above maximum → `rejected`
- Otherwise → `validated`

---

### Actual Behavior
At least one offer remained in `rejected` status even though current rule logic
evaluated the offer as `validated`.

---

### Steps to Reproduce
1. Update AIRNOVA partner rule configuration (enable flag or min/max thresholds)
2. Run regression query comparing stored status vs expected status
3. Observe rows returned where `offers.status <> expected_status`

---

### Evidence
Regression comparison query returned mismatched rows for AIRNOVA offers.

---

### Root Cause
Offer statuses were not backfilled after partner rule changes, causing outdated status values
to remain stored in the database.

---

### Fix
Applied a controlled SQL update using a CTE to recompute and backfill offer statuses.
Update was explicitly scoped to the affected partner only.

---

### Verification
Re-ran regression mismatch query after fix:

✅ Query returned **0 rows**  
Regression confirmed clean.