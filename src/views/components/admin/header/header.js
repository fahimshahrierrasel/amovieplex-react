import React from "react";
import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faCog,
  faIdCard,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { UserAvatar } from "../../../../constants/images";
import { connect } from "react-redux";
import { userLogout } from "../../../../redux/auth/actions";
import { Routes } from "../../../../constants/routes";

const AdminHeader = ({ logout }) => {
  const history = useHistory();
  const logoutClickHandler = () => {
    logout().then(() => {
      history.push(Routes.LOGIN_PAGE());
    });
  };
  return (
    <div className="admin-header">
      <FontAwesomeIcon icon={faSearch} className="header-icon__button" />
      <FontAwesomeIcon icon={faBell} className="header-icon__button" />
      <FontAwesomeIcon icon={faCog} className="header-icon__button" />
      <div className="user-info">
        <img className="avatar" src={UserAvatar} alt="User Avatar" />
        <span>Admin</span>
      </div>
      <div className="user-action__container">
        <div className="user-actions">
          <button>
            <FontAwesomeIcon icon={faIdCard} className="header-icon__button" />
            Profile
          </button>
          <button onClick={logoutClickHandler}>
            <FontAwesomeIcon
              icon={faSignOutAlt}
              className="header-icon__button"
            />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(userLogout())
});

export default connect(null, mapDispatchToProps)(AdminHeader);
