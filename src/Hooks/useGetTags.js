import {useSelector} from "react-redux";

export function useGetTags(itemId){
  const content = useSelector(state => state.content);
  const tags = content[itemId] && content[itemId].tags ? content[itemId].tags : [];

  return tags
}