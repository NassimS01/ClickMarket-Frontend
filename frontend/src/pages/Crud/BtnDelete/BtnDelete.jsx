import PropTypes from "prop-types";
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

// BtnDelete.propTypes = {
//   product: PropTypes.shape({
//     _id: PropTypes.string,
//     name: PropTypes.string,
//     price: PropTypes.number,
//     img: PropTypes.string,
//     descrip: PropTypes.string,
//     fav: PropTypes.bool,
//     category: PropTypes.string,
//     stock: PropTypes.number,
//     state: PropTypes.bool,
//   }),
//   handleDelete: PropTypes.func,
// };

export default BtnDelete;
