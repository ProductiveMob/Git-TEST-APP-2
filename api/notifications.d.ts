declare module 'api/notifications' {
  interface NotificationPermissions {
    permissions: {
      canReceiveAlerts: boolean,
      canReceiveSound: boolean,
      canUpdateApplicationIconBadge: boolean
    };
    // Android:
    //   We can not get deprecated GCM token anymore
    //   This value will be identical to Firebase token FCM
    // iOS:
    //   It is an APN token
    notificationToken: String;
    firebaseToken: String;
    platform: 'ios' | 'android'
  }

  interface LocalNotification {
    title: string;
    triggerAtMilliseconds: Number;
    shouldPlaySound?: boolean;
  }

  /**
   * Notification object created by the Notification Trigger
   */
  interface TriggeredNotification {
    // The title of the notification.
    title?: string;
    // The body of the notification.
    body?: string;
    // Link to screen when the user interacts with the notification
    deepLink?: string;
    // An optional object containing additional notification data.
    customData?: any;
  }

  export function requestPermissions(): Promise<NotificationPermissions>;
  export function setApplicationIconBadgeNumber(iconBadgeNumber: number): Promise<void>;
  export function scheduleLocalNotification(localNotification: LocalNotification): Promise<void>;
  export function cancelLocalNotifications(): Promise<void>;
}
