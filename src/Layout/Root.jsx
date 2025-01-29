import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";


const Root = () => {
    return (
       <>
           <header>
                 <Navbar></Navbar>
           </header>
           
           <main>
           <Outlet>
            
            </Outlet>
           </main>

            
                 <Footer></Footer>
            
       </>
    );
};

export default Root;