// function Spinner() {
//   return <div className="spinner"></div>;
// }

// export default Spinner;
import React from "react";

function Spinner() {
  return (
    <>
      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-30px);
            }
            60% {
              transform: translateY(-15px);
            }
          }
        `}
      </style>
      <div className="flex justify-center items-center h-screen">
        <div className="flex space-x-2">
          <div
            className="w-6 h-6 bg-blue-500 rounded-full"
            style={{ animation: "bounce 1.2s infinite", animationDelay: "0s" }}
          ></div>
          <div
            className="w-6 h-6 bg-blue-500 rounded-full"
            style={{
              animation: "bounce 1.2s infinite",
              animationDelay: "0.2s",
            }}
          ></div>
          <div
            className="w-6 h-6 bg-blue-500 rounded-full"
            style={{
              animation: "bounce 1.2s infinite",
              animationDelay: "0.4s",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Spinner;
