import "./signlog.scss"
import { Link } from "react-router-dom";

 function signlog() {
    return (
        <div className="layoutbox ">

           <div className="box">
           <p>LOGIN</p>
            <hr/>
             <input type="text" placeholder="Phone number" />
             <button>LOGIN</button>
             <hr/>
             <div><button><Link className="links" to={'/createacc'}>CREATE ACCOUNT</Link ></button></div>
             <hr/>
           </div>
        </div>
    );
}
export default signlog;