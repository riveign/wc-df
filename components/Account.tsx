import React from "react";
import { useAccount, useDisconnect, useEnsName } from "wagmi";
import { Button } from "./ui/button";

export default function Account() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });

  return (
    <div>
      <p>Connected to {address}</p>
      <p>ENS Name: {ensName}</p>
      <div className="mt-4 flex justify-center">
        <Button size="lg" onClick={() => disconnect()}>
          Disconnect
        </Button>
      </div>
    </div>
  );
}
