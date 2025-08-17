import { NavBar, Footer } from "./components";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <div className="min-h-screen bg-black">
      <NavBar isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;