import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export function useScrollTop(){
  const navigate = useNavigate();

  return useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [navigate])
}