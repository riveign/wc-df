"use client";

import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useDisconnect, useEnsName } from "wagmi";
import { Button } from "./ui/button";
import Account from "./Account";

export default function ConnectButton() {
  const { open } = useWeb3Modal();
  const { isConnected, address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });

  if (isConnected) return <Account />;
  return <Button onClick={() => open()}>Connect</Button>;
}
