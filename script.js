const toggle = document.getElementById('pricing-toggle');

const monthlyPrices = document.querySelectorAll('.price.monthly');
const annualPrices = document.querySelectorAll('.price.annually');

const annuallyLabel = document.querySelector('.toggle-label.annually');
const monthlyLabel = document.querySelector('.toggle-label.monthly');

toggle.addEventListener('change', () => {
  const isChecked = toggle.checked;

  monthlyPrices.forEach(el => {
    el.style.display = isChecked ? 'block' : 'none';
  });

  annualPrices.forEach(el => {
    el.style.display = isChecked ? 'none' : 'block';
  });
});

toggle.addEventListener('change', () => {
  const isChecked = toggle.checked;

  // Toggle prices
  monthlyPrices.forEach(el => {
    el.style.display = isChecked ? 'block' : 'none';
  });
  annualPrices.forEach(el => {
    el.style.display = isChecked ? 'none' : 'block';
  });

  // Toggle label active state
  if (isChecked) {
    monthlyLabel.classList.add('active');
    annuallyLabel.classList.remove('active');
  } else {
    annuallyLabel.classList.add('active');
    monthlyLabel.classList.remove('active');
  }
});