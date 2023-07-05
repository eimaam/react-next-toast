import React from 'react';

interface SuccessNotificationProps {
  message: string;
}

const SuccessNotificationToast: React.FC<SuccessNotificationProps> = ({ message }) => {
  const successStyle: React.CSSProperties = {
    position: "fixed",
    top: "100px",
    right: "10px",
    width: "320px",
    backgroundColor: "#C2ECC1",
    border: "2px solid #000",
    borderRadius: "8px",
    display: "flex",
    gap: "1rem",
    padding: "0.5rem",
  };
  
  return (
    <div style={successStyle}>
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="25.5"
          width="25"
          height="25"
          rx="6.5"
          transform="rotate(-90 0.5 25.5)"
          fill="#C2ECC1"
        />
        <path
          d="M7 13.0111L10.9945 17.0221L19 9"
          stroke="#131313"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="0.5"
          y="25.5"
          width="25"
          height="25"
          rx="6.5"
          transform="rotate(-90 0.5 25.5)"
          stroke="#131313"
        />
      </svg>

      <span style={{ color: "black", fontSize: "1rem" }}>
        {message}
      </span>
    </div>
  );
};

export default SuccessNotificationToast;
