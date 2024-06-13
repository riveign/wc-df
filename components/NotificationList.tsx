// Notifications.tsx
import { useNotifications, useSubscription } from "@web3inbox/react";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

function NotificationsList() {
  const { data: subscription } = useSubscription();
  const { data: notifications } = useNotifications(5);

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-8">
          {!notifications?.length ? (
            <p> No notifications yet.</p>
          ) : (
            notifications.map(({ id, ...message }) => (
              <div key={id}>
                <div className="flex items-center gap-4">
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                      {message.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {message.body}
                    </p>
                  </div>
                  <div className="ml-auto font-medium">
                    {message.isRead ? "Read" : "Unread"}
                  </div>
                </div>
              </div>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default NotificationsList;
