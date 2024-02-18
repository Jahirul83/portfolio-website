import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
    const Links = [
        {
            id: 1,
            child: (
                <>
                    Linkedin <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/jahirul-islam-735006279',
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/jahirul83'
        },
        {
            id: 3,
            child: (
                <>
                    Mail <IoIosMail size={30} />
                </>
            ),
            href: 'mailto:jahirulislamcse83@gmail.com'
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/Jahirul_Islam(Resume).pdf',
            style: 'rounded-tr-md',
            download: true,
        },

    ]
    return (
        <div className="flex flex-col top-[35%] left-0 fixed z-10">
            <ul>

                {
                Links.map((link) => (
                    <li key={link.id} className="flex justify-between w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500">
                        <a 
                        href={link.href} 
                        className="flex justify-between items-center w-full text-white"
                        download={link.download}
                        target='_blank'
                        >
                           {link.child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialLinks;