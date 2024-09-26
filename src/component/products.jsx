import Navbars from "./navbar.jsx";
import { prodetail } from "../assets/swiperpro.jsx";
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
            <div>{product.name}</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Products;
