import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col lg:flex-row">
          {/* Navbar */}
          <div className="navbar bg-base-300 w-full lg:hidden">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>

          <div className="lg:flex  overflow-scroll   hidden min-h-screen  w-[300px] bg-gray-600">
            <div className="md:fixed top-0%  bg-amber-700 min-h-screen  w-[300px] fixed top-0">
              <ul className="flex flex-col gap-0.5">
                {/* Sidebar content here */}
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button" className="btn m-1">
                    Sles Order
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100  rounded-box z-1 w-52 p-2 shadow-sm"
                  >
                    <li>
                      <NavLink to="/sales">Create Sales</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">All Sales Order</NavLink>
                    </li>
                  </ul>
                </div>
                <li className="text-white  p-2 rounded-bl-2xl rounded-tl-2xl">
                  <NavLink to="/farmer">All Farmer</NavLink>
                </li>
                <li className="text-white  p-2 rounded-bl-2xl rounded-tl-2xl">
                  <NavLink to="/employee">All Employee</NavLink>
                </li>
                <li className="text-white  p-2 rounded-bl-2xl rounded-tl-2xl">
                  <NavLink to="/flock">All Flock</NavLink>
                </li>
                <li className="text-white  p-2 rounded-bl-2xl rounded-tl-2xl">
                  <NavLink to="/flock-report">All Flock Repot</NavLink>
                </li>
                <li className="text-white  p-2 rounded-bl-2xl rounded-tl-2xl">
                  <NavLink to="/branch">All Branch</NavLink>
                </li>
                <li className="text-white  p-2 rounded-bl-2xl rounded-tl-2xl">
                  <NavLink to="/create-branch">Create Branch</NavLink>
                </li>
                <li className="text-white  p-2 rounded-bl-2xl rounded-tl-2xl">
                  <NavLink to="/create-farmer">Create Farmer</NavLink>
                </li>
                <li className="text-white  p-2 rounded-bl-2xl rounded-tl-2xl">
                  <NavLink to="/create-employee">Create Employee</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 w-[100%] overflow-auto">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side lg:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-100  rounded-box   p-4">
            {/* Sidebar content here */}
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="btn m-1">
                Sles Order
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <NavLink to="/sales">Create Sales</NavLink>
                </li>
                <li>
                  <NavLink to="/">All Sales Order</NavLink>
                </li>
              </ul>
            </div>
            <li>
              <NavLink to="/farmer">All Farmer</NavLink>
            </li>
            <li>
              <NavLink to="/employee">All Employee</NavLink>
            </li>
            <li>
              <NavLink to="/flock">All Flock</NavLink>
            </li>
            <li>
              <NavLink to="/flock-report">All Flock</NavLink>
            </li>
            <li>
              <NavLink to="/branch">All Branch</NavLink>
            </li>
            <li>
              <NavLink to="/create-branch">Create Branch</NavLink>
            </li>
            <li>
              <NavLink to="/create-farmer">Create Farmer</NavLink>
            </li>
            <li>
              <NavLink to="/create-employee">Create Employee</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Layout;
