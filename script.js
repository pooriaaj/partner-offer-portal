// ---- Footer year ----
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ---- Demo validation helpers ----
const nameRegex = /^[A-Za-z\s]+$/;

const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");

if (submitBtn) submitBtn.addEventListener("click", submitForm);
if (resetBtn) resetBtn.addEventListener("click", resetForm);

function submitForm() {
  const data = readForm();
  const validation = validate(data);

  if (!validation.ok) {
    showStatus(validation.message, false);
    setJsonOutput({});
    return; // stops this function immediately (does NOT stop the whole program)
  }

  showStatus("Valid ✅ JSON generated below.", true);
  setJsonOutput(data);
}

function readForm() {
  const name = document.getElementById("name")?.value.trim() ?? "";
  const email = document.getElementById("email")?.value.trim() ?? "";
  const amountRaw = document.getElementById("amount")?.value ?? "";
  const amount = Number(amountRaw);

  return { name, email, amount };
}

function validate(data) {
  if (!data.name) return { ok: false, message: "Name is required." };
  if (!nameRegex.test(data.name)) {
    return { ok: false, message: "Name must contain letters and spaces only." };
  }

  if (!data.email) return { ok: false, message: "Email is required." };
  if (!data.email.includes("@") || !data.email.includes(".")) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  if (!Number.isFinite(data.amount) || data.amount <= 0) {
    return { ok: false, message: "Amount must be a positive number." };
  }

  return { ok: true, message: "OK" };
}

function setJsonOutput(obj) {
  const out = document.getElementById("jsonOutput");
  if (!out) return;
  out.textContent = JSON.stringify(obj, null, 2);
}

function showStatus(message, ok) {
  const status = document.getElementById("status");
  if (!status) return;

  status.textContent = message;
  status.classList.remove("ok", "bad");
  status.classList.add(ok ? "ok" : "bad");
}

function resetForm() {
  const form = document.getElementById("demoForm");
  if (form) form.reset();

  showStatus("Reset complete.", true);
  setJsonOutput({});
}