import Link from "next/link";
import React from "react";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="max-w-6xl mx-auto p-3 flex justify-between items-center">
      <ul className="flex gap-4">
        <li>
          <Link href={"/sign-in"}>Sign in</Link>
        </li>
        <li className="hidden sm:block">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="hidden sm:block">
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <DarkModeSwitch />
        <Link href={"/"} className="flex items-center gap-1">
          <span className="text-2xl font-bold py-1 px-2 bg-amber-500 rounded-lg">
            IMDd
          </span>
          <span className="text-xl hidden sm:inline">Clone</span>
        </Link>
      </div>
    </div>
  );
}
