import PetShop from '../../assets/Projects/Pet-Shop.jpg'
import EduEvents from '../../assets/Projects/EDU-EVENTS.jpg'
import BookPoint from '../../assets/Projects/Book-Point.jpg'
import GedgetHub from '../../assets/Projects/Gedget-Hub-pro.jpg'
import EasyShop from '../../assets/Projects/Easy-Shop.jpg'

const Projects = () => {
    const project = [
        {
            id: 1,
            src: PetShop,
            href:'https://pet-shop-36df6.web.app/',
            codeHref:'https://github.com/Jahirul83/Pet-Shop-client'
        },
        {
            id: 2,
            src: BookPoint,
            href:'https://pet-shop-36df6.web.app/',
            codeHref:'https://github.com/Jahirul83/Pet-Shop-client'
        },
        {
            id: 3,
            src: EduEvents,
            href:'https://pet-shop-36df6.web.app/',
            codeHref:'https://github.com/Jahirul83/Pet-Shop-client'
        },
        {
            id: 4,
            src: GedgetHub,
            href:'https://pet-shop-36df6.web.app/',
            codeHref:'https://github.com/Jahirul83/Pet-Shop-client'
        },
        {
            id: 5,
            src: EasyShop,
            href:'https://pet-shop-36df6.web.app/',
            codeHref:'https://github.com/Jahirul83/Pet-Shop-client'
        },

    ]
    return (
        <div className="bg-gradient-to-b from-black to-gray-800 w-full text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
                    <p className="py-6">Check out some of my work</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-0 md:px-12'>
                { project.map(({ id, src,codeHref,href }) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img className='h-2/3 w-full rounded-md hover:scale-105 duration-300 cursor-pointer' src={src} alt="" />
                    <div className='flex items-center justify-center'>
                        <a href={href} className=' w-1/2 px-6 py-3 m-4 hover:scale-110 duration-300'>Demo</a>
                        <a href={codeHref} className=' w-1/2 px-6 py-3 m-4 hover:scale-110 duration-300'>Code</a>
                    </div>
                </div>    
                            
                ))}
                </div> 
            </div>
        </div>
    );
};

export default Projects;