import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

export function useBuyNow(id) {
  const navigate = useNavigate();
  const config = useSelector(state => state);
  const dispatch = useDispatch();

  return () => {
    dispatch({type: "ADD_TO_CART", payload: id});
    navigate(`/cart`);
  }
}