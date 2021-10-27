import React from "react";
import { Link } from "react-router-dom";

function Breadcrumb(props) {
  return (
    <div class="breadcrumb-bar">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-md-12 col-12">
            <nav aria-label="breadcrumb" class="page-breadcrumb">
              <ol class="breadcrumb">
                {props.type == "admin" ? (
                  <>
                    <li class="breadcrumb-item">
                      <Link to="/admin">Dashboard</Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li class="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                  </>
                )}
                <li class="breadcrumb-item active" aria-current="page">
                  {props.title}
                </li>
              </ol>
            </nav>
            <h2 class="breadcrumb-title">{props.title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
