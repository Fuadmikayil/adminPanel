import React from "react";
import { CiSearch } from "react-icons/ci";
import { BiSortAlt2 } from "react-icons/bi";
import product1 from "../assets/images/admin/product1.svg";
import Link from "next/link";

const AdminReviews = () => {
  return (
    <div className="w-full bg-white rounded-xl flex flex-col">
      <div className="flex items-center justify-between p-6 gap-4">
        <p className="text-xl tracking-wide font-semibold">Customers</p>
        <div className="flex gap-4">
          <div className="p-2 border rounded-md border-gray-300 flex items-center gap-2">
            <label htmlFor="search">
              <CiSearch className="scale-150" />
            </label>
            <input
              type="text"
              id="search"
              placeholder="Search reviews"
              className="outline-none"
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-gray-400">
          <thead>
          <tr className="grid grid-cols-4  gap-8 p-4 items-center text-center border-b border-gray-200">
              <th className="font-medium">
                <BiSortAlt2 className="scale-150" />
              </th>
              <th className="font-medium">Name</th>
              <th className="font-medium">Review</th>
              <th className="font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
          <tr className="grid grid-cols-4 gap-8 p-2 items-center text-center border-b border-gray-200">
          <td className="flex justify-center items-center bg-neutral-100 py-3 px-2 rounded-lg w-14">
                <span className="text-blue-500">FM</span>
              </td>
              <td>Fuad Mikayılov</td>
              <td>
                Completed the task and added the required documentation
              </td>
              <td className="text-gray-500 text-center">...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminReviews;
