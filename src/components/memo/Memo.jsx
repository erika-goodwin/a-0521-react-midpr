import React, { useEffect, useState, useContext, useCallback } from "react";
import { db } from "../../firebase/firebase";
import { getDocs, collection, query, orderBy, where } from "firebase/firestore";
import { ReactComponent as ReactLogo } from "../../image/loading.svg";
import EachMemo from "./EachMemo";
import EditCreateModal from "./EditCreateModal";
import { OpenModalContext } from "../../App";
import { Link } from "react-router-dom";

export default function Memo() {
  const [memoData, setMemoData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { openMemoModal, setOpenMemoModal } = useContext(OpenModalContext);
  const { selectedData, setSelectedData } = useContext(OpenModalContext);
  const { userId, setUserId } = useContext(OpenModalContext);

  const openModalFunction = (data) => {
    setOpenMemoModal(true);
    setSelectedData(data);
  };

  const getMemos = useCallback(async () => {
    const colRef = collection(db, "memos");
    const q = query(colRef, orderBy("date"), where("userId", "==", userId));

    const docSnap = await getDocs(q);

    docSnap.forEach((element) => {
      const object = { ...element.data(), id: element.id };

      if (memoData.length > 0) {
        const isSame = memoData.map((ele) => {
          return ele.id.includes(object.id);
        });

        !isSame && setMemoData((pre) => [...pre, object]);
      } else {
        setMemoData((pre) => [...pre, object]);
      }
    });
  }, [memoData, userId]);

  useEffect(() => {
    setIsLoading(true);
    getMemos();
    setIsLoading(false);
  }, [getMemos]);

  // useEffect(() => {
  //   console.log("memoData", memoData);
  // }, [memoData]);
  // useEffect(() => {
  //   console.log("selectedData", selectedData);
  // }, [selectedData]);

  return (
    <>
      {isLoading && <ReactLogo className="logo" />}
      {/* {!memoData && <ReactLogo className="logo" />} */}

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
                    {/* Post */}
                  </h1>
                  <div>
                    <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                      <option>Latest</option>
                      <option>Last Week</option>
                    </select>
                  </div>
                </div>

                {memoData.length === 0 && (
                  <div className="flex justify-center p-20">
                    <div className="flex flex-col">
                      {userId !== null ? (
                        <Link to="/" className="hover:text-teal-600">
                          Let's log in and start creating your health memo
                        </Link>
                      ) : (
                        <h3>
                          Let's log in and start creating your health memo
                        </h3>
                      )}

                      <div className="flex justify-center p-4">
                        <img
                          className="h-15 w-15 ml-2"
                          src="https://img.icons8.com/doodle/100/000000/treatment-list.png"
                          alt="Workflow"
                        />
                        <img
                          className="h-15 w-1150 ml-2"
                          src="https://img.icons8.com/doodle/100/000000/summer.png"
                          alt="Workflow"
                        />

                        <img
                          className="h-15 w-15 ml-2"
                          src="https://img.icons8.com/doodle/100/000000/checklist--v1.png"
                          alt="Workflow"
                        />
                      </div>
                    </div>
                  </div>
                )}

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
