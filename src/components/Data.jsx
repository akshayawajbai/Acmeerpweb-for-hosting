import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import '../css/Data.css';

const stats = [
  { id: 1, value: 25, suffix: '+', label: 'Years of Experience' },
  { id: 2, value: 200, suffix: '+', label: 'Skill Experts' },
  { id: 3, value: 1800, suffix: '+', label: 'Customers' },
  { id: 4, value: 24, suffix: '/7', label: 'Support' },
];

const Data = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [hasAnimated, setHasAnimated] = React.useState(false);

  React.useEffect(() => {
    if (inView) {
      setHasAnimated(true);
    } else {
      setHasAnimated(false);
    }
  }, [inView]);

  return (
    <div className="stats-section" ref={ref}>
      {stats.map(stat => (
        <div key={stat.id} className="stat-box">
          <h2>
            {hasAnimated ? (
              <CountUp
                start={0}
                end={stat.value}
                duration={2}
                separator=""
                suffix={stat.suffix}
                key={inView ? 'countup-in' : 'countup-out'}
              />
            ) : (
              0 + stat.suffix
            )}
          </h2>
          <p>{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Data;
