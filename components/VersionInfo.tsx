import React from "react";
import packageJson from "../package.json";

export default function VersionInfo() {
  const walletconnectVersion = packageJson.dependencies["@web3modal/wagmi"];
  const wagmiVersion = packageJson.dependencies["wagmi"];

  return (
    <div>
      <p>WalletConnect Version: {walletconnectVersion}</p>
      <p>Wagmi Version: {wagmiVersion}</p>
    </div>
  );
}
