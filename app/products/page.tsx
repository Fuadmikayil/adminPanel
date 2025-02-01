import React from "react";
import { CiSearch } from "react-icons/ci";
import { BiSortAlt2 } from "react-icons/bi";
import product1 from "../assets/images/admin/product1.svg";
import Link from "next/link";
import Image from "next/image";

const AdminProducts = () => {
  return (
    <div className="w-full bg-white rounded-xl flex flex-col">
      <div className="flex items-center justify-between p-6 gap-4">
        <p className="text-xl tracking-wide font-semibold">Products</p>
        <div className="flex gap-4">
          <Link
            href="/addProducts"
            className="bg-black text-white px-6 py-3 rounded-lg text-sm"
          >
            Add Product
          </Link>

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
              <th className="font-medium">SKU</th>
              <th className="font-medium">Price</th>
              <th className="font-medium">Stock</th>
              <th className="font-medium">Categories</th>
              <th className="font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="flex justify-between p-4 items-center border-b border-gray-200">
              <td className="flex justify-center items-center bg-neutral-100 py-1 px-2 rounded-lg">
                <Image src={product1} alt="product1" width={50} height={50} />
              </td>
              <td>Mens Black T-Shirts</td>
              <td>47514501</td>
              <td>$35.00</td>
              <td>In Stock</td>
              <td>T-shirt, Men</td>
              <td className="text-gray-500 text-start">...</td>
            </tr>
            <tr className="flex justify-between p-4 items-center border-b border-gray-200">
              <td className="flex justify-center items-center bg-neutral-100 py-1 px-2 rounded-lg">
              <Image src={product1} alt="product1" width={50} height={50} />

              </td>
              <td>Mens Black T-Shirts</td>
              <td>47514501</td>
              <td>$35.00</td>
              <td>In Stock</td>
              <td>T-shirt, Men</td>
              <td className="text-gray-500 text-start">...</td>
            </tr>
            <tr className="flex justify-between p-4 items-center border-b border-gray-200">
              <td className="flex justify-center items-center bg-neutral-100 py-1 px-2 rounded-lg">
              <Image src={product1} alt="product1" width={50} height={50} />

              </td>
              <td>Mens Black T-Shirts</td>
              <td>47514501</td>
              <td>$35.00</td>
              <td>In Stock</td>
              <td>T-shirt, Men</td>
              <td className="text-gray-500 text-start">...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProducts;
