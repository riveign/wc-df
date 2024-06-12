"use client";

import React, { useState } from "react";
import { useSignMessage } from "wagmi";
import { Cross1Icon, CheckIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

export default function SignButton() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const { signMessage } = useSignMessage();

  const handleSignMessage = () => {
    setStatus("loading");
    signMessage(
      {
        message: message,
      },
      {
        onSuccess: () => {
          setStatus("success");
          setTimeout(() => setStatus("idle"), 2000);
        },
        onError: () => {
          setStatus("error");
          setTimeout(() => setStatus("idle"), 2000);
        },
      }
    );
  };

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
        onClick={handleSignMessage}
        disabled={status === "loading"}
      >
        Sign Message
      </Button>
      {status === "loading" && (
        <svg
          className="animate-spin h-6 w-6 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          ></path>
        </svg>
      )}
      {status === "success" && <CheckIcon className="text-green-500 w-6 h-6" />}
      {status === "error" && <Cross1Icon className="text-red-500 w-6 h-6" />}
    </div>
  );
}
