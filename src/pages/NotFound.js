import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <body class="error-page">
      <div class="main-wrapper">
        <div class="error-box">
          <h1>404</h1>
          <h3 class="h2 mb-3">
            <i class="fa fa-warning"></i> Oops! Page not found!
          </h3>
          <p class="h4 font-weight-normal">
            The page you requested was not found.
          </p>
          <Link to="/" class="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </body>
  );
}

export default NotFound;
