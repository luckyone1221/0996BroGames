import {useState} from "react";
import {Zoom} from "../../SvgSpriptes";
import {useLanguage} from "../../Hooks/UseLang";

export const HeaderSearch = () => {
  const [inpSearchVal, setInpSearchVal] = useState();
  const lang = useLanguage();

  return (
    <div className="search">
      <div className="search__inp-wrap">
        <input
          placeholder={lang.header.searchPlaceholder}
          type="text"
          value={inpSearchVal}
          className="search__input form-control"
          onChange={(e) => {
            setInpSearchVal(e.target.value);
          }}
        />
        <div className="search__inp-icon">
          <Zoom/>
        </div>
      </div>
    </div>
  )
}