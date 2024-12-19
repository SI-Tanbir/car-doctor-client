
import About from "./pages/About"
import Banner from "./pages/Banner"
import OurTeam from "./pages/OurTeam"
import Products from "./pages/Products"
import Service from "./pages/Service"
import PrivateRoute from "./Routes/PrivateRoute"


const Home = () => {


  return (
    <div className="mt-8">


          <Banner></Banner>
          <About></About>

          <Service></Service>
          <Products></Products>
          <OurTeam></OurTeam>
    


    </div>
  )
}

export default Home