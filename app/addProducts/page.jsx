// "use client"; // No need for this line since we are not handling client-side logic here

import React from "react";

const AdminProductAdd = () => {
  return (
    <div className="w-full">
      <div className="p-2 border-b-2 border-gray-200 w-full pb-4">
        <span className="font-semibold">Add Product</span>
      </div>
      <form action="" className="flex flex-col">
        <div className="flex gap-16">
          <div className="p-2">
            <div className="flex flex-col gap-1">
              <span className="text-neutral-400">Title</span>
              <input
                type="text"
                className="w-[320px] h-[40px] pl-2 rounded-lg border outline-none"
              />
            </div>
            <div className="flex flex-col gap-1 pt-2">
              <span className="text-neutral-400">Price</span>
              <input
                type="text"
                className="w-[320px] h-[40px] pl-2 rounded-lg border outline-none"
              />
            </div>

            <div className="flex flex-col gap-1 pt-2">
              <span className="text-neutral-400">Category</span>
              <input
                type="text"
                className="w-[320px] h-[40px] pl-2 rounded-lg border outline-none"
              />
            </div>
            <div className="flex flex-col gap-1 pt-2">
              <span className="text-neutral-400">Slug</span>
              <input
                type="text"
                className="w-[320px] h-[40px] pl-2 rounded-lg border outline-none"
              />
            </div>
            <div className="flex flex-col gap-1 pt-2">
              <span className="text-neutral-400">SKU</span>
              <input
                type="text"
                className="w-[320px] h-[40px] pl-2 rounded-lg border outline-none"
              />
            </div>

            <div className="flex flex-col gap-1 pt-2">
              <span className="text-neutral-400">Description</span>
              <textarea
                className="w-[320px] h-[100px] pl-2 rounded-lg border outline-none"
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-1 pt-2">
              <span className="text-neutral-400">Stock status</span>
              <input
                type="text"
                className="w-[320px] h-[40px] pl-2 rounded-lg border outline-none"
              />
            </div>
            <div className="flex flex-col gap-1 pt-2">
              <span className="text-neutral-400">Available quantity</span>
              <input
                type="text"
                className="w-[320px] h-[40px] pl-2 rounded-lg border outline-none"
              />
            </div>
            <div className="flex flex-col gap-1 pt-2">
              <span className="text-neutral-400">Images</span>
              <input
                type="file"
                className="w-[320px] h-[40px] pl-2 rounded-lg border outline-none"
              />
            </div>
            <div className="pt-4">
              <span className="text-neutral-400">Colors</span>
              <div className="flex gap-2 pt-2">
                <div className="w-6 h-6 bg-red-950 rounded-full cursor-pointer"></div>
                <div className="w-6 h-6 bg-yellow-900 rounded-full cursor-pointer"></div>
                <div className="w-6 h-6 bg-green-900 rounded-full cursor-pointer"></div>
                <div className="w-6 h-6 bg-blue-700 rounded-full cursor-pointer"></div>
              </div>
            </div>
            <div className="pt-4">
              <span className="text-neutral-400">Sizes</span>
              <div className="flex gap-2 pt-2">
                <div className="py-2 cursor-pointer px-4 flex justify-center items-start rounded-lg border-gray-200 border">
                  <span>S</span>
                </div>
                <div className="py-2 cursor-pointer px-4 flex justify-center items-start rounded-lg border-gray-200 border">
                  <span>M</span>
                </div>
                <div className="py-2 cursor-pointer px-4 flex justify-center items-start rounded-lg border-gray-200 border">
                  <span>L</span>
                </div>
                <div className="py-2 cursor-pointer px-4 flex justify-center items-start rounded-lg border-gray-200 border">
                  <span>XL</span>
                </div>
                <div className="py-2 cursor-pointer px-4 flex justify-center items-start rounded-lg border-gray-200 border">
                  <span>XXL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="block mt-6 text-start w-[140px] bg-black text-white px-6 py-3 rounded-lg text-sm">
          Save Product
        </button>
      </form>
    </div>
  );
};

export default AdminProductAdd;
