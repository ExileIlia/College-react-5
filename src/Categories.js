import React from "react";
import items from "./data";

const Categories = ({ filterItems }) => {
  const uniqueCategories = Array.from(
    new Set(items.map((item) => item.category))
  );

  const createCategoryButtons = () => {
    return (
      <>
        <button className="filter-btn" onClick={() => filterItems("all")}>
          All
        </button>

        {uniqueCategories.map((category) => (
          <button
            className="filter-btn"
            key={category}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        ))}
      </>
    );
  };

  return <div>{createCategoryButtons()}</div>;
};

export default Categories;