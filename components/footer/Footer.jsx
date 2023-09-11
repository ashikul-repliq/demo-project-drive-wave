import Image from "next/image";
import Link from "next/link";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

export const Footer = () => {
    return (
      <div className="bg-black">
      <div className="px-4 pt-16 mx-auto  md:px-24 lg:px-8  container ">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
          <Link href="#" className="inline-flex items-center mr-8">
            <Image
              width={50}
              height={50}
              className="object-cover object-center w-10 h-10 rounded-full"
              src="https://images.unsplash.com/photo-1618846042125-0a64df35d3d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1486&q=80"
              alt="car-tire"
            />
            <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
              Drive-<span className=" text-red-600">w</span>ave
            </span>
          </Link>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-white">
              We are many variations of passages available but the majority have suffered alteration in some form by injected humour words believable.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-semibold tracking-wide text-white">
               Quick Links
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                     Services
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-white">
                Services
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                   car selling
                  </a>
                </li>
               
                <li>
                  <a
                    href="#"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                        car renting
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                          car servicing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                            car insurance
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-white">Support Center</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                     FAQ&apos;s
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Affiliates
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                     Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                        Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                            Terms &amp; Conditions  
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-white">Social-Media</p>
              <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="#"
              className="text-gray-600 transition-colors duration-300 hover:text-purple-400 text-2xl"
            >
             <AiOutlineTwitter></AiOutlineTwitter>
            </a>
            <a
              href="#"
              className="text-gray-600 transition-colors duration-300 hover:text-purple-400 text-2xl"
            >
             <AiOutlineInstagram></AiOutlineInstagram>
            </a>
            <a
              href="#"
              className="text-gray-600 transition-colors duration-300 hover:text-purple-400 text-2xl"
            >
              <AiOutlineFacebook></AiOutlineFacebook>
            </a>
          </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pt-5 pb-10 border-t sm:flex-row">
          <p className="text-sm text-white">
            © Copyright 2023 Drive Wave. All rights reserved.
          </p>
          
        </div>
      </div>
      </div>
    );
  };