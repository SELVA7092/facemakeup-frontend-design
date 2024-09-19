import "./createacc.scss";
import Alert from "@mui/material/Alert";
import { useState } from "react";

function Createacc() {
  const [details, setDetails] = useState({
    name: "",
    phonenum: "",
    email: "",
    password: "",
  });
  const [errordetails, errorsetDetails] = useState({});
  const [alert, setAlert] = useState(false);
  const [alertmsg, setAlertMsg] = useState();

  const handleChange = (e) => {
    setAlert(false)
    errorsetDetails({})
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const vali = () => {
    let reval = true;
    if (!details.name) {
      errordetails.name = "name is not entered";
      reval = false;
    }
    if (!details.phonenum) {
      errordetails.phonenum = "phone number is not entered";
      reval = false;
    }
    if (!details.email) {
      errordetails.email = "email is not entered";
      reval = false;
    }
    if (!details.password) {
      errordetails.password = "password is not entered";
      reval = false;
    }

    return reval;
  };

  function errormsg() {
    if (errordetails.name) {
      return errordetails.name;
    }
    if (errordetails.phonenum) {
      return errordetails.phonenum;
    }
    if (errordetails.email) {
      return errordetails.email;
    }
    if (errordetails.password) {
      return errordetails.password;
    }
  }

 function handleSubmit() {
    let valid = vali()
    setAlertMsg(errormsg())
    setAlert(!valid)
const respon=()=>{
      
  



}

  }
  return (
    <div className="layoutbox ">
      {alert ? (
        <Alert severity="error" className="alert">
          {alertmsg}
        </Alert>
      ) : (
        <></>
      )}
      <div className="box">
        <p>Create New Account</p>
        <hr />
        <input
          type="text"
          placeholder="First Name"
          name="name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Phone Number"
          name="phonenum"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />

        <div>
          <button onClick={handleSubmit}>CREATE ACCOUNT</button>
        </div>
        <hr />
      </div>
    </div>
  );
}
export default Createacc;
