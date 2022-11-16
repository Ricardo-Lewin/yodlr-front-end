import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

/** Homepage of site.
 *
 * Shows welcome message or login/register buttons.
 *
 * Routed at /
 *
 * Routes -> Homepage
 */

function Homepage() {


  return (
      <div className="Homepage">
        <div className="container text-center">
          <h1 className="mb-4 font-weight-bold">Yodlr</h1>
          <p className="lead">Welcome!</p>
            <p>
                    <Link className="btn btn-primary font-weight-bold"
                          to="/users/new">
                      Sign up
                    </Link>
            </p>
        </div>
      </div>
  );
}

export default Homepage;