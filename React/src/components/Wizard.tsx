import {useState} from 'react'
import FadeTransition from './FadeTransition';

const Wizard = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4">
      <button 
        onClick={() => setCount(count + 1)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Increment
      </button>
      <FadeTransition>
        <div className="text-2xl font-bold">Count: {count}</div>
      </FadeTransition>
    </div>
  );
};

export default Wizard;