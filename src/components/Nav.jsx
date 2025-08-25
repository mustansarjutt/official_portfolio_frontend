import { Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function NavBar() {
  const [open, setOpen] = useState(false);

  const navItems = ["Home", "Services", "About", "Blogs", "Contact Me"];

  return (
    <nav className="w-full bg-black text-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="text-white cursor-pointer select-none">
          <Link
            to="/"
            className="font-semibold text-2xl flex items-center">
            COD
            <Menu className="inline text-orange-500 mx-1" size={28} />R
          </Link>
        </div>
        <ul className="hidden md:flex items-center gap-x-8 font-medium">
          {navItems.map((item, i) => (
            <li key={i}>
              <NavLink
                to={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replace(" ", "-")}`
                }
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 border-b-2 border-orange-500 pb-1 transition"
                    : "hover:text-orange-400 transition"
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-black border-t border-gray-800 overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-4 py-4 font-medium">
              {navItems.map((item, i) => (
                <li key={i}>
                  <NavLink
                    to={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase().replace(" ", "-")}`
                    }
                    onClick={() => setOpen(false)} // close after click
                    className={({ isActive }) =>
                      isActive
                        ? "text-orange-500 border-b-2 border-orange-500 pb-1 transition"
                        : "hover:text-orange-400 transition"
                    }
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default NavBar;