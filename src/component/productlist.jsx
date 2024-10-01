import Navbars from "./navbar.jsx";
import { prodetail } from "../assets/swiperpro.jsx";

import Footer from "./footer.jsx";
import "./productslist.scss";

function Productslist() {
  // let product = prodetail[0];
  return (
    <>
      <Navbars />
      <hr />
      <div className="producthome">
        <div className="product">

          {prodetail.map((data, index) => (
            <>

              <div className="proview">
                <div className="proviewimg">
                  <img src={data.img} alt="" />

                </div>
                <div className="proviewdetails">
                  <div className="proviewname">
                    {data.name}
                  </div>
                  <div className="provieprice">
                    MRP {data.price}
                  </div>
                  <div className="proviedes">
                    MRP {data.discription}
                  </div>
                </div>

              </div>
              <hr className="hr" />
            </>
          ))}


        </div>
      </div>
      <Footer />
    </>
  );
}
export default Productslist;