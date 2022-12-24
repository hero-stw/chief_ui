import React from "react";

type Props = {};

const NowDeliverIcon = (props: Props) => {
  return (
    <svg
      width={32}
      height={32}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={" stroke-[#5D55B4] "}
    >
      <g
        clipPath="url(#a)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 8h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8ZM8 4h8l4 4H4l4-4ZM8 12h4" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default NowDeliverIcon;
