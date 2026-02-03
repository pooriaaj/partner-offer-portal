# Test Plan — Partner Offer Integration QA

## Scope
Validate partner offers against business rules, ensure data integrity, and confirm release readiness.

## In Scope
- UI and offer submission logic
- Partner configuration rules
- Offer validation status
- QA findings logging
- Regression testing after rule changes

## Out of Scope
- Payment processing
- External partner APIs

---

## Validation Strategy

### Rule-Based Validation
Each offer is evaluated against:
- partner_rules.enable_offers
- partner_rules.min_amount
- partner_rules.max_amount

Expected outcome:
- rejected if any rule violated
- validated otherwise

---

## QA Findings Logging

Rejected offers generate structured QA findings stored in the database.

### Finding Fields
- issue_type (partner_disabled, amount_below_min, amount_above_max)
- severity (critical, major)
- description (human-readable explanation)

---

## Regression Testing

After any rule or configuration change:
1. Recompute expected status using current rules
2. Compare expected vs stored offer status
3. Investigate any mismatch
4. Correct data and re-run regression until zero mismatches

Regression is considered PASSED only when:
- No offers violate current rules
- Stored status matches expected status

---

## Exit Criteria
- All offers match expected validation status
- All rejected offers have QA findings
- Regression query returns 0 rows