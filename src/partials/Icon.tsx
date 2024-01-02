import React from "react";

const Error = () => {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="#fff"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Iconly/Curved/Danger Square">
        <g id="Danger Circle">
          <path
            id="Stroke 1"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.74976 12C2.74976 5.063 5.06276 2.75 11.9998 2.75C18.9368 2.75 21.2498 5.063 21.2498 12C21.2498 18.937 18.9368 21.25 11.9998 21.25C5.06276 21.25 2.74976 18.937 2.74976 12Z"
            stroke="#130F26"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Stroke 3"
            d="M11.9998 8.10498V12"
            stroke="#130F26"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Stroke 15"
            d="M11.9955 15.5H12.0045"
            stroke="#130F26"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
    </svg>
  );
};

const Info = () => {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="#fff"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Iconly/Curved/Info Square">
        <g id="Info Square">
          <path
            id="Stroke 1"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.2502 12C21.2502 18.937 18.9372 21.25 12.0002 21.25C5.06324 21.25 2.75024 18.937 2.75024 12C2.75024 5.063 5.06324 2.75 12.0002 2.75C18.9372 2.75 21.2502 5.063 21.2502 12Z"
            stroke="#130F26"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Stroke 3"
            d="M12.0002 15.895V12"
            stroke="#130F26"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Stroke 15"
            d="M12.0045 8.5H11.9955"
            stroke="#130F26"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
    </svg>
  );
};

const Success = () => {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Iconly/Curved/Tick Square">
        <g id="Tick Square">
          <path
            id="Stroke 1"
            d="M8.44019 12L10.8142 14.373L15.5602 9.62695"
            stroke="#130F26"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Stroke 2"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.74976 12C2.74976 18.937 5.06276 21.25 11.9998 21.25C18.9368 21.25 21.2498 18.937 21.2498 12C21.2498 5.063 18.9368 2.75 11.9998 2.75C5.06276 2.75 2.74976 5.063 2.74976 12Z"
            stroke="#130F26"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
    </svg>
  );
};

const Warning = () => {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="#fff"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Iconly/Curved/warning Triangle">
        <g id="warning Triangle">
          <path
            id="Stroke 3"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 21C5.50558 21 2.95666 20.5387 2.54353 18.2033C2.13039 15.8679 4.77383 11.4774 5.58842 10.0285C8.31257 5.18408 10.1637 3 12 3C13.8363 3 15.6874 5.18408 18.4116 10.0285C19.2262 11.4774 21.8696 15.8679 21.4565 18.2033C21.0444 20.5387 18.4944 21 12 21Z"
            stroke="#130F26"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Stroke 3_2"
            d="M12 8.5V12.395"
            stroke="#130F26"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Stroke 15"
            d="M11.9957 15.895H12.0047"
            stroke="#130F26"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
    </svg>
  );
};

export const Icon = { Error, Warning, Success, Info };
