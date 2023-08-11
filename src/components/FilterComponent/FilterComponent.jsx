import React, { useState, useEffect } from "react";
import { Filter } from "./FilterComponentStyles";
import { useSelector } from "react-redux";
// import { Categories } from "../../products/filterProducts";

const FilterComponent = () => {
  const [activeFilters, setActiveFilters] = useState([]);

  const handleFilterClick = (e) => {
    const titleItem = e.target;
    const current = titleItem.nextElementSibling.querySelectorAll("li");

    setActiveFilters((prevFilters) => {
      const filter = titleItem.textContent;
      if (prevFilters.includes(filter)) {
        return prevFilters.filter((item) => item !== filter);
      } else {
        return [...prevFilters, filter];
      }
    });

    titleItem.classList.toggle("active");
    current.forEach((li, index) => {
      li.classList.toggle("visible");
      if (titleItem.classList.contains("active")) {
        li.style.transitionDelay = index * 40 + "ms";
      } else {
        li.style.transitionDelay = (current.length - index) * 40 + "ms";
      }
    });
  };

  useEffect(() => {
    const titleItems = document.querySelectorAll(".title_items");
    titleItems.forEach((titleItem) => {
      titleItem.addEventListener("click", handleFilterClick);
    });
    return () => {
      titleItems.forEach((titleItem) => {
        titleItem.removeEventListener("click", handleFilterClick);
      });
    };
  }, []);

  const categories = useSelector((state) => state.categories.categories);


  return (
    <Filter>
      <div className="filterBox">
        <p className="title">Filtros</p>

        <p className="title_items">Productos</p>
        <ul>
          <li>
            <input type="radio" id="all" name="type" />
            <label htmlFor="all">Todos</label>
          </li>
          {Object.entries(categories).map(([, cat]) => (
            <li key={cat}>  
              <input type="radio" id={cat} name="type" />
              <label htmlFor={cat}>{cat}</label>
            </li>
          ))}
        </ul>
        <p className="title_items">Precio</p>
        <ul>
          <li>
            <input type="radio" id="small" name="bonus" />
            <label htmlFor="small">$5.000,00</label>
          </li>
          <li>
            <input type="radio" id="medium" name="bonus" />
            <label htmlFor="medium">$5.000,00 - $10.000,00</label>
          </li>
          <li>
            <input type="radio" id="big" name="bonus" />
            <label htmlFor="big">$10.000,00 - $30.000,00</label>
          </li>
          <li>
            <input type="radio" id="bigest" name="bonus" />
            <label htmlFor="bigest">más $30.000,00</label>
          </li>
        </ul>
      </div>
    </Filter>
  );
};

export default FilterComponent;
