# Test Cases — Partner Offer QA

## TC-01 — Partner Disabled
Precondition: enable_offers = false

Steps:
1. Submit offer
2. Run validation
3. Generate QA findings

Expected:
- Offer status = rejected
- Finding:
  - issue_type = partner_disabled
  - severity = critical

---

## TC-02 — Amount Below Minimum
Precondition: amount < min_amount

Expected:
- Offer status = rejected
- Finding:
  - issue_type = amount_below_min
  - severity = major

---

## TC-03 — Amount Above Maximum
Precondition: amount > max_amount

Expected:
- Offer status = rejected
- Finding:
  - issue_type = amount_above_max
  - severity = major

---

## TC-04 — Valid Offer
Precondition: enable_offers = true AND min ≤ amount ≤ max

Expected:
- Offer status = validated
- No QA findings created

---

## TC-05 — Regression Validation
Steps:
1. Modify partner rules
2. Run regression comparison query
3. Identify mismatches
4. Correct data
5. Re-run regression

Expected:
- Regression query returns 0 rows