export default function Filter() {
  return (
    <div className="fixed top-18 left-0 h-screen w-64 p-4 bg-white shadow-md flex flex-col gap-4 overflow-y-auto">
      <h2 className="text-xl font-semibold border-b pb-2 mb-3">Filters</h2>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-medium">Sort By Price</h3>
        <div className="flex items-center gap-4">
          <input
            type="radio"
            id="hightolow"
            name="priceSort"
            className="accent-blue-500"
          />
          <label htmlFor="hightolow" className="cursor-pointer">
            High to Low
          </label>

          <input
            type="radio"
            id="lowtohigh"
            name="priceSort"
            className="accent-blue-500"
          />
          <label htmlFor="lowtohigh" className="cursor-pointer">
            Low to High
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-medium">Date Range</h3>
        <div className="flex items-center gap-3">
          <label htmlFor="from" className="w-12">
            From
          </label>
          <input
            type="date"
            name="from"
            id="from"
            className="border border-gray-300 rounded px-2 py-1 focus:outline-none "
          />
        </div>
        <div className="flex items-center gap-3">
          <label htmlFor="to" className="w-12">
            To
          </label>
          <input
            type="date"
            name="to"
            id="to"
            className="border border-gray-300 rounded px-2 py-1 focus:outline-none "
          />
        </div>
      </div>
    </div>
  );
}
