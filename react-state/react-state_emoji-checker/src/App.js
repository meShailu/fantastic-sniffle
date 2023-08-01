// import React from "react";
// import "./styles.css";
// import { useState } from "react";

// export default function App() {
//   //let code = "?";
//   const [code, setCode] = useState("");

const validCode = "🐡🐠🐋";

//   const handleClick = (emoji) => {
//     setCode((prevCode) => [prevCode + emoji]);
//   };

//   return (
//     <div className="container">
//       <div className="button-container">
//         <button
//           type="button"
//           onClick={() => {
//             handleClick("🐡");
//             console.log("Update Code!");
//           }}
//         >
//           <span role="img" aria-label="Pufferfish">
//             🐡
//           </span>
//         </button>
//         <button
//           type="button"
//           onClick={() => {
//             handleClick("🐋");
//             console.log("Update Code!");
//           }}
//         >
//           <span role="img" aria-label="Whale">
//             🐋
//           </span>
//         </button>
//         <button
//           type="button"
//           onClick={() => {
//             handleClick("🐠");

//             console.log("Update Code!");
//           }}
//         >
//           <span role="img" aria-label="Clownfish">
//             🐠
//           </span>
//         </button>{" "}
//       </div>

//       <button
//         type="button"
//         onClick={() => {
//           setCode("");
//           console.log("Reset Code!");
//         }}
//       >
//         Reset
//       </button>
//       <h2>{code}</h2>

//       {code === validCode && <p>Valid code!</p>}
//     </div>
//   );
// }
import React from "react";
import "./styles.css";
export default function App() {
  let code = "?";
  // const validCode = ":blowfish::tropical_fish::whale2:";
  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            console.log("Update Code!");
          }}
        >
          <span role="img" aria-label="Pufferfish">
            :blowfish:
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            console.log("Update Code!");
          }}
        >
          <span role="img" aria-label="Whale">
            :whale2:
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            console.log("Update Code!");
          }}
        >
          <span role="img" aria-label="Clownfish">
            :tropical_fish:
          </span>
        </button>{" "}
      </div>
      <button
        type="button"
        onClick={() => {
          console.log("Reset Code!");
        }}
      >
        Reset
      </button>
      <h2>{code}</h2>
      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}
