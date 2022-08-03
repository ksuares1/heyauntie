import Button from 'react-bootstrap/Button';
import{useRef, useState, useEffect, useContext} from 'react';
import AuthContext from '../context/AuthProvider';
import axios from '../api/axios';

const LOGIN_URL= '/auth';
const Login =() =>{

    const{setAuth}= useContext(AuthContext);
    // User Input
    const userRef=useRef();
    // User Password
    const errRef= useRef();

    const[user,setUser]=useState('');
    const[pwd,setPwd]=useState('');
    const [errMsg, setErrMsg]=useState(''); 
    const [success,setSuccess] =useState(false)
    useEffect(() => {
        setErrMsg('');
    }, [user,pwd])

    const handleSubmit =async(e) =>{
        e.preventDefault();
        try{
            const response= await axios.post(LOGIN_URL, JSON.stringify({user,pwd}),
            {
                headers:{'Content-Type': 'application/json'},
                withCredentials:true
            });

            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.accessToken;
            const roles=response?.data.roles;
            setAuth({user, pwd, roles, accessToken})
            setUser('');
            setPwd('');
            setSuccess(true);
        }   
            catch(err){
                if(!err?.response){
                    setErrMsg('No Server Response');
                }
                else if(err.response?.status === 400){
                    setErrMsg('Missing Username or Password');
                }
                else if(err.response?.status === 401){
                    setErrMsg('Unauthorized');
                }
                else{
                    setErrMsg('Login Failed');
                }
                    errRef.current.focus();
        }
         
    }

 return(
        <>
        {success ? (
            <section>
                <h1> You are logged in!</h1>
                <br/>
                <p>
                    <a href="/home"> Go to Dashboard</a>
                </p>
                 </section>
        ) : (
        <section>
            <p ref={errRef} className={errMsg ? "errmsg":
            "offscreen"} aria-live="assertive">{errMsg}</p>
        

        <div class="profile-img">
        <div class="blue-img">
            <a href="/">
            <img href="/" class="blue-logo"  src={require('../assets/img/blue-logo.png')} alt="heyauntie-blue-logo" />
            </a>

            <form onSubmit={handleSubmit}>
                <div>
                    {/* Username */}
                <label id= "user-label" htmlFor="username">Username</label>
                <div>
                <input type="text" id="username" ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user} required />
                </div>
                </div>

                {/* Password */}
                <div>
                <label id="password-label" htmlFor="password"> Password</label>
                <div>
                <input type="password" id="password" 
                onChange={(e) => setPwd(e.target.value)}
                value={pwd} required />

                <div class="login-btn">
                    <a href ="/dashboard">
                <Button variant="success">Login</Button>{' '}
                </a>
                </div>
                </div>
                </div>
                <br/>


                <div class="signup-btn ">
          
           <Button variant="outline-secondary">Login with Gmail</Button>{' '}
            </div>
              </form>
             <p>Need an account?</p>
             <span className="line">
                <a href ="/createaccount">Sign Up</a>
             </span>
             </div>
            </div>
            </section>
             )}
           </>
    )}
      
        


        export default Login;