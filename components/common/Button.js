import React from "react";

export default function Button({ title, styles = "" }) {
  return (
    <button
      className={` px-4 py-2 text-sm my-1 hover:scale-105 transition-transform text-white  ${styles}`}
    >
      {title}
    </button>
  );
}
