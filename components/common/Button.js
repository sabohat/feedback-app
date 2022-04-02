import React from "react";

export default function Button({
  title,
  styles = "",
  onClick,
  type = "button",
}) {
  return (
    <button
      type={type}
      className={` px-4 py-2 text-sm my-1 hover:scale-105 transition-transform text-white  ${styles}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
