import { useRef, useState, useEffect } from "react";
import axios from "../API/axios";
const Login = () => {
  // to set focus on first input and on error
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [password, setPass] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success,setSuccess] =useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  // empty out any error msg  if user changes inputs
  useEffect(() => { 
    setErrMsg("");
  }, [user, password]);


  const submitHandler=async(e)=>{

    e.preventDefault();
    try{
        const response = await axios.get(`/users?username=${user}`);
        console.log(response);
        const userData=response.data[0];

        if(user===userData.username && password===userData.password ){
            console.log("loged in")

            setSuccess(true);
        }else{
            // username found but wrong password
            setErrMsg("wrong password or username")
        }
       
     
    
    }catch(e){
        console.log(e)
        if(e.response?.status===200){
            // retrun empty array
            setErrMsg("wrong password or username")
        }else{
            setErrMsg("login failed")
        }


        errRef.current.focus();
    }

  }
  return (
    <>{
        success ? (
            <section>
                <h1>you are now logged in!</h1>

            </section>
        ):
        (<section>
            <p ref={errRef}>{errMsg}</p>
            <h1>sign in</h1>
            <form onSubmit={submitHandler}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  id="username"
                  type="text"
                  required
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => {
                    setUser(e.target.value);
                  }}
                  value={user}
                />
              </div>
              <div>
                <label htmlFor="password">password</label>
                <input
                  id="password"
                  type="password"
                  required
                 
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                  value={password}
                />
              </div>
    
              <button> sign in</button>
            </form>
            <p> need an account <b>sign up</b></p>
          </section>)

    }
    
    </>
  );
};

export default Login;
