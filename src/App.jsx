import React, { useState } from 'react';
import ThreeModel from './threedmodel';

const App = () => {
  const [shape, setShape] = useState('sphere');

  const handleProceed = () => {
    setShape((prevShape) => (prevShape === 'sphere' ? 'cube' : 'sphere'));
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div>
          <ThreeModel shape={shape} />
        </div>
        <div>
          <button onClick={handleProceed}>Proceed to {shape === 'sphere' ? 'Cube' : 'Sphere'}</button>
        </div>
      </div>
    </div>
  );
};

export default App;
