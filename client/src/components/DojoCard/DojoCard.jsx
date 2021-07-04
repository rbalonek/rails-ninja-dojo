import React from "react";
import "./DojoCard.css";
import { useHistory } from "react-router-dom";

export default function DojoCard(props) {
  let history = useHistory();

  const goToDojo = (id) => {
    history.push("/dojos/" + id);
    // console.log(id);
  };

  return (
    <div
      onClick={() => history.push(`/dojos/${props.dojo.id}`)}
      className="dojo-card__container"
    >
      <h1 style={{ color: "white" }}>{props.dojo.name}</h1>
    </div>
  );
}
