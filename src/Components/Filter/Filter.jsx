import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../Redax/dishesSlice";
import "./filter.css";

export default function Filter({ category }) {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(getSelectedCategory);
  return (
    <div>
      <p
        onClick={() => {
          dispatch(filterCategory(category));
        }}
        className={
          selectedCategory === category
            ? "categoryButtonSelected categoryButton"
            : "categoryButton"
        }
      >
        {category}
      </p>
    </div>
  );
}
