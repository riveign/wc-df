import React from "react";
import { useAccount, useDisconnect, useEnsName } from "wagmi";
import { Button } from "./ui/button";
import {
  useWalletInfo,
  useWeb3Modal,
  useWeb3ModalState,
} from "@web3modal/wagmi/react";
import SignButton from "./SignButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Account() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address: address });
  const { walletInfo } = useWalletInfo();
  const { open } = useWeb3Modal();
  const { selectedNetworkId } = useWeb3ModalState();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      <Card>
        <CardHeader>
          <CardTitle>Account Information</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Connected to {address}</p>
          <p>Wallet: {walletInfo?.name}</p>
          <p>Network: {selectedNetworkId}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>ENS</CardTitle>
        </CardHeader>
        <CardContent>
          <p>ENS Name: {ensName || "No ENS name found"}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sign Message</CardTitle>
        </CardHeader>
        <CardContent>
          <SignButton />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Modal Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between">
            <Button size="lg" onClick={() => open()}>
              Open Modal
            </Button>
            <Button
              variant="destructive"
              size="lg"
              onClick={() => disconnect()}
            >
              Disconnect
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
