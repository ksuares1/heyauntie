import TermsModal from '../components/Modal';
import React, { useState } from 'react';


const TermsConditions= () => {
  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
    // Don't miss the exclamation mark
  }

  // When the button is clicked
  const btnHandler = () => {
    alert('The buttion is clickable!');
  };

  return (
    <div className="App">
      <div className="container">
        <div>
          <input type="checkbox" id="agree" onChange={checkboxHandler} />
          <label htmlFor="agree"> I agree to these <a href="#/"><b>terms and conditions</b></a></label>
         
          <br/>
          <div>
            {/* Modal for Terms and Conditions */}
        <TermsModal/>
        </div>

        
        {/* Don't miss the exclamation mark* */}
        <button disabled={!agree} className="btn" onClick={btnHandler}>
        
        </button>
      </div>
    </div>
    </div>
  );
};

export default TermsConditions;