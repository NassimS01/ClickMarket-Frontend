import React, { useState } from 'react';

const ProductList = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);
    const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  setFilteredProducts(filtered);
};

return (
  <div>
    <input
      type="text"
      placeholder="Buscar productos..."
      value={searchTerm}
      onChange={handleSearch}
/>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;