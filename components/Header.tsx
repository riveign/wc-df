import React from "react";
import Link from "next/link";
import VersionInfo from "./VersionInfo";

export default function Header() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 ">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link href="#" className="transition-colors hover:text-foreground">
          Wallet Connect Dogfood
        </Link>
      </nav>
      <div className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <VersionInfo />
      </div>
    </header>
  );
}
