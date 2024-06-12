import React from "react";
import packageJson from "../package.json";

export default function VersionInfo() {
  const walletconnectVersion = packageJson.dependencies["@web3modal/wagmi"];
  const wagmiVersion = packageJson.dependencies["wagmi"];

  return (
    <div className="flex w-full justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4 text-sm">
      <div className="flex items-center">
        <span>WalletConnect: {walletconnectVersion}</span>
      </div>
      <div className="flex items-center">
        <span>Wagmi: {wagmiVersion}</span>
      </div>
    </div>
  );
}
