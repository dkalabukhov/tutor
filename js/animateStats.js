export function animateStats() {
  const options = {
    root: null,
    threshold: 0.2,
  };

  const handleStatsIntersect = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const speed = Number(counter.getAttribute('data-speed'));
        const total = Number(counter.getAttribute('data-total'));
        const counterValue = counter.querySelector('.counter-value');
        const counterSuffix = counter.querySelector('.counter-suffix');

        let currentValue = 0;

        const increment = setInterval(() => {
          currentValue += 1;
          counterValue.textContent = currentValue;

          if (currentValue >= total) {
            clearInterval(increment);
            if (counterSuffix) {
              counterSuffix.textContent = '+';
            }
          }
        }, speed);

        observer.unobserve(counter);
      }
    });
  };

  const observer = new IntersectionObserver(handleStatsIntersect, options);

  return observer;
}
