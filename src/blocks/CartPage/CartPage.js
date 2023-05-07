import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import {Cart} from "./Cart";

export const CartPage = (props) => {

  return (
    <div className="main-wrapper">
      <Header/>
      <main>
        <Cart/>
      </main>
      <Footer/>
    </div>
  )
}