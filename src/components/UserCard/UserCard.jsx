import "./UserCard.scss";
import React from "react";
import useAuthContext from "../../hooks/useAuthContext";
import { Navigate } from "react-router-dom";

export default function UserCard() {
  const { user } = useAuthContext();
  if (!user) {
    return <Navigate replace to="/login" />;
  }

  const { name, picture } = user;
  return (
    <div className="user-card">
      <img
        className="card-profile-pic"
        src={picture.thumbnail}
        alt="profile-picture"
      />
      <div className="user-card-name">{`${name.first} ${name.last}`}</div>
    </div>
  );
}
