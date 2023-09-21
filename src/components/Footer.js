import React, { Component } from "react";
import { FaDev, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default class Footer extends Component {
  render() {
    return (
      <footer className="flex flex-1 justify-evenly p-16 xl:pl-96 xl:pr-96 bg-black">
        <a
          href={"https://www.linkedin.com/in/aimua-imarengiaye-6a8634246"}
          target={"_blank"}
          rel="noreferrer"
          aria-label="linkedin"
        >
          {" "}
          <FaLinkedin className="text-5xl hover:text-gray-500" />
        </a>
        <a
          href={"https://github.com/Kimonic99"}
          target={"_blank"}
          rel="noreferrer"
          aria-label="github"
        >
          <FaGithub className="text-5xl hover:text-gray-500" />
        </a>
        <a
          href={"https://dev.to/kimonic"}
          target={"_blank"}
          rel="noreferrer"
          aria-label="dev.to"
        >
          <FaDev className="text-5xl hover:text-gray-500" />
        </a>
        <a
          href={"https://twitter.com/ras_kimonic"}
          target={"_blank"}
          rel="noreferrer"
          aria-label="dev.to"
        >
          <FaTwitter className="text-5xl hover:text-gray-500" />
        </a>
      </footer>
    );
  }
}
