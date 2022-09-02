import "./Home.scss";
import React from "react";
import { Navigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";

export default function Home() {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate replace to="/login" />;
  }

  return (
    <div className="content">
      {console.log(user)}
      <h1>Home</h1>
      <p className="sm">This is mobile</p>
      <p className="md">This is tablet</p>
      <p className="lg">This is screen</p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
        porro, ullam accusantium saepe consequatur explicabo. Maxime inventore,
        molestias perspiciatis ducimus, accusamus alias voluptas, impedit ab sit
        tempore natus porro quisquam.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
        porro, ullam accusantium saepe consequatur explicabo. Maxime inventore,
        molestias perspiciatis ducimus, accusamus alias voluptas, impedit ab sit
        tempore natus porro quisquam.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
        porro, ullam accusantium saepe consequatur explicabo. Maxime inventore,
        molestias perspiciatis ducimus, accusamus alias voluptas, impedit ab sit
        tempore natus porro quisquam.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
        porro, ullam accusantium saepe consequatur explicabo. Maxime inventore,
        molestias perspiciatis ducimus, accusamus alias voluptas, impedit ab sit
        tempore natus porro quisquam.
      </p>
    </div>
  );
}
