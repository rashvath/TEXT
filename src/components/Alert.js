import React from "react";

function Alert({ alert, setAlert }) {
  // Function to capitalize the first letter
  const capitalize = (word) => word ? word.charAt(0).toUpperCase() + word.slice(1) : "";

  return (
    alert && (
      <div style={{ height: "50px" }}>
        <div
          className={`alert alert-${alert.type.toLowerCase()} alert-dismissible fade show`}
          role="alert"
          style={{
            backgroundColor: "#caf0f7", // Custom background color
            color: "#198754", // Custom text color
            border: "1px solid #a3cfbb", // Custom border color
          }}
        >
          <strong>{capitalize(alert.type)}</strong>: {alert.message}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setAlert(null)} // Manually dismissing the alert
          ></button>
        </div>
      </div>
    )
  );
}

export default Alert;
