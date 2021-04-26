/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import image from "../background.JPG";

export default function Home() {
    return (
        <main>
            <img src={image} alt="SUNY Korea university" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-13 lg:pt-55 px-8">
                <h1 className="text-6xl text-black-700 font-bold cursive leading-none lg:leading-snug home-name"> What's up? I'm Daniiar.</h1>
            </section>
        </main>
    )
}