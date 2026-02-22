import React from "react";
import Filter from "./Filter";
import data from "../../assets/Data/data";

export default function AllCategories() {
  return (
    <div>
      <h1>What kind of food do you want</h1>
      {["ITALIAN", "SEAFOOD", "APPETIZERS", "SALADS", "ALL"].map((category) => {
        return <Filter key={category} category={category} />;
      })}
    </div>
  );
}
