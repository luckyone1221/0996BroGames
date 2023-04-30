import {useState} from "react";
import {Zoom} from "../../SvgSpriptes";

export const HeaderSearch = () => {
  const [inpSearchVal, setInpSearchVal] = useState();

  return (
    <div className="search">
      <div className="search__inp-wrap">
        <input
          placeholder="Search game"
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