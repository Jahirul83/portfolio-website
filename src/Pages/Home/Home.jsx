
import myImage from '../../assets/MyImage.png'
import { FaArrowRight } from "react-icons/fa";
import About from '../About/About';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-base-200 md:px-44">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={myImage} className="max-w-sm rounded-lg w-1/2" />
                        <div>
                            <h1 className="text-5xl font-bold">Hi <br /> I am Jahirul</h1>
                            <p className="py-6">I have more than 1 years of experience in building and designing software. I keep myself upto date with technologies. Currently, I love to work on web applications using technologies like React, Next Js, Redux.</p>
                            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">Portfolio
                                <span className='ml-2 z-auto text-3xl group-hover:rotate-90 duration-300'><FaArrowRight /></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <About></About>
            </div>
            <div>
                <Projects></Projects>
            </div>
            <div>
                <Skills></Skills>
            </div>
            <div>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;