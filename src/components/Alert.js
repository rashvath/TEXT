import React from "react";

function Alert(props) {
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type.toLowerCase()} alert-dismissible fade show`}
        role="alert"
        style={{ backgroundColor: "#caf0f7", color: "#198754", border: "1px solid #a3cfbb" }} // ✅ Match your colors
      >
        <strong>{props.alert.type.charAt(0).toUpperCase() + props.alert.type.slice(1)}</strong>: {props.alert.message}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    )
  );
}

export default Alert;
