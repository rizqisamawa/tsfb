import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">TSFB</span>
      <div className="links">
        <Link href="#">Menu 1</Link>
        <Link href="#">Menu 2</Link>
        <Link href="#">Menu 3</Link>
      </div>
    </div>
  );
};

export default Navbar;
