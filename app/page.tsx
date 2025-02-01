import Image from 'next/image';

import imgDashboard from "./assets/images/admin/dashboard.png";
import imgChart from "./assets/images/admin/Chart.png";
import imgProgressBar from "./assets/images/admin/ProgressBar.png";
import imgDoughnutChart from "./assets/images/admin/DoughnutChart.svg";



const AdminDashboard = () => {
  return (
    <section className="w-full flex flex-col gap-6 bg-neutral-50 p-4">
      <section className="flex gap-6 justify-around w-full">
        <div className="w-[30%] h-[170px] bg-white p-4 rounded-xl flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <div>
              <h2>Total Sales</h2>
              <p className="text-gray-400 text-xs">THIS MONTH</p>
            </div>
            <p className="font-bold text-xl">$ 4,235</p>
          </div>
          <Image className="object-cover mt-4 w-full pt-4" src={imgDashboard} alt="Dashboard image" />
        </div>
        <div className="w-[30%] h-[170px] bg-white p-4 rounded-xl flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <div>
              <h2>Customers</h2>
              <p className="text-gray-400 text-xs">THIS MONTH</p>
            </div>
            <p className="font-bold text-xl">2,571</p>
          </div>
          <Image className="object-cover mt-4 w-full pt-4" src={imgChart} alt="Chart image" />
        </div>
        <div className="w-[30%] h-[170px] bg-white p-4 rounded-xl flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <div>
              <h2>Orders</h2>
              <p className="text-gray-400 text-xs">Monthly GOALS : 1,000</p>
            </div>
            <p className="font-bold text-xl">734</p>
          </div>
          <Image className="object-cover mt-4 w-full pt-4 pr-4" src={imgProgressBar} alt="Progress bar image" />
        </div>
      </section>

      <section className="flex gap-6 justify-around w-full">
        <div className="w-[30%] bg-white rounded-xl flex flex-col justify-between">
          <div className="p-6 border-b-2 border-gray-200">
            <h1 className="font-bold text-xl">Best Selling</h1>
            <p className="text-gray-400 text-sm">THIS MONTH</p>
          </div>
          <div className="p-6 flex flex-col gap-4">
            <h1 className="font-bold text-xl">
              $2,400{" "}
              <span className="text-gray-600 font-normal text-base">
                - Total Sales
              </span>
            </h1>
            <div className="flex flex-col gap-2 mt-10">
              <p className="px-2 text-sm py-1 border border-2 border-gray-100 rounded-full">
                <span className="text-gray-400">Classic Monochrome Tees —</span> $940 Sales
              </p>
              <p className="px-2 text-sm py-1 border border-2 border-gray-100 rounded-full">
                <span className="text-gray-400">Monochromatic Wardrobe —</span> $790 Sales
              </p>
              <p className="px-2 text-sm py-1 border border-2 border-gray-100 rounded-full">
                <span className="text-gray-400">Essential Neutrals —</span> $740 Sales
              </p>
              <Image className="w-32 mt-16" src={imgDoughnutChart} alt="Doughnut chart" />
            </div>
          </div>
        </div>
        
        <div className="w-[65%] bg-white rounded-xl flex flex-col">
          <div className="flex items-center p-6 gap-4">
            <p>Recent Orders</p>
            <button className="bg-gray-50 px-4 py-2 rounded-full text-sm w-[100px]">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-gray-400">
              <thead>
                <tr className="flex justify-between p-4 border-y-2 border-gray-200 text-gray-400 tracking-wide">
                  <th className="font-medium">Item</th>
                  <th className="font-medium">Date</th>
                  <th className="font-medium">Total</th>
                  <th className="font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="flex flex-col gap-4 px-4 mt-4">
                <tr className="flex justify-between p-4">
                  <td>Mens Black T-Shirts</td>
                  <td>20 Mar, 2023</td>
                  <td>$75.00</td>
                  <td>Processing</td>
                </tr>
                <tr className="flex justify-between p-4">
                  <td>Mens Black T-Shirts</td>
                  <td>20 Mar, 2023</td>
                  <td>$75.00</td>
                  <td>Processing</td>
                </tr>
                <tr className="flex justify-between p-4">
                  <td>Mens Black T-Shirts</td>
                  <td>20 Mar, 2023</td>
                  <td>$75.00</td>
                  <td>Processing</td>
                </tr>
                <tr className="flex justify-between p-4">
                  <td>Mens Black T-Shirts</td>
                  <td>20 Mar, 2023</td>
                  <td>$75.00</td>
                  <td>Processing</td>
                </tr>
                <tr className="flex justify-between p-4">
                  <td>Mens Black T-Shirts</td>
                  <td>20 Mar, 2023</td>
                  <td>$75.00</td>
                  <td>Processing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AdminDashboard;
