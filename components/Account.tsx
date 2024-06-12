import React from "react";
import { useAccount, useDisconnect, useEnsName } from "wagmi";
import { Button } from "./ui/button";
import {
  useWalletInfo,
  useWeb3Modal,
  useWeb3ModalState,
} from "@web3modal/wagmi/react";
import SignButton from "./SignButton";

export default function Account() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address: address });
  const { walletInfo } = useWalletInfo();
  const { open } = useWeb3Modal();
  const { selectedNetworkId } = useWeb3ModalState();

  return (
    <div>
      <p>Connected to {address}</p>
      <p>Wallet: {walletInfo?.name}</p>
      <p>ENS Name: {ensName || "No ENS name found"}</p>
      <p>Network: {selectedNetworkId}</p>
      <Button size="lg" onClick={() => open()}>
        Open Modal
      </Button>
      <SignButton />
      <div className="mt-4 flex justify-center">
        <Button size="lg" onClick={() => disconnect()}>
          Disconnect
        </Button>
      </div>
    </div>
  );
}
