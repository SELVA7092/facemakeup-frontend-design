import Navbars from "./navbar.jsx";
import { prodetail } from "../assets/swiperpro.jsx";

import Footer from "./footer.jsx";
import "./products.scss";

function Products() {
  let product = prodetail[0];
  return (
    <>
      <Navbars />
      <hr />
      <div className="product">
        <div className="productview">
          <div className="productleft">
            <img src={product.img} />
          </div>

          <div className="productright">
            <div style={{color:'rgb(233, 68, 96)'}}>SELZ Exclusive</div>
            <div className="porname">{product.name}</div>
            <div className="pordes">{product.discription}</div>
            <div className="porpri"><span style={{color:'rgb(233, 68, 96)'}}>Inclusive all tax</span><span>MRP {product.price}</span></div>
            <div className="VIEWALLSHADE"><span>VIEW ALL SHADE</span></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Products;