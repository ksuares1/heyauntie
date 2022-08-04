import { PopupButton } from '@typeform/embed-react'
import Toolbar from './Navbar';




const Survey = () => {
  return (
    <div class="survey">
        <Toolbar/>
        
        <div class="survey-btn">
    <PopupButton id="pSdmmaef" style={{ fontSize: 20 }} className="my-button">
      Click to start Survey
    </PopupButton>
    </div>
    </div>
    
  )
}

export default Survey;