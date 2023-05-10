import {useSelector} from "react-redux";

export function useGetPlatform(itemId){
  const content = useSelector(state => state.content);

  const prodType = content[itemId] && content[itemId].prodType ? content[itemId].prodType : 'all';
  const currentPlatform = content[itemId] && content[itemId].currentPlatform ? content[itemId].currentPlatform : 'all';

  return [prodType, currentPlatform]
}