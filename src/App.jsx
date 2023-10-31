import { useEffect, useState, useCallback } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    localStorage.getItem("theme") === "dark" ? setTheme(true) : setTheme(false);
  }, []);

  const setTheme = useCallback((dark) => {
    if (dark) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      setDarkMode(true);
      return;
    }
    localStorage.setItem("theme", "light");
    document.documentElement.classList.remove("dark");
    setDarkMode(false);
  }, []);

  const handleClick = () => {
    alert("Assignment has been completed :-)");
  };

  return (
    <div className="font-mono font-semibold text-black dark:text-sky-500">
      <button className="ml-4 mt-4" onClick={() => setTheme(!darkMode)}>
        {darkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-8 w-8 hover:animate-spin-slow"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-8 w-8 hover:animate-pulse"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        )}
      </button>
      <div className="fixed left-1/2 top-1/4 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-6">
        <h1 className="text-2xl">Joel's button</h1>
        <button
          className="rounded-full border-2 border-black text-lg decoration-2 underline-offset-2 hover:animate-pulse hover:underline dark:border-sky-500"
          onClick={handleClick}
        >
          Click me
        </button>
      </div>
    </div>
  );
};

export default App;
