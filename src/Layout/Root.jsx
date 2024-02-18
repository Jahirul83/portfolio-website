import { Outlet } from "react-router-dom";
import Navbar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import SocialLinks from "../Components/SocialLinks/SocialLinks";



const Root = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Navbar></Navbar>
            <SocialLinks></SocialLinks>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;