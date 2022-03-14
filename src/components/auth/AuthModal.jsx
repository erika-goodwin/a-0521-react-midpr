/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useContext, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { OpenModalContext } from "../../App";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  // FacebookAuthProvider,
  GithubAuthProvider,
  getRedirectResult,
  signInWithRedirect,
} from "firebase/auth";
import {
  auth,
  googleProvider,
  // facebookProvider,
  githubProvider,
} from "../../firebase/firebase";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

export default function AuthModal() {
  const { showAuthModal, setShowAuthModal } = useContext(OpenModalContext);
  const [login, setLogin] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const navigate = useNavigate();

  const cancelButtonRef = useRef(null);

  const handleCreateNewAccount = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log("success create account", user);

        // alert("successfully created account", user);
        // setUserStatus(true);

        //Redirect
        // const path = "/";
        // navigate(path);
        setShowAuthModal(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        console.log(` Error code : ${errorCode}`);
      });
  };

  const handleSignInAccount = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // alert("successfully signed in account", user);
        // setUserStatus(true);

        //Redirect
        // const path = "/";
        // navigate(path);
        setShowAuthModal(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        console.log(` Error code : ${errorCode}`);
      });
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    await signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log("user sign in with Google", user);
        setShowAuthModal(false);
      })
      .catch((error) => {
        // Handle Errors here.
        console.log("email error: ", error.email);
        console.log("error code: ", error.code);
        alert(error.message);
        // The email of the user's account used.

        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(" The AuthCredential type that was used.", credential);
      });
  };

  const githubApiSetup = () => {
    const url = "https://github.com/login/oauth/authorize";

    axios
      .get(url)
      .then((response) => console.log("success GET"))
      .catch((err) => console.log("error", err));
  };

  const handleGithubSignIn = async (e) => {
    e.preventDefault();
    await signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log('signInWithPopup')
        // This gives you a Google Access Token. You can use it to access the Gitgub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        githubApiSetup();

        console.log("user sign in with Github", user);
        setShowAuthModal(false);
      })
      .catch((error) => {
        // Handle Errors here.
        console.log("error code: ", error.code);
        alert(error.message);

        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        console.log(" The AuthCredential type that was used.", credential);
      });

    // await signInWithRedirect(auth, githubProvider);

    // await getRedirectResult(auth)
    //   .then((result) => {
    //     const credential = GithubAuthProvider.credentialFromResult(result);
    //     if (credential) {
    //       // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    //       const token = credential.accessToken;
    //       // ...
    //     }

    //     // The signed-in user info.
    //     const user = result.user;

    //     console.log("user sign in with Github", user);
    //   })
    //   .catch((error) => {
    //     // Handle Errors here.
    //     console.log("email error: ", error.email);
    //     console.log("error code: ", error.code);
    //     alert(error.message);
    //     // The email of the user's account used.

    //     // The AuthCredential type that was used.
    //     const credential = GithubAuthProvider.credentialFromError(error);
    //     console.log(" The AuthCredential type that was used.", credential);
    //   });
  };

  // const handleFacebookSignIn = async (e) => {
  //   e.preventDefault();
  //   await signInWithPopup(auth, facebookProvider)
  //     .then((result) => {
  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       const credential = FacebookAuthProvider.credentialFromResult(result);
  //       const accessToken = credential.accessToken;

  //       // The signed-in user info.
  //       const user = result.user;
  //       console.log("user sign in with Google", user);

  //       setShowAuthModal(false);
  //     })
  //     .catch((error) => {
  //       // Handle Errors here.
  //       console.log("email error: ", error.email);
  //       console.log("error code: ", error.code);
  //       console.log("email error", error.email);
  //       alert(error.message);
  //       // The email of the user's account used.

  //       // The AuthCredential type that was used.
  //       const credential = FacebookAuthProvider.credentialFromError(error);
  //       console.log(" The AuthCredential type that was used.", credential);
  //     });
  // };

  useEffect(() => {
    // console.log("modal Open(true)/Close(false)", showAuthModal);
    showAuthModal === false && setLogin(true);
    // showAuthModal === false && console.log("much & setLogin", login);
  }, [showAuthModal]);
  // useEffect(() => {
  //   console.log("User Status", userStatus);
  // }, [userStatus]);

  return (
    <Transition.Root show={showAuthModal} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setShowAuthModal}
        open={showAuthModal}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div className=" sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-between items-center py-3 px-8 rounded-t dark:border-gray-600">
                  <h3 className="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
                    {login ? "Log in" : "Sign up"}
                  </h3>
                </div>
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                  <form
                    className="space-y-5"
                    // action="submit"
                    method="POST"
                    onSubmit={
                      login ? handleSignInAccount : handleCreateNewAccount
                    }
                  >
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <div className="mt-1">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm">
                          <a
                            href="#"
                            className="font-medium text-gray-300 hover:text-gray-400"
                          >
                            Forgot your password?
                          </a>
                        </div>
                        {login ? (
                          <div className="text-sm mt-2">
                            <a
                              href="#"
                              className="font-medium text-sky-300 hover:text-sky-400"
                              onClick={() => setLogin(false)}
                            >
                              Do you need to sign up?
                            </a>
                          </div>
                        ) : (
                          <div className="text-sm mt-2">
                            <a
                              href="#"
                              className="font-medium text-sky-300 hover:text-sky-400"
                              onClick={() => setLogin(true)}
                            >
                              Do you already have an account?
                            </a>
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                      >
                        {login ? "Log in" : "Sign up"}
                      </button>
                    </div>
                  </form>

                  <div className="mt-6">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">
                          {login ? "Or continue with" : "Or sign up with"}
                        </span>
                      </div>
                    </div>
                    <div className="mt-6 grid grid-cols-2 gap-3">
                      <div>
                        <a
                          href="#"
                          className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                          onClick={handleGoogleSignIn}
                        >
                          <span className="sr-only">Sign in with Google</span>
                          <svg
                            className="h-5 w-5"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />{" "}
                            <path d="M17.788 5.108A9 9 0 1021 12h-8" />
                          </svg>
                        </a>
                      </div>
                      {/* <div>
                        <a
                          href="#"
                          className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                          onClick={handleFacebookSignIn}
                        >
                          <span className="sr-only">Sign in with Facebook</span>
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </div> */}

                      <div>
                        <a
                          href="#"
                          className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                          onClick={handleGithubSignIn}
                        >
                          <span className="sr-only">Sign in with GitHub</span>
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
