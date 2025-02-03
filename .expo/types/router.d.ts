/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(auth)` | `/(auth)/forgot` | `/(auth)/login` | `/(auth)/newpassword` | `/(auth)/signup` | `/(auth)/verification` | `/(hospital)` | `/(hospital)/` | `/(landing)` | `/(landing)/doctor` | `/(landing)/location` | `/(landing)/started` | `/(landing)/tailor` | `/(patient)` | `/(patient)/` | `/(patient)/(hospital)` | `/(patient)/(hospital)/` | `/(patient)/(profile)` | `/(patient)/(profile)/` | `/(patient)/(profile)/edit` | `/(patient)/(profile)/faq` | `/(patient)/(profile)/payment` | `/(patient)/(profile)/saved` | `/(patient)/articles` | `/(patient)/edit` | `/(patient)/faq` | `/(patient)/home` | `/(patient)/notification` | `/(patient)/payment` | `/(patient)/saved` | `/(profile)` | `/(profile)/` | `/(profile)/edit` | `/(profile)/faq` | `/(profile)/payment` | `/(profile)/saved` | `/_sitemap` | `/articles` | `/doctor` | `/edit` | `/faq` | `/forgot` | `/home` | `/location` | `/login` | `/newpassword` | `/notification` | `/payment` | `/saved` | `/signup` | `/started` | `/tailor` | `/verification`;
      DynamicRoutes: `/${Router.SingleRoutePart<T>}` | `/(hospital)/${Router.SingleRoutePart<T>}` | `/(patient)/${Router.SingleRoutePart<T>}` | `/(patient)/(hospital)/${Router.SingleRoutePart<T>}`;
      DynamicRouteTemplate: `/(hospital)/[id]` | `/(patient)/(hospital)/[id]` | `/(patient)/[id]` | `/[id]`;
    }
  }
}
