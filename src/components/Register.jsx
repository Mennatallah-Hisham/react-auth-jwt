import { useState, useEffect, useRef } from "react";

// 4-24 letters
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPass, setValidPass] = useState(false);
  const [passFocus, setPassFocus] = useState(false);

  const [matchPass, setmatchPass] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState("flase");

  //set focus when comp loads
  useEffect(() => {
    userRef.current.focus();
  }, []);

  // to validate username
  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  // to validate password
  useEffect(() => {
    const result = PWD_REGEX.test(password);
    console.log(password);
    console.log(result);
    setValidPass(result);
    const match = password === matchPass;
    setmatchPass(match);
  }, [password, matchPass]);

  // error msg
  useEffect(() => {}, [user, password, matchPass]);
  return (
    <section>
      <p ref={errRef}>{errMsg}</p>

      <h1> Register</h1>

      <form>
        jjjj
        <div>
          <label htmlFor="username">userName</label>
          <input
            id="username"
            type="text"
            ref={userRef}
            autoComplete="off"
            autoCorrect="off"
            onChange={(e) => setUser(e.target.value)}
            required
            aria-invalid={validName?"false":"true"}
            aria-describedby="uidonte"
            onFocus={()=>setUserFocus(true)}
            onBlur={()=>setUserFocus(false)}
          />
          <p id="uidnote">
          4  to 24 characters.<br/>
            Must begin with a letter.<br/>
            Letters,numbers, underscores, hyphens allowed
          </p>
        </div>
      </form>
    </section>
  );
};

export default Register;