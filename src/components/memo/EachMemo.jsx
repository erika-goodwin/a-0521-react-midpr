import React, { useContext } from "react";
import { db } from "../../firebase/firebase";
import { doc, deleteDoc } from "firebase/firestore";
import { OpenModalContext } from "../../App";

function EachMemo({ data, openModalFunction }) {
  const { userLoggedin } = useContext(OpenModalContext);

  const deleteMemo = async () => {
    await deleteDoc(doc(db, "memos", data.id));
    window.location.reload(false);
  };

  return (
    <>
      <div className="mt-6">
        <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <span className="font-light text-gray-600">{data.date}</span>
            <div>
              {userLoggedin && (
                <>
               
                  <button
                    type="button"
                    className="px-2 py-1 font-bold bg-gray-600 bg-gray-300 rounded hover:bg-gray-200 "
                    onClick={deleteMemo}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500 ml-3"
                    onClick={() => openModalFunction(data)}
                  >
                    Edit
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="mt-2">
            <a
              href="#"
              className="text-2xl font-bold text-gray-700 hover:underline"
            >
              {data.weather}/{data.airPressure}　hPa
            </a>
            <p className="mt-2 text-gray-600">{data.memo}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default EachMemo;
