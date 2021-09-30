import React from "react";
import "../styles/index.css";

function Content(member) {
  let element;
  if (member.email === "") {
    element = (
      <div className="member-card danger" key={member.id}>
        <img src={member.image} alt="" />
        <h2> Name: {member.name} </h2>
        <span> Phone: {member.phone || "0X-XXXXXXXX"} </span>
        <span> URL: {member.website} </span>
      </div>
    );
  } else if (member.name !== "") {
    if (member.website === "") {
      element = (
        <div className="member-card" key={member.name}>
          <img src={member.image} alt="" />
          <h2> Name: {member.name} </h2>
          <strong> {member.email} </strong>
          <span> Phone: {member.phone || "0X-XXXXXXXX"} </span>
        </div>
      );
    } else {
      element = (
        <div className="member-card" key={member.name}>
          <img src={member.image} alt="" />
          <h2> Name: {member.name} </h2>
          <strong> {member.email} </strong>
          <span> Phone: {member.phone || "0X-XXXXXXXX"} </span>
          <span> URL: {member.website} </span>
        </div>
      );
    }
  }
  return element;
}
export default Content;
