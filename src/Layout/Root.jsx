import { Outlet } from "react-router-dom";
import Navbar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";



const Root = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;