import React from "react";
import Header from "@/components/Header";
import Main from "@/components/Main";

export default function Page() {
  return (
    <div className="flex min-h-screen w-screen flex-col">
      <Header />
      <div className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <Main />
      </div>
    </div>
  );
}
