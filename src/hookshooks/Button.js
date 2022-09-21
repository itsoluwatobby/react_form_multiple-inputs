import { useState, forwardRef, useImperativeHandle } from 'react';

const Button = forwardRef((props, ref) => {
   const [toggle, setToggle] = useState(false);

   useImperativeHandle( ref, () => ({
       altToggle() {
         setToggle(!toggle)
       }
   }));

  return (
   <>
      <button>Button from Child</button>
      {toggle && <h1 style={{color: 'orangered', textAlign: 'center'}}>Toggle</h1>}
   </>   
  );
})

export default Button;
