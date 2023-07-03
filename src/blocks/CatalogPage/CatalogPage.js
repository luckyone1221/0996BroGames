import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import {CatalogSlider} from "../CatalogSlider/CatalogSlider";
import {CatalogHeader} from "../CatalogHeader/CatalogHeader";
import {CatalogItems} from "../CatalogItems/CatalogItems";
import {useTrackLang} from "../../Hooks/useTrackLang";

export const CatalogPage = (props) => {
  const {productType} = props;
  const trackLang = useTrackLang();

  return (
    <div className="main-wrapper main-wrapper--catalog">
      <Header/>
      <main>
        <CatalogHeader/>
        {/*<CatalogSlider/>*/}
        <CatalogItems productType={productType}/>
      </main>
      <Footer/>
    </div>
  )
}