import PropTypes from 'prop-types';

const BtnDelete = ({ product, handleDelete }) => {
  return (
    <button onClick={() => handleDelete(product._id)}>
      ❌
    </button>
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