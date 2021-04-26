import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function Navbar() {
    return (
        <header className="bg-red-500"> {/* background color red with level of 300 */}
            <div className="container mx-auto flex justify-between"> {/* posttordu biri birinene alysyraak kylyp koet*/}
                <nav className="flex">
                    <NavLink to="/" exact 
                    activeClassName="text-white"
                    className="inline-flex items-center py-7 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
                    >
                        Yoyo
                    </NavLink>
                    <NavLink to="/project"
                    className="inline-flex items-center py-4 px-4 mr-6 rounded text-red-200 hover:text-green-800"
                    activeClassName="text-red-100 bg-red-600" 
                    // kachan sen oshol page de turganda activeClassName ishteit
                    >
                        Projects
                    </NavLink>
                    <NavLink to="/post"
                    className="inline-flex items-center py-4 px-4 mr-6 rounded text-red-200 hover:text-green-800"
                    activeClassName="text-red-100 bg-red-600"
                    >
                        Blog Posts
                    </NavLink>
                    <NavLink to="/about"
                    className="inline-flex items-center py-4 px-4 mr-6 rounded text-red-200 hover:text-green-800"
                    activeClassName="text-red-100 bg-red-600"
                    >
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-6 my-6">
                    {/* Bul jerge npm install react-social-icons dep jazyp instagram syiaktuu icondordu koiso bolot*/}
                    {/* Kaisy icondu koigun kelse oshonu google dan react social icons dep jazyp tapsa bolot */}
                    <SocialIcon url="https://www.instagram.com/zholmatov_/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                    <SocialIcon url="https://www.linkedin.com/in/daniiar-zholmatov-75b853202/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                    <SocialIcon url="https://github.com/zholmatov" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>

                </div>
            </div>
        </header>
    )
}

// websayttyn bashyna nav bar koiup koet kaisyny click kylsa oshogo jarasha 
// oshol page ge oto beret