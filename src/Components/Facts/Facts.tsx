import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import CounterUp from './CounterUp';

const factsData = [
  { icon: 'flaticon-home', count: '150', text: 'Children' },
  { icon: 'flaticon-charity', count: '22', text: 'Volunteers' },
  { icon: 'flaticon-kindness', count: '1000', text: 'Our Goal' },
  { icon: 'flaticon-donation', count: '5000', text: 'Raised' },
];

const Facts = () => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
  });

  const [countersDisplayed, setCountersDisplayed] = useState(false);

  useEffect(() => {
    if (inView && !countersDisplayed) {
      setCountersDisplayed(true);
    }
  }, [inView, countersDisplayed]);

  return (
    <div className="facts" data-parallax="scroll" data-image-src="assets/img/facts.jpg">
      <div className="container">
        <div className="row">
          {factsData.map((fact, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="facts-item">
                <i className={fact.icon}></i>
                <div className="facts-text">
                  <h3
                    className={fact.count.startsWith('1') ? 'facts-plus' : fact.count.includes('5') ? 'facts-dollar':''}
                    data-toggle="counter-up"
                    ref={inViewRef} // Attach the ref to the element
                  >
                    {countersDisplayed ? (
                      <CounterUp start={0} end={parseInt(fact.count)} delay={10} duration={2000} />
                    ) : (
                      fact.count
                    )}
                  </h3>
                  <p>{fact.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facts;
