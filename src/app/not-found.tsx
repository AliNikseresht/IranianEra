import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold">404 - Page Not Found</h1>
      <p className="my-[2em]">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/">
        <button
          type="button"
          className="mb-2 me-2 inline-flex items-center rounded-md bg-accent px-5 py-2.5 text-center text-sm font-medium text-[#fff] hover:bg-accent-dark"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-arrow-counterclockwise mr-1"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"
            />
            <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466" />
          </svg>
          Back to home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
