import {
  useNotifications,
  usePrepareRegistration,
  useRegister,
  useSubscribe,
  useSubscription,
  useUnsubscribe,
  useWeb3InboxAccount,
  useWeb3InboxClient,
} from "@web3inbox/react";
import { useCallback, useEffect } from "react";
import { useSignMessage, useAccount } from "wagmi";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";

export default function NotificationsSettings() {
  const { address } = useAccount();
  const { signMessageAsync } = useSignMessage();

  const { prepareRegistration } = usePrepareRegistration();
  const { register, isLoading: isRegistering } = useRegister();
  const { data: w3iClient, isLoading: w3iClientIsLoading } =
    useWeb3InboxClient();
  const { isRegistered } = useWeb3InboxAccount(`eip155:1:${address}`);

  const handleRegistration = async () => {
    try {
      console.log("Starting registration");
      const { message, registerParams } = await prepareRegistration();
      const signature = await signMessageAsync({ message: message });
      await register({ registerParams, signature });
    } catch (registerIdentityError: any) {
      console.error(registerIdentityError);
    }
  };

  const { subscribe, isLoading: isSubscribing } = useSubscribe();
  const { unsubscribe, isLoading: isUnsubscribing } = useUnsubscribe();
  const { data: subscription } = useSubscription();
  const isSubscribed = Boolean(subscription);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
      </CardHeader>
      <CardContent>
        {w3iClientIsLoading ? (
          <div>Loading W3I Client</div>
        ) : (
          <div>
            <h1>W3I QuickStart</h1>
            <div>
              <Button
                size="lg"
                onClick={handleRegistration}
                disabled={isRegistered}
              >
                {isRegistered ? "Registered" : "Register"}
              </Button>
              {isSubscribed ? (
                <Button size="lg" onClick={unsubscribe}>
                  {" "}
                  Unsubscribe{" "}
                </Button>
              ) : (
                <Button size="lg" onClick={() => subscribe()}>
                  {" "}
                  Subscribe{" "}
                </Button>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
