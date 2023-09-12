"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";
import { useRouter } from "next/navigation";
import GetCurrentUser from "@/utils/getCurrentUser";
import { RiAccountCircleFill } from "react-icons/ri";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const { data, refetch } = GetCurrentUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  //signOut function
  const signOut = () => {
    setIsMenuOpen(false);
    localStorage.removeItem("current-user");
    refetch();
    toast.success("sign-out successful!");
    router.push("/sign-in");
  };
  //admin
  const admin = data?.email === "admin@gmail.com";

  return (
    <div className="md:py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div className="relative flex items-center justify-between z-30">
        <div className="flex items-center p-2">
          <Link href="/" className="inline-flex items-center mr-8">
            <Image
              width={50}
              height={50}
              className="object-cover object-center w-10 h-10 rounded-full"
              src="https://images.unsplash.com/photo-1618846042125-0a64df35d3d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1486&q=80"
              alt="car-tire"
            />
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              Drive-<span className=" text-red-600">w</span>ave
            </span>
          </Link>
          <ul className="xl:flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                href="/inventory"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                {admin ? "All-cars" : " Inventory"}
              </Link>
            </li>
            {data && !admin && (
              <li>
                <Link
                  href="/favourite"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Favourite
                </Link>
              </li>
            )}
            {admin && (
              <li>
                <Link
                  href="/add-car"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Add a car
                </Link>
              </li>
            )}
          </ul>
        </div>
        <ul className="xl:flex items-center hidden space-x-8 lg:flex">
          {data ? (
            <>
              {" "}
              {/* <li>
                <span className="font-medium tracking-wide text-gray-700 transition-colors duration-200  text-4xl hover:text-deep-purple-accent-400">
                  <RiAccountCircleFill></RiAccountCircleFill>
                </span>
              </li> */}
              <li>
                <Link
                  href="/"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 flex items-center justify-center gap-2  hover:text-purple-400 "
                >
                  <span className="font-medium tracking-wide text-gray-700 transition-colors duration-200  text-4xl hover:text-deep-purple-accent-400">
                    {" "}
                    <RiAccountCircleFill></RiAccountCircleFill>{" "}
                  </span>
                  {data.name}
                </Link>
              </li>
              <li>
                <button
                  onClick={signOut}
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-gray-900 hover:bg-gray-700 "
                >
                  Sign out
                </button>
              </li>
            </>
          ) : (
            <>
              {" "}
              <li>
                <Link
                  href="/sign-in"
                  aria-label="Sign in"
                  title="Sign in"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link
                  href="/sign-up"
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-gray-900 hover:bg-gray-700 "
                >
                  Sign up
                </Link>
              </li>{" "}
            </>
          )}
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline "
            onClick={() => setIsMenuOpen(true)}
          >
            <RxHamburgerMenu></RxHamburgerMenu>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full ">
              <div className="p-5 bg-white border rounded shadow-sm ">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      href="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Image
                        width={50}
                        height={50}
                        className="object-cover object-center w-10 h-10 rounded-full"
                        src="https://images.unsplash.com/photo-1618846042125-0a64df35d3d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1486&q=80"
                        alt="car-tire"
                      />
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Drive-<span className=" text-red-600">w</span>ave
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <MdOutlineClose></MdOutlineClose>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        href="/inventory"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {admin ? "All-cars" : " Inventory"}
                      </Link>
                    </li>
                    {data && !admin && (
                      <li>
                        <Link
                          href="/favourite"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Favourite
                        </Link>
                      </li>
                    )}

                    {admin && (
                      <li>
                        <Link
                        onClick={() => setIsMenuOpen(false)}
                          href="/add-car"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Add a car
                        </Link>
                      </li>
                    )}

                    {data ? (
                      <>
                        {" "}
                        <li>
                          <Link
                            href="/"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400 
                            flex item-center "
                          >
                            <div className="flex item-center justify-center  gap-2">
                              <span className="text-2xl">
                                <RiAccountCircleFill></RiAccountCircleFill>
                              </span>

                              {data.name}
                            </div>
                          </Link>
                        </li>
                        <li>
                          <button
                            onClick={signOut}
                            className="inline-flex items-center justify-center  px-4 py-2 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-gray-900 hover:bg-gray-700 text-sm "
                          >
                            Sign out
                          </button>
                        </li>
                      </>
                    ) : (
                      <>
                        {" "}
                        <li>
                          <Link
                            href="/sign-in"
                            aria-label="Sign in"
                            title="Sign in"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Sign in
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/sign-up"
                            className="inline-flex items-center justify-center  px-4 py-2 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-gray-900 hover:bg-gray-700 text-sm  "
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Sign up
                          </Link>
                        </li>{" "}
                      </>
                    )}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
