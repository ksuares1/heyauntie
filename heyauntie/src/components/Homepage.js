import Button from 'react-bootstrap/Button';

const Homepage=()=>{
    return(
        <div class="home-container">
            <div>
                <img src={require("../assets/img/heyauntie-ladies.png")}  alt="two-woman-dicussing-heyauntie" />
            </div>
            <div class="text-container">
                    <h1 class="home-heading"> A community to help you rise and thrive.</h1> 
                    <br/>
                    <p class="home-para">Hey Auntie! is a platform facilitating connections for Black women across ages and life stages to learn the "rules", gain the tools, and deepen their networks to thrive at home, work, and everywhere in between. 
                    </p>
                    <br/>
                    <div class="btns-container">
                    <div className="mb-2">
                        <a href="/login">
                <Button id="log-btn" variant="primary" size="lg">
                     Login
                     </Button>{' '}
                     </a>
                     <a href="/survey">
                <Button id="invite" variant="secondary" size="sm">
                    Request an Invite
                </Button>
                </a>
      </div>
                    </div>
                </div>
            
        </div>
    )
}

export default Homepage;