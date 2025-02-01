"use client"; // Add this line at the top

import { useState } from "react";

const AdminSettings = () => {
  const [siteName, setSiteName] = useState("");
  const [supportEmail, setSupportEmail] = useState("");
  const [orderGoal, setOrderGoal] = useState("");

  return (
    <form className="p-4 w-full">
      <p className="text-xl tracking-wide font-semibold border-b-2 w-full py-2">
        Settings
      </p>

      <div className="flex flex-col gap-1 pt-2 mt-6">
        <label className="text-neutral-900" htmlFor="siteName">
          Site Name
        </label>
        <input
          type="text"
          id="siteName"
          value={siteName}
          onChange={(e) => setSiteName(e.target.value)}
          className="w-[320px] h-[40px] pl-2 rounded-lg border outline-none"
        />
      </div>

      <div className="flex flex-col gap-1 pt-2">
        <label className="text-neutral-900" htmlFor="supportEmail">
          Support Email
        </label>
        <input
          type="email"
          id="supportEmail"
          value={supportEmail}
          onChange={(e) => setSupportEmail(e.target.value)}
          className="w-[320px] h-[40px] pl-2 rounded-lg border outline-none"
        />
      </div>

      <div className="flex flex-col gap-1 pt-2">
        <label className="text-neutral-900" htmlFor="orderGoal">
          Monthly Order Goal
        </label>
        <input
          type="number"
          id="orderGoal"
          value={orderGoal}
          onChange={(e) => setOrderGoal(e.target.value)}
          className="w-[320px] h-[40px] pl-2 rounded-lg border outline-none"
        />
      </div>

      <button
        type="submit"
        className="block mt-10 text-start w-[140px] bg-black text-white px-6 py-3 rounded-lg text-sm"
      >
        Save Settings
      </button>
    </form>
  );
};

export default AdminSettings;
