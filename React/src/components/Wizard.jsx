import {useState, useContext, useEffect} from 'react'
import FadeTransition from './FadeTransition';
import InitialView from '../views/InitialView';



const Wizard = () => {
  const [View, setView] = useState(() => InitialView)
  

  return (
      <FadeTransition>
        <View setView={setView} />
      </FadeTransition>
  );
};

export default Wizard;