import React from "react";

function CategoryCard() {
  return (
    <div class="speicality-item text-center">
      <div class="speicality-img mx-auto">
        <img
          src="assets/img/categories/categories-01.png"
          class="img-fluid"
          alt="Speciality"
        />
        <span>
          <i class="fa fa-circle" aria-hidden="true"></i>
        </span>
      </div>
      <p>Programmer</p>
    </div>
  );
}

export default CategoryCard;
