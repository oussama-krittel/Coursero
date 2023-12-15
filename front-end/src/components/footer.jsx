import React from "react";
import Logo from "./logo";

const Footer = () => {
  return (
    <footer className="px-[10vw] py-6">
      <div className="flex justify-between my-4">
        <Logo />
        <div className="text-gray-500 capitalize mt-5">
          <p>This website was developed by : </p>
          <ul className="font-semibold">
            <li>Jrhaider Naoufal</li>
            <li>Kritel Oussama</li>
            <li>Elalami Mohamed</li>
            <li>Charf Oumar</li>
          </ul>
        </div>
        <span className="bg-gray-500 w-[1px]"></span>
        <div className="text-gray-500 capitalize mt-5">
          <p>if you have any issue please contact this email : </p>
          <p className="font-semibold">Naoufaljrh2000@gmail.com</p>
        </div>
      </div>

      <hr />
      <p className="text-gray-500 text-center">
        Copyright 2023 | Coursero | All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
