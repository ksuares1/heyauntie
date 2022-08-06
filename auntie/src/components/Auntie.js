import Toolbar from "./Navbar";



const AuntieChat =() =>{
    return(
        <div class="auntie-profile">
            <div class="auntie-pic">
                <img src={require("../assets/img/auntie-pic.png")} alt="auntie"/>
            </div>
            <Toolbar/>
        </div>
    )
}

export default AuntieChat;