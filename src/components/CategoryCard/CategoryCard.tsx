import React from "react";

import "./CategoryCard.css";
import { CategoryCardType } from "../../types/category-card.types";

export default function CategoryCard({ name, image, path }: CategoryCardType) {
  return (
    <div className="category-card">
      <div className="category-card-image">
        <img src={image} alt={name} />
      </div>
      <div className="category-card-header">
        <h4>{name}</h4>
      </div>
    </div>
  );
}
