import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export const Footer: React.FC = () => {
  return (
    <footer className="text-white bg-gray-700 bg-opacity-20 backdrop-blur p-4">
      <div className="w-full flex items-center flex-col lg:flex-row gap-4 justify-between">
        <div className="contact-info flex-1 mb-4 lg:mb-0">
          <div className="flex items-center flex-row gap-4">
            <FaMapMarkerAlt />
            <span>BIAS, Bhimtal, India</span>
          </div>
          <div className="flex items-center flex-row gap-4">
            <FaPhone />
            <span>+1 123 456 7890</span>
          </div>
          <div className="flex items-center flex-row gap-4">
            <FaEnvelope />
            <span>starryscoop@gmail.com</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <div className="copyright">
            <span>&copy; 2022 Starry Scoop. All rights reserved.</span>
          </div>
          <div className="trademarks">
            <span>Trademarks belong to their respective owners.</span>
          </div>
        </div>
        <div className="flex-1 flex gap-3 items-center justify-end social-media-icons">
          <a href="https://www.facebook.com">
            <FaFacebook />
          </a>
          <a href="https://www.twitter.com">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
