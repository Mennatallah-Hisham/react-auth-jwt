import { useRef, useState, useEffect } from "react";
const Login = () => {
  // to set focus on first input and on error
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [password, setPass] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  // empty out any error msg  if user changes inputs
  useEffect(() => {
    setErrMsg("");
  }, [user, password]);
  const submitHandler=(e)=>{
    e.preventDefault();

  }
  return (
    <>
      <section>
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
            <label htmlFor="password">username</label>
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
      </section>
    </>
  );
};

export default Login;
