import React from "react";
import { CiSearch } from "react-icons/ci";
import { BiSortAlt2 } from "react-icons/bi";
import product1 from "../assets/images/admin/product1.svg";
import Link from "next/link";
import Image from "next/image";

const AdminCustomers = () => {
  return (
    <div className="w-full bg-white rounded-xl flex flex-col">
      <div className="flex items-center justify-between p-6 gap-4">
        <p className="text-xl tracking-wide font-semibold">Reviews</p>
        <div className="flex gap-4">
          <div className="p-2 border rounded-md border-gray-300 flex items-center gap-2">
            <label htmlFor="search">
              <CiSearch className="scale-150" />
            </label>
            <input
              type="text"
              id="search"
              placeholder="Search products"
              className="outline-none"
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-gray-400">
          <thead>
            <tr className="flex justify-between items-center p-4 border-y-2 border-gray-200 tracking-wide">
              <th className="font-medium">
                <BiSortAlt2 className="scale-150" />
              </th>
              <th className="font-medium">Name</th>
              <th className="font-medium">Email</th>
              <th className="font-medium">Shipping Address</th>
              <th className="font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="flex justify-between p-4 items-center border-b border-gray-200">
              <td className="flex justify-center items-center bg-neutral-100 py-1 px-2 rounded-lg">
                <Image src={product1} alt="product1" width={50} height={50} />
              </td>
              <td>Mens Black T-Shirts</td>
              <td>esther.howard@gmail.com</td>
              <td>8642 Yule Street, Arvada CO 80007</td>
              <td className="text-gray-500 text-start">...</td>
            </tr>
            <tr className="flex justify-between p-4 items-center border-b border-gray-200">
              <td className="flex justify-center items-center bg-neutral-100 py-1 px-2 rounded-lg">
                <Image src={product1} alt="product1" width={50} height={50} />
              </td>
              <td>Mens Black T-Shirts</td>
              <td>esther.howard@gmail.com</td>
              <td>8642 Yule Street, Arvada CO 80007</td>
              <td className="text-gray-500 text-start">...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminCustomers;
