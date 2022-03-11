/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useContext, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { OpenModalContext } from "../../App";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase/firebase";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

export default function EditCreateModal({ data, type }) {
  const { openMemoModal, setOpenMemoModal } = useContext(OpenModalContext);
  const { selectedData, setSelectedData } = useContext(OpenModalContext);
  const [memo, setMemo] = useState("");
  const [date, setDate] = useState("");

  const cancelButtonRef = useRef(null);
  const navigate = useNavigate();

  // type === "edit" ? console.log("edit") : console.log("create");

  // onSubmit Update Event ===================================
  const handleUpdateMemo = async (event) => {
    event.preventDefault();
    console.log("update data", memo);

    const newDocRef = doc(db, "memos", selectedData.id);
    await updateDoc(newDocRef, {
      memo: memo,
    });
    await updateDoc(newDocRef, {
      timestamp: serverTimestamp(),
    });

    window.location.reload(false);
  };

  const handleCreateMemo = async (event) => {
    event.preventDefault();
    const cityName = data.cityName;
    const weather = data.weather;
    const airPressure = data.airpress;
    const humidity = data.humidity;
    const submitData = { airPressure, date, weather, humidity, memo, cityName };
    console.log("submitted data: ", submitData);

    const docRef = await addDoc(collection(db, "memos"), submitData);
    console.log("Document written with ID: ", docRef.id);

    //Navigate to the memo
    const path = "/memo";
    navigate(path);
  };

  useEffect(() => {
    var date = new Date();
    var greenwichMeanTime = date.getTime() + date.getTimezoneOffset() * 60000;
    const displayDate = dayjs(greenwichMeanTime + data.timezone * 1000).format(
      "YYYY/MM/DD"
    );
    setDate(displayDate);
  }, []);

  useEffect(() => {
    type === "edit" && setMemo(selectedData.memo);
  }, [selectedData]);

  return (
    <Transition.Root show={openMemoModal} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setOpenMemoModal}
        open={openMemoModal}
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
            <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              {/* Form */}
              <form
                className="space-y-8 divide-y divide-gray-200"
                onSubmit={type === "edit" ? handleUpdateMemo : handleCreateMemo}
              >
                <div className="space-y-8 divide-y divide-gray-200">
                  <div className="pt-8">
                    <div>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {type === "edit"
                          ? "Edit your note"
                          : "Create your memo"}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Update your note and save for later!
                      </p>
                    </div>
                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="date"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Create Date
                        </label>
                        <div className="mt-1">
                          {/* <input
                            type="text"
                            name="date"
                            id="date"
                            // autoComplete="given-name"
                            value={
                              type === "edit" ? (
                                data.date
                              ) : (
                                date
                              )
                            }
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          /> */}
                          <h3 className="text-lg leading-6 font-medium text-gray-900">
                            {type === "edit" ? data.date : date}
                          </h3>
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label
                          htmlFor="weather"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Weather
                        </label>
                        <div className="mt-1">
                          {/* <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            value={
                              type === "edit" ? data.weather : data.weather
                            }
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md capitalize"
                          /> */}
                          <h3 className="text-lg leading-6 font-medium text-gray-900 capitalize">
                            {type === "edit" ? data.weather : data.weather}
                          </h3>
                        </div>
                      </div>

                      <div className="sm:col-span-4">
                        <label
                          htmlFor="Weather"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Weather
                        </label>
                        <div className="mt-1">
                          {/* <input
                            id="email"
                            name="email"
                            type="email"
                            // autoComplete="email"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          /> */}
                        </div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          {type === "edit"
                            ? `${data.airPressure}  hPa`
                            : `${data.airpress} hPa`}
                        </h3>
                      </div>

                      {/* <div className="sm:col-span-3">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Country
                        </label>
                        <div className="mt-1">
                          <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          >
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                          </select>
                        </div>
                      </div> */}

                      <div className="sm:col-span-6">
                        <label
                          htmlFor="memo"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Memo
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="memo"
                            id="memo"
                            // autoComplete="street-address"
                            value={memo}
                            onChange={(e) => setMemo(e.target.value)}
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                      {/* 
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium text-gray-700"
                        >
                          City
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="city"
                            id="city"
                            autoComplete="address-level2"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div> */}

                      {/* <div className="sm:col-span-2">
                        <label
                          htmlFor="region"
                          className="block text-sm font-medium text-gray-700"
                        >
                          State / Province
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="region"
                            id="region"
                            autoComplete="address-level1"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div> */}

                      {/* <div className="sm:col-span-2">
                        <label
                          htmlFor="postal-code"
                          className="block text-sm font-medium text-gray-700"
                        >
                          ZIP / Postal code
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="postal-code"
                            id="postal-code"
                            autoComplete="postal-code"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div> */}
                    </div>
                  </div>

                  <div className="pt-5">
                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => setOpenMemoModal(false)}
                        ref={cancelButtonRef}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => setOpenMemoModal(false)}
                      >
                        {type === "edit" ? "Update" : "Save"}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              {/* Form */}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
