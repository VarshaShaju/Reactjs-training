import Logo from "../assets/kv logo.png";
import "../styles/style.css";
import { useState, useEffect } from "react";
import { useLoginEmployeeMutation } from "../services/baseApi";
import { setStorage } from "../services/utils.js";
import { useNavigate } from "react-router-dom";


const LoginBox = () => {
  const navigate = useNavigate();
  const [login, result] = useLoginEmployeeMutation();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const onChange = (value, key) => {
    setCredentials({
      ...credentials,
      [key]: value,
    });
  };

  const onClickSubmit = () => {
    const payload = {
      username: credentials.username,
      password: credentials.password,
    };
    console.log(payload)
    login(payload);
    
  };

  useEffect(() => {
    if (result.isSuccess) {
        console.log(result.data.data.idToken)
      setStorage("idToken", result.data.data.idToken);
      navigate(`/list`);
    }

  }, [result]);

  return (
    <div className="loginbox">
      <img src={Logo} height={45} width={208} />
      <input
        placeholder="Username"
        type="text"
        className="logininput logininput1"
        onChange={(event) => onChange(event.target.value, "username")}
      />
      <input
        placeholder="Password"
        type="password"
        className="logininput logininput2"
        onChange={(event) => onChange(event.target.value, "password")}
      />
      <div>
        <button class="loginbutton" onClick={() => onClickSubmit()}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginBox;