import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/UserProvider.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdCard,
  faRssSquare,
  faSlidersH,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  const { logout } = useContext(UserContext);
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <header role="banner">
        <h1>DigiVote</h1>
        <ul className="utilities">
          <Link path to="/Settings">
            <FontAwesomeIcon className="access-settings" icon={faSlidersH} />
            <span className="set-lettering">Settings</span>
          </Link>
          {toggle ? (
            <Link path to="/Profile">
              <li onClick={() => setToggle(false)}>
                <FontAwesomeIcon className="access-profile" icon={faIdCard} />
                <span className="prof-lettering">Profile</span>
              </li>
            </Link>
          ) : (
            <Link path to="/Main">
              <li onClick={() => setToggle(true)}>
                <FontAwesomeIcon
                  className="access-profile"
                  icon={faRssSquare}
                />
                <span className="prof-lettering">Feed</span>
              </li>
            </Link>
              )}
          <Link path to="/">
            <li onClick={logout}>
              <FontAwesomeIcon className="access-logout" icon={faSignOutAlt} />
              <span className="logout-lettering">Logout</span>
            </li>
          </Link>
        </ul>
      </header>
    </div>
  );
};

export default Header;
