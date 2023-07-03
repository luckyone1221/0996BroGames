import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import {Cart} from "./Cart";
import {useTrackLang} from "../../Hooks/useTrackLang";

export const CartPage = (props) => {
  const trackLang = useTrackLang();

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