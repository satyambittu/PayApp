import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors">
      <header className="w-full flex justify-between items-center shadow-md px-6 sm:px-16 py-4 bg-white dark:bg-gray-800">
        <div className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">
          Payments App
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/signup")}
            className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md transition"
          >
            Signup
          </button>
          <button
            onClick={() => navigate("/signin")}
            className="px-5 py-2 rounded-lg bg-gray-700 hover:bg-gray-800 text-white font-semibold shadow-md transition"
          >
            Signin
          </button>
        </div>
      </header>

      <main className="flex-grow flex flex-col justify-center items-center px-6 text-center">
        <h1 className="text-3xl font-bold mb-3">Welcome to Payments App</h1>
        <p className="text-lg mb-2 max-w-xl">
          A safe and secure way to transfer your hard-earned money.
        </p>
        <p className="text-base max-w-xl text-gray-600 dark:text-gray-300">
          Easily manage your finances, track spending, and make transactions with just a few clicks.
        </p>
      </main>

      <footer className="w-full bg-white dark:bg-gray-800 py-3 shadow-inner text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © 2024 Payments App. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
