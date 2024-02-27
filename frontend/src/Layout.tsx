import * as React from "react"
import AppRoutes from "./AppRoutes"
import Footer from "./ui/components/shared/Footer"
import Header from "./ui/components/shared/Header"

const Layout:React.FC = () => {
  return (
    <>
    <Header />
    <AppRoutes />
    <Footer />
    </>
  )
}

export default Layout