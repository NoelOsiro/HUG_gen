import React, { useState, useEffect } from 'react';
interface IProps {
    start: number;
    end: number;
    delay: number;
    duration: number;
}

const CounterUp: React.FC<IProps> = (props:IProps) => {
  const [count, setCount] = useState(props.start);
  const step = Math.ceil((props.end - props.start) / (props.duration / props.delay));

  useEffect(() => {
    if (count < props.end) {
      const timer = setInterval(() => {
        const nextCount = count + step;
        if (nextCount < props.end) {
          setCount(nextCount);
        } else {
          setCount(props.end);
          clearInterval(timer);
        }
      }, props.delay);

      return () => {
        clearInterval(timer);
      };
    }
  }, [count, props.end, props.delay, props.duration,step]);

  return <span className='text-white text-4xl'>{count}</span>;
};

export default CounterUp;
