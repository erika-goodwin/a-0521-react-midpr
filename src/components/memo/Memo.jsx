import React, { useEffect, useState, useContext } from "react";
import { db } from "../../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";
import { ReactComponent as ReactLogo } from "../../image/loading.svg";
import EachMemo from "./EachMemo";
import EditCreateModal from "./EditCreateModal";
import { OpenModalContext } from "../../App";

export default function Memo() {
  const [memoData, setMemoData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log("memo page render");
  const { openModal, setOpenModal } = useContext(OpenModalContext);

  const openModalFunction = (data) => {
    setOpenModal(true);
    setSelectedData(data);
    console.log("open modal function, data: ", data);
  };

  useEffect(() => {
    setIsLoading(true);
    async function getMemos() {
      const colRef = collection(db, "memos");
      const docSnap = await getDocs(colRef);

      docSnap.forEach((element) => {
        setMemoData((pre) => [...pre, element.data()]);
      });
    }
    getMemos();
    setIsLoading(false);
    console.log("fetching data ");
  }, []);

  useEffect(() => {
    console.log("memoData", memoData);
  }, [memoData]);

  return (
    <>
      {isLoading && <ReactLogo className="logo" />}

      {selectedData && (
        <EditCreateModal
          kay={selectedData.id}
          data={selectedData}
          type="edit"
        />
      )}
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

                {memoData?.map((data) => {
                  return (
                    <EachMemo
                      data={data}
                      key={data.id}
                      openModalFunction={openModalFunction}
                    />
                  );
                })}
                <div className="mt-8"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
