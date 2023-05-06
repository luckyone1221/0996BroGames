import ppImg from '../../screen/cart.png'

import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import {PixelPerfect} from "../MainPage/MainPage";
import {Cart} from "./Cart";

export const CartPage = (props) => {

  return (
    <div className="main-wrapper">
      <Header/>
      <main>
        <Cart/>
      </main>
      <Footer/>
      {/*<PixelPerfect img={ppImg}/>*/}
    </div>
  )
}