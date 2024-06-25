import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import imageSrc from './img1.jpeg'; // make sure to provide the correct path to your image

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div
      className='d-flex justify-content-start align-items-center'
      style={{
        height: "90vh",
        backgroundColor: "#ffff",
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    >
       
      <div className="text-center"> 
      <h1 className="mb-4 display-1">COUNTER APP</h1>
      {/* Center content within the parent */}
      <p className="display-1 mb-7">{count}</p>
        
        <div className="d-flex justify-content-center"> {/* Center buttons horizontally */}
          <button className='btn btn-success btn-lg mx-5' onClick={increment} aria-label="Increment">(+) Increment</button> {/* btn-lg increases the button size */}
          <button className='btn btn-success btn-lg mx-5' onClick={decrement} aria-label="ecrement">(-) Decrement</button>
        </div>
      </div>
    </div>
  );
}
