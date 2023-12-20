export default function Pagination({ nPages, currentPage, setCurrentPage }) {
  const pages = Array.from({ length: nPages }, (_, i) => i + 1);

  return (
    <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t bg-gray-50 sm:grid-cols-9">
      <span className="flex items-center col-span-3">
        Showing {currentPage} of {nPages}
      </span>
      <span className="col-span-2"></span>
      <div className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
        <ul className="inline-flex items-center">
          <i
            onClick={() => 1 < currentPage && setCurrentPage(currentPage - 1)}
            className="material-symbols-outlined pagination-btn"
          >
            navigate_before
          </i>
          {pages.map((page, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded-md ${
                currentPage === i + 1 && "bg-purple-500 text-white"
              }`}
            >
              {page}
            </button>
          ))}
          <i
            onClick={() =>
              nPages > currentPage && setCurrentPage(currentPage + 1)
            }
            className="material-symbols-outlined pagination-btn"
          >
            navigate_next
          </i>
        </ul>
      </div>
    </div>
  );
}
