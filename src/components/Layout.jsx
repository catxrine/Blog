export default function Layout({ left, right }) {
  return (
    <div>
      <div
        className={`bar grid grid-cols-[15em_1fr] transition duration-700 ease-in-out h-screen grid-flow-row`}
      >
        <div className="transition duration-700 ease-in-out border-r-2 border-gray-200 h-screen overflow-x-auto">
          {left}
        </div>
        <div className="p-5 row-span-2 overflow-x-auto bg-white text-black transition duration-700 ease-in-out">
          <div>
            <div className="items-center float-right justify-between h-full px-6 mx-auto text-purple-600">
              <ul className="flex items-center">
                <li>
                  <button
                    className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
                    aria-label="Notifications"
                    aria-haspopup="true"
                  >
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                    </svg>
                    <span
                      aria-hidden="true"
                      className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full"
                    ></span>
                  </button>
                </li>
              </ul>
            </div>
            {right}
          </div>
        </div>
      </div>
    </div>
  );
}
