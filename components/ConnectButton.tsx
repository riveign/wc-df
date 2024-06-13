"use client";

import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useDisconnect, useEnsName } from "wagmi";
import { Button } from "./ui/button";
import Account from "./Account";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Terminal } from "lucide-react";

export default function ConnectButton() {
  const { open } = useWeb3Modal();
  const { isConnected, address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });

  if (isConnected)
    return (
      <>
        <div className="grid gap-4 p-4">
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              This project is made exclusively to test the capabilities of
              wallet connect. Please do not use it for any other purpose.
            </AlertDescription>
          </Alert>
        </div>
        <Account />
      </>
    );
  return (
    <Button size="lg" onClick={() => open()}>
      Connect
    </Button>
  );
}
