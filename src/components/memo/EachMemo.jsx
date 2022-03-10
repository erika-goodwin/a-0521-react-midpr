import React, { useContext } from "react";
import { OpenModalContext } from "../../App";


function EachMemo({ data, openModalFunction }) {
  const { openModal, setOpenModal } = useContext(OpenModalContext);

  return (
    <>
    
      <div className="mt-6">
        <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <span className="font-light text-gray-600">{data.date}</span>
            <button
              type="button"
              className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500"
              onClick={() => openModalFunction(data)}
            >
              Edit
            </button>
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
