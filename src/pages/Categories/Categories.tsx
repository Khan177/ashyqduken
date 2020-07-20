import React, { useState, useEffect } from "react";
import { CategoriesService } from "../../service/service";

import { CategoryCardType } from "../../types/category-card.types";
import "./Categories.css";
import CategoryCard from "../../components/CategoryCard/CategoryCard";

export default function Categories() {
  const [categories, setCategories] = useState<CategoryCardType[]>([]);
  useEffect(() => {
    CategoriesService.get().then((res) => setCategories(res.data));
  }, []);
  return (
    <div className="categories">
      {categories.map((category) => (
        <CategoryCard
          name={category.name}
          key={category.id}
          path={category.path}
          image={category.image}
        />
      ))}
    </div>
  );
}
