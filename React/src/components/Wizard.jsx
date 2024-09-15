import {useState, useContext, useEffect} from 'react'
import FadeTransition from './FadeTransition';
import InitialView from '../views/InitialView';



const Wizard = () => {
  const [View, setView] = useState(() => InitialView)
  

  return (
    <div className='w-screen h-screen'>

      <FadeTransition>
        <View setView={setView} />
      </FadeTransition>
    </div>
  );
};

export default Wizard;