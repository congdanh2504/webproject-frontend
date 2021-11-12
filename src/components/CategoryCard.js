import React from "react";

const categories = new Map();
categories.set("Programmer", "assets/img/categories/programmer.png");
categories.set("Editor", "assets/img/categories/editor.png");
categories.set("Receptionist", "assets/img/categories/receptionist.png");
categories.set("Designer", "assets/img/categories/designer.png");
categories.set("Web developer", "assets/img/categories/developer.png");

function CategoryCard(props) {
  return (
    <div class="speicality-item text-center">
      <div class="speicality-img mx-auto">
        <img
          src={categories.get(props.title)}
          class="img-fluid"
          alt="Speciality"
        />
        <span>
          <i class="fa fa-circle" aria-hidden="true"></i>
        </span>
      </div>
      <p>{props.title}</p>
    </div>
  );
}

export default CategoryCard;
