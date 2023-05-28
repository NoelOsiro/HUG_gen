import React, { useEffect, useState } from 'react';

interface FactItem {
  start: number;
  end: number;
  duration: number;
  label: string;
}
const factItems: FactItem[] = [
  { start: 0, end: 232, duration: 1, label: 'Food Programmes' },
  { start: 0, end: 421, duration: 1, label: 'Community Projects' },
  { start: 0, end: 1364, duration: 1, label: 'Hours of learning' },
  { start: 0, end: 38, duration: 1, label: 'Team members' },
];
const startCounting = () => {
  const counters = document.querySelectorAll('.purecounter');
  counters.forEach((counter, index) => {
    const { start, end, duration } = factItems[index];
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));

    let currentValue = start;
    const timer = setInterval(() => {
      currentValue += increment;
      counter.textContent = currentValue.toString();

      if (currentValue === end) {
        clearInterval(timer);
      }
    }, stepTime);
  });
};
const Facts: React.FC = () => {
  const [counted, setCounted] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      const factsSection = document.getElementById('facts');
      if (factsSection) {
        const rect = factsSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isVisible && !counted) {
          startCounting();
          setCounted(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [counted]);

  

  

  return (
    <section id="facts">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h3>Facts</h3>
          <p>How many livesHuG has affected so far.</p>
        </header>

        <div className="row counters">
          {factItems.map((item, index) => (
            <div className="col-lg-3 col-6 text-center" key={index}>
              <span
                data-purecounter-start={item.start}
                data-purecounter-end={item.end}
                data-purecounter-duration={item.duration}
                className="purecounter"
              ></span>
              <p>{item.label}</p>
            </div>
          ))}
        </div>

        <div className="facts-img">
          <img src="assets/img/facts-img.png" alt="" className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default Facts;
