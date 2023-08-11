import { useState } from "react";
import EditProductModal from "./EditProductModal";
import PropTypes from "prop-types";

const BtnEdit = ({ productData }) => {
    const [showModal, setShowModal] = useState(false);

    const handleModalOpen = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    return (
        <div>
            <button onClick={handleModalOpen}>📝</button>
            {showModal && (
                <EditProductModal
                    productData={productData}
                    onClose={handleModalClose}
                />
            )}
        </div>
    );
};

BtnEdit.propTypes = {
    productData: PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number,
        img: PropTypes.string,
        descrip: PropTypes.string,
        fav: PropTypes.bool,
        category: PropTypes.string,
        stock: PropTypes.number,
        state: PropTypes.bool,
    }),
};
export default BtnEdit;