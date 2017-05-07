import React from "react";


function DateTime(props) {
  return (
    <p className="small text-muted"><i className="fa fa-clock-o" /> {props.date}</p>
  );
}

export default DateTime;
