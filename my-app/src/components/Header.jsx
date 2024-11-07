// import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "80px",
        display: "flex",
        padding: "0px, 24px",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        backgroundColor: "white",
        zIndex: "20",
      }}
    >
      <div
        style={{
          width: "97%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "10%",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link to="/">
            <img style={{ width: "50px", height: "50px" }} src={logo} alt="" />
          </Link>
          <h1
            style={{
              color: "rgb(222,72,58)",
              fontSize: "30px",
              fontWeight: "600",
            }}
          >
            todoist
          </h1>
        </div>
        <div
          style={{
            width: "47%",
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "60%",
              fontFamily: "Inter,HelveticNeue,Helvetica,Arial,sans-serif",
              fontWeight: "500",
              marginBottom: "10px",
              fontSize: "16px",
            }}
          >
            <Link
              to="/features"
              style={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
              }}
            >
              <nav>Features</nav>
            </Link>
            <Link
              to="/forteams"
              style={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
              }}
            >
              <nav style={{ cursor: "pointer" }}>For Teams</nav>
            </Link>
            <nav style={{ cursor: "pointer" }}>Resources</nav>
            <nav style={{ cursor: "pointer" }}>Pricing</nav>
          </div>
          <div
            style={{
              width: "1px",
              height: "30px",
              backgroundColor: "slategray",
              marginBottom: "10px",
            }}
          />
          <div
            style={{
              width: "35%",
              display: "flex",
              // gap: "30px",
              marginBottom: "10px",
            }}
          >
            <button
              style={{
                fontSize: "16px",
                width: "40%",
                height: "40px",
                border: "none",
                outline: "none",
                background: "none",
                // padding: "9px, 14px",
              }}
            >
              Login
            </button>
            <button
              style={{
                width: "80%",
                border: "none",
                height: "35px",
                fontSize: "16px",
                borderRadius: "10px",
                backgroundColor: "rgb(207, 53, 32)",
                color: "white",
                fontWeight: "bolder",
              }}
            >
              Start for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

// const Header = () => {
//   return (
//     <div>
//       <div
//         style={{
//           width: "100%",
//           height: "80px",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <div
//           style={{
//             width: "95%",
//             height: "100%",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <div
//             style={{ width: "10%", backgroundColor: "pink", height: "100%" }}
//           >
//             Logo
//           </div>
//           <div
//             style={{
//               width: "47%",
//               height: "100%",
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 width: "50%",
//                 fontSize: "20px",
//               }}
//             >
//               <Link to="/features">
//                 <nav>Features</nav>
//               </Link>
//               <Link to="/forteams">
//                 <nav>For Teams</nav>
//               </Link>
//               <Link to="/resources">
//                 <nav>Resources</nav>
//               </Link>
//               <Link to="/pricing" style={{ textDecoration: "none" }}>
//                 <nav>Pricing</nav>
//               </Link>
//             </div>
//             <div
//               style={{
//                 width: "1px",
//                 height: "30px",
//                 backgroundColor: "slategray",
//               }}
//             />
//             <div
//               style={{
//                 width: "35%",
//                 display: "flex",
//                 justifyContent: "space-between",
//               }}
//             >
//               <button className="hoverable">Login</button>
//               <button className="hovers">SignUp</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
