Partner Offer Portal — Integration & QA Demo
Overview

This project simulates a real-world partner offer integration flow, focusing on rule-based validation, data consistency, QA findings, and regression testing.

It is designed to reflect how partner offers are validated against configuration rules, how issues are logged, and how regressions are detected and resolved after rule changes.

This repository is not a UI product, but a technical integration + QA exercise demonstrating:

SQL-based rule validation

Configuration-driven behavior (JSON / properties)

Structured QA documentation

Regression testing workflows

Clean Git practices

Core Concepts Demonstrated

Partner-specific business rules (min/max amount, enable/disable)

Offer status validation (validated vs rejected)

QA findings logging for rejected offers

Regression testing after rule/config changes

Clear documentation for stakeholders and developers

Project Structure
partner-offer-portal/
│
├── index.html                 # Demo UI (static)
├── case-study.html            # Project explanation
├── style.css                  # UI styling
├── script.js                  # Frontend validation logic
│
├── offers.sample.json         # Sample incoming offers
├── partner.rules.json         # Partner rules (JSON format)
├── partner.rules.properties   # Partner rules (properties format)
│
├── offer_findings_report.sql  # SQL queries for QA findings & validation
│
├── TEST_PLAN.md               # Overall test strategy
├── TEST_CASES.md              # Detailed test cases
├── REGRESSION_CHECKLIST.md    # Regression testing steps
├── BUG_REPORTS.md             # Logged defects
├── NOTES.md                   # Implementation notes
│
└── README.md                  # Project overview (this file)
Validation Logic (High Level)

Offer status is derived from partner rules:

If partner offers are disabled → rejected

If amount < min_amount → rejected

If amount > max_amount → rejected

Otherwise → validated

This logic is:

Recomputed using SQL

Compared against stored offer status

Used for regression detection after configuration changes

QA & Regression Workflow

Validate offers against current partner rules

Log QA findings for rejected offers

Run regression query:

Compare stored status vs expected status

Investigate mismatches

Apply controlled updates if needed

Re-run regression until 0 mismatches

Regression is considered PASSED only when:

Stored status matches expected status

No rule violations remain

QA findings are consistent

Why This Project Exists

This project was built to refresh and demonstrate hands-on experience with:

Integration testing

Data validation using SQL

Configuration-driven systems

QA documentation and workflows

Regression testing in production-like scenarios

It reflects the type of work typically performed in partner integrations, QA, and product operations teams.

Tools & Technologies

HTML5 / CSS3 (UI demo)

JavaScript (frontend validation)

PostgreSQL / SQL (data validation & regression)

JSON / Properties files (configuration)

Git & GitHub (version control)

Markdown (QA documentation)

Status

✅ Complete
✅ Regression clean
✅ QA documentation finalized
✅ Ready for review or discussion
