SELECT
  o.offer_id,
  p.code AS partner_code,
  o.status,
  qf.issue_type,
  qf.severity,
  qf.description
FROM offers o
JOIN partners p ON p.partner_id = o.partner_id
LEFT JOIN qa_findings qf ON qf.offer_id = o.offer_id
ORDER BY o.offer_id, qf.severity DESC;