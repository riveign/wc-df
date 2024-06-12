"use client";

import React, { useState } from "react";
import { useSignMessage } from "wagmi";
import { Button } from "./ui/button";

export default function SignButton() {
  const [message, setMessage] = useState("");
  const { signMessage } = useSignMessage();

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message"
        className="px-4 py-2 border rounded-md"
      />
      <Button
        size="lg"
        onClick={() =>
          signMessage(
            {
              message: message,
            },
            { onSuccess: () => console.log("Signed message!") }
          )
        }
      >
        Sign Message
      </Button>
    </div>
  );
}
