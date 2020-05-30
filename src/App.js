import React from 'react';
import './App.css';
import BackoffCalculator from './BackoffCalculator';
import BackoffCalculatorMobile from './BackoffCalculatorMobile';


function App() {

  function isMobile() {
    let mql = window.matchMedia('(max-width: 750px)');
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && mql.matches ) {
        return true;
    }
    return false;
}

  return (
    isMobile() ? ( <BackoffCalculatorMobile /> ) : ( <BackoffCalculator /> )
  );
}

export default App;
