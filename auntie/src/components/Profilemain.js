import Toolbar from "./Navbar"



const MainProfile=() =>{
    return(
        <>
        <div class="profile-img">
        <Toolbar/>
        <div class="heyladies">
            <h1 class="ladies-question" >Ask a Question</h1>
            <div class="auntie-links">
                <a href="/auntie"><h3 class="identify-auntie">I'm an Auntie</h3></a>
                <a href="/auntee">
                <h3 class="identify-auntee">I'm an Auntee</h3>
                 </a>
                 </div>  
                 <div>
                <img class="ladies-convo" src={require("../assets/img/heyauntie-ladies.png")} alt="heyauntie-ladies"/>
                </div>
                </div>
                         
                </div>
                </>
        
       
        
       
    )

}

export default MainProfile;