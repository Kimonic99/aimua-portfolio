import React from "react";


export default function Intro() {
  return (
    <div>
      <h1 className="flex justify-center text-5xl md:text-7xl font-bold text-center">
      Salve mundus! <span className="animate-waving-hand">👋🏾</span>
      </h1>
      <br />
      <p className="flex flex-1 justify-center sm:text-2xl md:text-3xl font-light mb-5 md:mb-10 text-center">
  <span className="mr-2">Welcome</span> <span className="mr-2">to</span> <span className="mr-2"> my </span> <b>MERN</b> <span className="ml-2">stack</span><span className="ml-2">site!</span>
</p>

      <p className="lg:text-lg pt-8 pb-8 m-2 sm:p-14 font-light">
        I'm Aimuamhonose Imarengiaye and you can call me Aimua, A Technologist & Software Engineer. 
        This site may seem over-engineered but the design intention is to display my{" "}
        <span className="half-bg cursor-default">full-stack</span> capabilities.
        This site was built using the MERN stack with{" "}
        <span className="half-bg cursor-default">Tailwind</span> for styling. If
        you{" "}
        <span className="hidden lg:contents ">
          check out the links in the nav bar or simply{" "}
        </span>{" "}
        scroll down the page you will find my resume. The projects
        section will provide some examples of my work some of which are live
        websites, I also showcase some ongoing projects. The front end of this app is built with{" "}
        <span className="half-bg cursor-default">React</span> and Tailwind.{" "}
        <span className="half-bg cursor-default">Express</span> and{" "}
        <span className="half-bg cursor-default">Node.js</span> are used on the
        backend and <span className="half-bg cursor-default">MongoDB</span> is
        the database used for storage. Most of this stuff, specifically the project data, could have 
        all been handled on the client side. However, the goal of this site is to prove 
        full stack experience.
        I am interested in Blockchain development and Game development.
        Highly skilled front-end and web3 developer.
        I'm a priest of Technology, a Mason of the High House Silicon. 
        Someday i'm going to be the Jhistal Chief Priest of Tech, Knight of the High House Silicon.
        So please, look around the site, check out my socials, add
        your name to the table in the visitors section, and feel free to reach
        out!{" "}<br />
        Love, Kimonic.
      </p>
    </div>
  );
}
