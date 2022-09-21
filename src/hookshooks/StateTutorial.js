import { useRef } from 'react';
import Button from './Button';

const StateTutorial = () => {
   const buttonRef = useRef()

  return (
    <div style={style}>
      <h2>UseImperativeHandle Hook</h2>
      <button onClick={() => buttonRef.current.altToggle()}>Button from Parent</button>
      <Button ref={buttonRef}/>
    </div>
  );
}

export default StateTutorial;

const style = {
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   width: '100%',
   alignItems: 'center',
   gap: '10px'
}