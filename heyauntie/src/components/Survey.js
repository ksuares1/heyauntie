import { PopupButton } from '@typeform/embed-react'
import Toolbar from './Navbar';
import Button from 'react-bootstrap/Button';




const Survey = () => {
  return (
    <div class="survey">
        <Toolbar/>
        
        <div class="survey-btn">
    <PopupButton id="pSdmmaef" style={{ fontSize: 20 }} className="my-button">
      Click to start Survey
    </PopupButton>
    <div>
    <a href="/registrationform">
    <Button variant="secondary">Sign Up</Button>{' '}
    </a>
    </div>
    </div>
    </div>
    
  )
}

export default Survey;