# Partner Offer Portal  
### Integration & QA Demo

## Overview
This project simulates a **real-world partner offer integration flow**, focusing on **rule-based validation, data consistency, QA findings, and regression testing**.

It demonstrates how partner offers are:
- validated against configuration rules  
- checked for data consistency  
- logged with structured QA findings  
- regression-tested after rule or config changes  

> ⚠️ This is **not a UI product**.  
> It is a **technical Integration + QA exercise** designed to mirror production workflows.

---

## What This Project Demonstrates
- SQL-based rule validation  
- Configuration-driven behavior (JSON / properties)  
- Structured QA documentation  
- Regression testing workflows  
- Clean Git practices  

---

## Core Concepts Demonstrated
- Partner-specific business rules (min/max amount, enable/disable)
- Offer status validation (`validated` vs `rejected`)
- QA findings logging for rejected offers
- Regression testing after rule/config changes
- Clear documentation for stakeholders and developers

---

## Project Structure

# Partner Offer Portal  
### Integration & QA Demo

## Overview
This project simulates a **real-world partner offer integration flow**, focusing on **rule-based validation, data consistency, QA findings, and regression testing**.

It demonstrates how partner offers are:
- validated against configuration rules  
- checked for data consistency  
- logged with structured QA findings  
- regression-tested after rule or config changes  

> ⚠️ This is **not a UI product**.  
> It is a **technical Integration + QA exercise** designed to mirror production workflows.

---

## What This Project Demonstrates
- SQL-based rule validation  
- Configuration-driven behavior (JSON / properties)  
- Structured QA documentation  
- Regression testing workflows  
- Clean Git practices  

---

## Core Concepts Demonstrated
- Partner-specific business rules (min/max amount, enable/disable)
- Offer status validation (`validated` vs `rejected`)
- QA findings logging for rejected offers
- Regression testing after rule/config changes
- Clear documentation for stakeholders and developers

---

## Project Structure

partner-offer-portal/
│
├── index.html # Demo UI (static)
├── case-study.html # Project explanation
├── style.css # UI styling
├── script.js # Frontend validation logic
│
├── offers.sample.json # Sample incoming offers
├── partner.rules.json # Partner rules (JSON format)
├── partner.rules.properties # Partner rules (properties format)
│
├── offer_findings_report.sql # SQL queries for QA findings & validation
│
├── TEST_PLAN.md # Overall test strategy
├── TEST_CASES.md # Detailed test cases
├── REGRESSION_CHECKLIST.md # Regression testing steps
├── BUG_REPORTS.md # Logged defects
├── NOTES.md # Implementation notes
│
└── README.md # Project overview (this file)


---

## Validation Logic (High Level)

Offer status is derived from **partner rules**:

- If partner offers are disabled → `rejected`
- If `amount < min_amount` → `rejected`
- If `amount > max_amount` → `rejected`
- Otherwise → `validated`

This logic is:
- recomputed using SQL  
- compared against stored offer status  
- used for regression detection after configuration changes  

---

## QA & Regression Workflow

1. Validate offers against current partner rules
2. Log QA findings for rejected offers
3. Run regression query:
   - compare stored status vs expected status
4. Investigate mismatches
5. Apply controlled updates if needed
6. Re-run regression until **0 mismatches**

### Regression is considered **PASSED** only when:
- Stored status matches expected status
- No rule violations remain
- QA findings are consistent

---

## Why This Project Exists
This project was built to **refresh and demonstrate hands-on experience** with:

- Integration testing
- SQL-based data validation
- Configuration-driven systems
- QA documentation and workflows
- Regression testing in production-like scenarios

It reflects work commonly done in:
- Partner integrations  
- QA & validation teams  
- Product operations  

---

## Tools & Technologies
- **HTML5 / CSS3** — static UI demo
- **JavaScript** — frontend validation
- **PostgreSQL / SQL** — data validation & regression
- **JSON / Properties files** — configuration
- **Git & GitHub** — version control
- **Markdown** — QA documentation

---

## Project Status
✅ Complete  
✅ Regression clean  
✅ QA documentation finalized  
✅ Ready for review or discussion
