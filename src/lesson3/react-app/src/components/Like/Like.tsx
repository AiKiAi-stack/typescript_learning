import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface Props {
    onClick: () => void
}
const Like = ({onClick}:Props) => {
  const [LikeOrNot, setLikeOrNot] = useState(false);
  const toggle = () => {
    setLikeOrNot(!LikeOrNot)
    onClick()
  }
  if (LikeOrNot)
    return (
      <AiOutlineHeart
        color="red"
        size="20"
        onClick={toggle}
      />
    );
  return (
    <AiFillHeart
      color="red"
      size="20"
      onClick={toggle}
    />
  );
};

export default Like;
