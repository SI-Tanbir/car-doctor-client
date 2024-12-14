
import { Outlet } from "react-router"
import Header from "../pages/Header"
import '../index.css'
import Footer from "../pages/Footer"



const Layouts = () => {
  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
       
    </div>
  )
}

export default Layouts