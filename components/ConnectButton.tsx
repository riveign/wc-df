"use client";

import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useDisconnect } from "wagmi";
import { Button } from "./ui/button";

export default function ConnectButton() {
  const { open } = useWeb3Modal();
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  if (isConnected)
    return <Button onClick={() => disconnect()}>Disconnect</Button>;
  return <Button onClick={() => open()}>open modal</Button>;
}
