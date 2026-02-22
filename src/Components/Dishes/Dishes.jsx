import React from "react";
import Dish from "./Dish";
import data from "../../assets/Data/data";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../Redax/dishesSlice";

export default function Dishes() {
  const selectedCategory = useSelector(getSelectedCategory);
  return (
    <div>
      {data
        .filter((dish) => {
          if (selectedCategory === "ALL") return true;
          return selectedCategory === dish.category;
        })
        .map((dish) => {
          return <Dish key={dish.id} dish={dish} />;
        })}
    </div>
  );
}
