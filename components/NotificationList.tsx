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
        <CardContent>
          {!notifications?.length ? (
            <p> No notifications yet.</p>
          ) : (
            notifications.map(({ id, ...message }) => (
              <div key={id}>
                <h3>{message.title}</h3>
                <p>{message.body}</p>
                <p>{message.isRead ? "Read" : "Unread"}</p>
              </div>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default NotificationsList;
