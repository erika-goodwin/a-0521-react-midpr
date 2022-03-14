import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { OpenModalContext } from "../App";
import { auth } from "../firebase/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";

export default function Navbar(props) {
  const { showAuthModal, setShowAuthModal } = useContext(OpenModalContext);
  const { userLoggedin, setUseruserLoggedin } = useContext(OpenModalContext);
  const { userId, setUserId } = useContext(OpenModalContext);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUseruserLoggedin(false);
        setUserId(null);
        console.log("logged out");
      })
      .catch((error) => {
        console.log("log out error: ", error);
      })
      .finally(() => {
        window.location.reload(false);
      });
  };

  const handleLoginStatus = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUserId(uid);
        setUseruserLoggedin(true);
      } else {
        setUserId(null);
        setUseruserLoggedin(false);
      }
    });
  };

  useEffect(() => {
    handleLoginStatus();
    console.log(`userLoggedin  userId:`, userId);
  }, [showAuthModal]);

  return (
    <>
      <div className="">
        <Disclosure as="nav" className="bg-gray-400">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center w-full">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="https://img.icons8.com/doodle/100/000000/summer.png"
                        alt="Workflow"
                      />
                    </div>
                    <div className="hidden md:block w-full">
                      <div className="flex flex-row justify-between">
                        <div className="flex flex-col justify-center items-baseline space-x-4">
                          <div className="ml-10 flex">
                            <Link
                              to="/"
                              className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium mr-2"
                              aria-current="page"
                            >
                              Weather App
                            </Link>
                            <Link
                              to="/memo"
                              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium "
                            >
                              Memo
                            </Link>
                          </div>
                        </div>
                        <div className="flex flex-col glow text-right">
                          {userLoggedin ? (
                            <button
                              type="button"
                              className="inline-flex items-center px-4 py-2  border border-transparent text-base font-medium rounded-md text-yellow-700 bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 m-auto "
                              onClick={() => handleSignOut(true)}
                            >
                              Log out
                            </button>
                          ) : (
                            <button
                              type="button"
                              className="inline-flex items-center px-4 py-2  border border-transparent text-base font-medium rounded-md text-yellow-700 bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 m-auto "
                              onClick={() => setShowAuthModal(true)}
                            >
                              Log in
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6"></div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <Link
                    to="/"
                    className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                    aria-current="page"
                  >
                    Weather App
                  </Link>
                  <Link
                    to="/memo"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Memo
                  </Link>
                  <div className="flex flex-col glow ">
                    {userLoggedin ? (
                      <button
                        type="button"
                        className="inline-flex items-center  px-3 py-2 border border-transparent text-base font-medium rounded-md text-yellow-700 bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 ml-auto"
                        onClick={() => handleSignOut(true)}
                      >
                        Log out
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="inline-flex items-center  px-3 py-2 border border-transparent text-base font-medium rounded-md text-yellow-700 bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 ml-auto"
                        onClick={() => setShowAuthModal(true)}
                      >
                        Log in
                      </button>
                    )}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
