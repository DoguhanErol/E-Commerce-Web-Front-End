import * as React from "react"
import { Route, Routes, useLocation} from "react-router-dom";
import Home from "./ui/pages/Home";

const AppRoutes:React.FC = () => {
  return (
    <>
        <Routes>
          <Route path="/"  element={<Home />} />
        </Routes>
    </>
  )
}

export default AppRoutes