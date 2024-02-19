/* eslint-disable react/no-unescaped-entities */
import Html from '../../assets/html-d20c9482.png'
import CSS from '../../assets/css-4040bdba.png'
import JavaScript from '../../assets/javascript-d04a05c4.png'
import NodeJs from '../../assets/node-c716a3d9.png'
import GitHub from '../../assets/github-e59bf158.png'
import Tailwind from '../../assets/tailwind-47f3710a.png'
import React from '../../assets/react-e00184ba.png'
import Bootstrap from '../../assets/bootstrap-91fb88af.png'
import CPP from '../../assets/C__-ffc646ea.png'

const Skills = () => {
    const techs = [
        {
            id: 1,
            src: Html,
            title: 'Html',
            style: 'shadow-orange-500'

        },
        {
            id: 2,
            src: CSS,
            title: 'CSS',
            style: 'shadow-blue-500'

        },
        {
            id: 3,
            src: JavaScript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'

        },
        {
            id: 4,
            src: NodeJs,
            title: 'NodeJs',
            style: 'shadow-green-500'

        },
        {
            id: 5,
            src: GitHub,
            title: 'GitHub',
            style: 'shadow-gray-500'

        },
        {
            id: 6,
            src: React,
            title: 'React',
            style: 'shadow-sky-500'

        },
        {
            id: 7,
            src: Tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-500'

        },
        {
            id: 8,
            src: Bootstrap,
            title: 'Bootstrap',
            style: 'shadow-purple-500'

        },
        {
            id: 9,
            src: CPP,
            title: 'C++',
            style: 'shadow-blue-500'

        },
    ]
    return (
        <div className='bg-gradient-to-b from-gray-800 to-black'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Skills</p>
                    <p className='py-6'>Technologies I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center px-0 py-8 md:px-12'>
                    {techs.map(({id,src,title,style})=>(
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img className='w-20 mx-auto' src={src} alt="" />
                        <p>{title}</p>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;