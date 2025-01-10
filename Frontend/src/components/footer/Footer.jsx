import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faPinterest,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="px-24 mt-16 flex flex-col gap-5 border border-black">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-10 ">
        <div className="about flex flex-col gap-3">
          <p className="font-bold text-xl">About Us</p>
          <p className="text-lg text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore dolore magna aliqua.
          </p>
        </div>
        <div className="contact flex flex-col gap-3">
          <p className="font-bold text-xl">Contact Us</p>
          <p className="text-lg text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore dolore magna aliqua.
          </p>
          <p className="text-rose-600 text-2xl font-bold">012-6532-568-9746</p>
          <p className="text-rose-600 text-2xl font-bold">012-6532-568-9746</p>
        </div>
        <div className="newsletter flex flex-col gap-3">
          <p className="font-bold text-xl">Newsletter</p>
          <p className="text-lg text-gray-500">
            You can trust us. we only send offers, not a single spam
          </p>
          <div className="inputWrapper bg-blue-200 flex  justify-between p-1 rounded-3xl">
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent outline-none p-2"
            />
            <button className="bg-rose-500 rounded-full p-2 text-white">
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="bottomFoot flex flex-col sm:flex-row gap-y-5 items-center justify-between mb-3">
        <p className="text-xl text-gray-500">
          Copyright ©2025 All rights reserved
        </p>
        <div className="links flex items-center gap-3 ">
          <FontAwesomeIcon
            icon={faFacebookF}
            className="bg-rose-500 text-white px-5 py-4 hover:bg-rose-400 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="bg-rose-500 text-white px-5 py-4 hover:bg-rose-400 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faXTwitter}
            className="bg-rose-500 text-white px-5 py-4 hover:bg-rose-400 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faPinterest}
            className="bg-rose-500 text-white px-5 py-4 hover:bg-rose-400 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
