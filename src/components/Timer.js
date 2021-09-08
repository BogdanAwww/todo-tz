import { useState, useEffect } from 'react';

const Timer = ({ deadline, id, completed }) => {
  const [tick, setTick] = useState('0:0:0');
  useEffect(() => {
    const interval = setInterval(() => {
      const diffTime = (new Date(deadline) - new Date());

      if (diffTime <= 0) {
        alert(`task: ${id} ended ${completed ? 'successfully' : 'not in time'}`);
        clearInterval(interval);
      } else {
        const s = Math.floor(diffTime / 1000) % 60;
        const m = Math.floor(diffTime / (1000 * 60)) % 60;
        const h = Math.floor(diffTime / (1000 * 60 * 60));
        setTick(`${h}:${m}:${s}`);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>{tick}</div>
  );
};

export default Timer;
