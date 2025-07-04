function calculateAge() {
  const year = document.getElementById('birthYear').value;
  const currentYear = new Date().getFullYear();
  const ageInYears = currentYear - year;
  const ageInDays = ageInYears * 365;
  document.getElementById(
    'result'
  ).textContent = `You are about ${ageInDays} days old!`;
}
