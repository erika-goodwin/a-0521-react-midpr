import React, { useEffect } from "react";
import { db } from "../../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";

export default function Memo() {
  useEffect(() => {
    async function getMemos() {
      const colRef = collection(db, "memos");
      const docSnap = await getDocs(colRef);

      docSnap.forEach((element) => {
        console.log(element.data());
      });
    }
    getMemos();
  }, []);

  return (
    <div>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
          <p className="pt-2 text-4xl  font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-6xl">
            Memo
          </p>
          <p className="max-w-xl mt-1 mb-1 text-xl text-gray-500">
            Check your health memo
          </p>
        </div>
      </header>

      <div className="overflow-x-hidden bg-gray-100">
        <div className="px-6 py-8">
          <div className="container flex justify-between mx-auto">
            <div className="w-full lg:w-10/12">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold text-gray-700 md:text-2xl">
                  Post
                </h1>
                <div>
                  <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    <option>Latest</option>
                    <option>Last Week</option>
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="font-light text-gray-600">
                      Jun 1, 2020
                    </span>
                    <a
                      href="#"
                      className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500"
                    >
                      Edit
                    </a>
                  </div>
                  <div className="mt-2">
                    <a
                      href="#"
                      className="text-2xl font-bold text-gray-700 hover:underline"
                    >
                      Broken Clouds/1021　hPa
                    </a>
                    <p className="mt-2 text-gray-600">
                      I had a bad headache. Took a pill.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="font-light text-gray-600">
                      mar 4, 2019
                    </span>
                    <a
                      href="#"
                      className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500"
                    >
                      Edit
                    </a>
                  </div>
                  <div className="mt-2">
                    <a
                      href="#"
                      className="text-2xl font-bold text-gray-700 hover:underline"
                    >
                      Few Clouds/1027 hPa
                    </a>
                    <p className="mt-2 text-gray-600">
                      very light headache. No pill but lot of water.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="font-light text-gray-600">
                      Feb 14, 2019
                    </span>
                    <a
                      href="#"
                      className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500"
                    >
                      Edit
                    </a>
                  </div>
                  <div className="mt-2">
                    <a
                      href="#"
                      className="text-2xl font-bold text-gray-700 hover:underline"
                    >
                      Light Rain/1017 hPa
                    </a>
                    <p className="mt-2 text-gray-600">
                      I needed to skip my class due to headache. Took a pill.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="font-light text-gray-600">
                      Dec 23, 2018
                    </span>
                    <a
                      href="#"
                      className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500"
                    >
                      Edit
                    </a>
                  </div>
                  <div className="mt-2">
                    <a
                      href="#"
                      className="text-2xl font-bold text-gray-700 hover:underline"
                    >
                      Few Clouds/1016 hPa
                    </a>
                    <p className="mt-2 text-gray-600">
                      very light headache. No pill but lot of water.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="font-light text-gray-600">
                      Mar 10, 2018
                    </span>
                    <a
                      href="#"
                      className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500"
                    >
                      Edit
                    </a>
                  </div>
                  <div className="mt-2">
                    <a
                      href="#"
                      className="text-2xl font-bold text-gray-700 hover:underline"
                    >
                      Clear Sky/1011 hPa
                    </a>
                    <p className="mt-2 text-gray-600">
                      I had a bad headache. Took a pill.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
