import React from "react";

export default function About() {
  return (
    <div className="wrapper h-[65vh] flex flex-col space-y-3">
      <p>
        This Application is created by WIUT students for WIUT Upgrade Contest
        (2022)
      </p>
      <div></div>
      <p>Backend (Python, Django) - <a href="https://t.me/fayyozbekk" className="italic font-bold hover:underline">Fayyozbek Berdiyorov</a></p>
      <p>Frontend (React, Next.js) - <a href="https://t.me/sabokhat_k" className="italic font-bold hover:underline">Sabokhat Kalandarova</a></p>
      <p>Designer - <a href="https://t.me/jakhongirs" className="italic font-bold hover:underline">Jakhongir Sagdullayev</a></p>
    </div>
  );
}
