import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkedAlt
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import IconLink from "./IconLink";

function ContactLinks() {
  return (
    <div className="contact-links mx-auto mb-8 w-96 max-w-lg rounded px-6 pt-12 pb-4 backdrop-blur-md bg-black/40">
      <div className="links-container grid grid-cols-4 justify-items-center  mx-auto text-white">
        <IconLink link="https://github.com/Arturo-MT">
          <FaGithub size={50} />
        </IconLink>
        <IconLink link="https://www.linkedin.com/in/brian-monroy-torrez-99544620a/">
          <FaLinkedinIn size={50} />
        </IconLink>
        <IconLink link="https://www.facebook.com/brianarturom">
          <FaFacebookF size={50} />
        </IconLink>
        <IconLink link="https://www.instagram.com/arthur__monroy/">
          <FaInstagram size={50} />
        </IconLink>
      </div>
      <div className="data-container grid grid-cols-1 mt-16 ml-8 text-white">
              <div className="flex items-center mt-4">
                <MdEmail size={30}/>
                <span className="text-xl font-semibold ml-4">
                  ingatorrez@gmail.com
                </span>
              </div>
              <div className="flex items-center mt-4">
                <FaWhatsapp size={30} />
                <span className="text-xl font-semibold ml-4">+52 772 138 6000</span>
              </div>
              <div className="flex items-center mt-4">
                <FaMapMarkedAlt size={30}/>
                <span className="text-xl font-semibold ml-4">
                  42300, Ixmiquilpan, Hgo.
                </span>
              </div>
            </div>
    </div>
  );
}

export default ContactLinks;
