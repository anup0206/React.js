import React from "react";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";

const Skill =() =>{

    const MySkills = [
        {
            skill: "Frontend",
            items: [
                {
                    icons: <FaReact/>,
                    name: "React"
                },
                {
                    icons: <FaReact/>,
                    name: "React"
                },
                {
                    icons: <FaReact/>,
                    name: "React"
                },
                {
                    icons: <FaReact/>,
                    name: "React"
                },
                {
                    icons: <FaReact/>,
                    name: "React"
                }
            ]
        },
        {
            skill: "Backend",
            items: [
                {
                    icons: <BiLogoTypescript/>,
                    name: "typescript"
                },
                {
                    icons: <BiLogoTypescript/>,
                    name: "typescript"
                },
                {
                    icons: <BiLogoTypescript/>,
                    name: "typescript"
                },
                {
                    icons: <BiLogoTypescript/>,
                    name: "typescript"
                },
                {
                    icons: <BiLogoTypescript/>,
                    name: "typescript"
                }
            ]
        },
        {
            skills:Database & tools,
            items:[
                {
                    icons:<TbBrandNextjs/>,
                    name:"Nextjs"
                },
                {
                    icons:<TbBrandNextjs/>,
                    name:"Nextjs"
                },
                {
                    icons:<TbBrandNextjs/>,
                    name:"Nextjs"
                },
                {
                    icons:<TbBrandNextjs/>,
                    name:"Nextjs"
                },
                {
                    icons:<TbBrandNextjs/>,
                    name:"Nextjs"
                },
                {
                    icons:<TbBrandNextjs/>,
                    name:"Nextjs"
                }
            ]
        }

    ]
    return(
        <section className="py-12 px-4 h-screen bg-gray-950">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 text-center">My Skills</h2>
            <div class="w-20 h-1 bg-blue-600 mx-auto mb-10 "></div>
            <p className="text-center text-2xl  mt-10 ">As a React developer , <br/>I work with following laguages to create  minimal and useful code </p>
            <div className="grid grid-cols-3 gap4 text-gray-400 mt-20 text">
                {/* <div>
                    <h2 className="text-center">Frontend</h2>
                    <div className="flex mt-6">
                    <h3 className="rounded-full bg-gray-600 w-25 flex gap-2 items-center"> <FaReact />React</h3>
                    <h3 className="rounded-full bg-gray-600 w-25 flex gap-2 items-center"> <TbBrandNextjs />Nextjs</h3>
                    <h3 className="rounded-full bg-gray-600 w-25 flex gap-2 items-center"> <RiTailwindCssFill />Tailwidcss</h3>
                    <h3 className="rounded-full bg-gray-600 w-25 flex gap-2 items-center"> <BiLogoTypescript />Typescript</h3>
                    </div>
                </div> */}
                
                {MySkills.map((value, i)=> {
                    return (
                <div key={i}>
                    <h2 className="text-center">{value.skill}</h2>
                    <div className="flex mt-6">
                    <h3 className="rounded-full bg-gray-600 w-25 flex space-x-4 items-center">{value.items.map((val, i) => {
                        return <p key={i}>
                            {val.icons}
                            {val.name}
                        </p>
                    })}</h3>
                    </div>
                </div>
                    )
                })}
            </div>
        </section>

    );
}
export default Skill;