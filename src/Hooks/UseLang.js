import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

//!!!!!!!! put ru-Ru.json later
import ruLang from "../langs/en-US.json";
import enLang from "../langs/en-US.json";

export function useLanguage(){
  const lang = useSelector(state => state.lang);
  const [langFile, setLangFile] = useState(lang === "ru-Ru" ? ruLang : enLang);

  useEffect(() => {
    setLangFile(lang === "ru-Ru" ? ruLang : enLang);
  }, [lang])

  return langFile
}