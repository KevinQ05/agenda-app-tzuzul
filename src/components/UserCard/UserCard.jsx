import "./UserCard.scss";
import React from "react";
import useAuthContext from "../../hooks/useAuthContext";

export default function UserCard() {
  const { user } = useAuthContext();

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
