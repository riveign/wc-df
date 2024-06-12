import React from "react";
import ConnectButton from "../components/ConnectButton";
import VersionInfo from "@/components/VersionInfo";

export default function Page() {
  return (
    <div>
      <h1>Wallet Connect DogFood</h1>
      <ConnectButton />
      <VersionInfo />
    </div>
  );
}
