import React from 'react';

interface ErrorNotificationProps {
  message: string;
}

const ErrorNotificationToast:React.FC<ErrorNotificationProps> = ({ message }) => {
    const errorStyle: React.CSSProperties = {
        position: "fixed",
        top: "80px",
        right: "10px",
        width: "320px",
        backgroundColor: "#FB8F6D",
        border: "2px solid #000",
        borderRadius: "8px",
        display: "flex",
        gap: "1rem",
        padding: "0.5rem",
      };
  
    return (
      <div style={errorStyle}>
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
            fill="#FB8F6D"
          />
          <path
            d="M13.0001 20.0575H8.45507C5.85257 20.0575 4.76507 18.1975 6.02507 15.925L8.36507 11.71L10.5701 7.75C11.9051 5.3425 14.0951 5.3425 15.4301 7.75L17.6351 11.7175L19.9751 15.9325C21.2351 18.205 20.1401 20.065 17.5451 20.065H13.0001V20.0575Z"
            fill="#131313"
          />
          <path
            d="M13.0005 10.75V14.5"
            stroke="#FB8F6D"
            stroke-width="1.28571"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.9963 16.7498H13.0031Z"
            fill="#131313"
          />
          <path
            d="M12.9963 16.7498H13.0031"
            stroke="#FB8F6D"
            stroke-width="1.71429"
            stroke-linecap="round"
            stroke-linejoin="round"
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

  export default ErrorNotificationToast;