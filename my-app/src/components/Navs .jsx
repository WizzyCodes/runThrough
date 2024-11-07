// // import { BrowserRouter as Routes, Route } from "react-router-dom";
// // import home from "../components/home";

// // const navs = () => {
// //   return (
// //     <div>
// //       <Routes>
// //         <Route path="/" element={<home />} />
// //         <Route path="/features" />
// //         <Route path="/contact" />
// //       </Routes>
// //     </div>
// //   );
// // };

// // export default navs;

// import { Route, Routes } from "react-router-dom";
// import Features from "./Features";
// import ForTeams from "./ForTeams";

export const Navs = () => {
  return (
    <div>
      <Routes>
        <Route path="/features" element={<Features />} />
        <Route path="/forteams" element={<ForTeams />} />
        <Route path="/resources" element={<ForTeams />} />
      </Routes>
    </div>
  );
};
// export default Navs;
