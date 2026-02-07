import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-slate-900 text-white shadow">
      <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">📝 Todo App</h1>

        <nav className="flex gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300"
            }
          >
            Todos
          </NavLink>

          <NavLink
            to="/create"
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300"
            }
          >
            Create
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
