import React from "react";

function Alert(props) {
  return (
    props.alert && (
      <div
        style={{
          position: "fixed", // Fixed position ensures it stays in place on the screen
          top: "10px", // Adjusts the vertical position
          left: "50%",
          transform: "translateX(-50%)", // Centers the alert horizontally
          zIndex: 9999,
          width: "auto",
          height: "50px", // Keeps the container height fixed
          display: "flex", // Flexbox for alignment
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className={`alert alert-${props.alert.type.toLowerCase()} alert-dismissible fade show`}
          role="alert"
          style={{
            backgroundColor: "#caf0f7",
            color: "#198754",
            border: "1px solid #a3cfbb",
            width: "100%", // Makes the alert container take up the full width
            textAlign: "center",
          }}
        >
          <strong>{props.alert.type.charAt(0).toUpperCase() + props.alert.type.slice(1)}</strong>: {props.alert.message}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>
    )
  );
}

export default Alert;
