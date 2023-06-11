import React, { useEffect } from 'react';
import './skill.css';

interface Skill {
  name: string;
  value: number;
  color: string;
}
const skills: Skill[] = [
  { name: 'Mission and Vision', value: 100, color: 'bg-success' },
  { name: 'Engagement/Collaboration', value: 90, color: 'bg-info' },
  { name: 'Advocacy/Policy Influence', value: 75, color: 'bg-warning' },
  { name: 'Capacity/Sustainability', value: 55, color: 'bg-danger' },
];
const Skills: React.FC = () => {
  

  useEffect(() => {
    const skillsSection = document.getElementById('skills');
    const progressBars = document.querySelectorAll('.progress-bar');

    const fillProgressBar = (progressBar: HTMLElement, targetValue: number) => {
      let currentValue = 0;
      const increment = targetValue / 100; // Adjust the increment based on the target value

      const animateProgressBar = () => {
        progressBar.style.width = `${currentValue}%`;
        if (currentValue < targetValue) {
          currentValue += increment;
          requestAnimationFrame(animateProgressBar);
        }
      };

      animateProgressBar();
    };

    const handleScroll = () => {
      const bounding = skillsSection!.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (bounding.top <= windowHeight && bounding.bottom >= 0) {
        progressBars.forEach((progressBar, index) => {
          const targetValue = skills[index].value;
          fillProgressBar(progressBar as HTMLElement, targetValue);
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="skills">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h3>Our Programs</h3>
          <p>
          Our Programs empower children, promote girls' education, ensure adolescent sexual and reproductive health,
          support orphans and vulnerable children, foster youth employment, and advocate for women's rights.
          Together, we create a brighter future for all.
          </p>
        </header>

        <div className="skills-content">
          {skills.map((skill, index) => (
            <div className="progress" key={index}>
              <div
                className={`progress-bar progress-bar-striped progress-bar-animated ${skill.color}`}
                role="progressbar"
                aria-valuenow={skill.value}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <span className="skill">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
