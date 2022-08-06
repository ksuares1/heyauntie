import Toolbar from "./Navbar";





const AunteeChatMessage=() => {
    return(
     <div class="auntee-profile">
        <Toolbar/>
        <div class="auntee-pic">
            <img  src={require("../assets/img/auntee-profile-pic.png")} alt="auntee-profile-pic" />
        </div>
        </div>
    )
}

export default AunteeChatMessage;