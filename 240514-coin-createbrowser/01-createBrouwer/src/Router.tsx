import React from "react";
import { createBrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Roote from "./Roote";
import NotFound from "./NotFound";
import ErrorComponents from "./ErrorComponents";
import User from "./User";
import Followers from "./Followers";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Roote />,
    children: [
      { path: "", element: <Home />, errorElement: <ErrorComponents /> },
      { path: "about", element: <About /> },
      {
        path: "users/:userId",
        element: <User />,
        children: [{ path: "followers", element: <Followers /> }],
      },
    ],
    errorElement: <NotFound />,
  },
]);

// const Router = () => {
//   return (
//     <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

export default Router;
