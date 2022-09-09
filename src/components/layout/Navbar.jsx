import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
function Navbar() {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-2 text-4xl" />
          <Link to='/' className="align-middle font-bold text-lg">
            Github Finder
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2"><div className="flex justify-end"><Link to='/' className="btn btn-ghost btn-sm rounded-btn font-bold">Home</Link><Link to='/' className="btn btn-ghost btn-sm rounded-btn font-bold">About</Link></div></div>
      </div>
    </nav>
  );
}

export default Navbar;
