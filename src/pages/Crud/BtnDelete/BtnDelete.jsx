import { BiTrashAlt } from "react-icons/bi";

const BtnDelete = ({ product, handleDelete }) => {
  return (
    <BiTrashAlt
      onClick={() => handleDelete(product._id)}
      size="25px"
      color="var(--colorPrimary)"
    />
  );
};


export default BtnDelete;
