import React from 'react';

import './App.css';


import Sunny from './Climates/Sunny/Sunny.jsx';

function App() {
  return (
    <React.Fragment>
      <Sunny></Sunny>

      <div className='TemperatureBox'>109°</div>
      {/* <div className='UnitsButtonBox'>
        <button className='UnitButton' onClick={ () => alert() }>°F</button>
      </div> */}



    </React.Fragment>

  );
}

export default App;
