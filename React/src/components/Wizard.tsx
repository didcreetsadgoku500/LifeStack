import {useState} from 'react'
import CardButton from '../atoms/CardButton';

const Wizard = () => {
  const [count, setCount] = useState(0);

  return (
      <CardButton onClick={() => setCount(count + 1)}>Count: {count}</CardButton>
  );
};

export default Wizard;