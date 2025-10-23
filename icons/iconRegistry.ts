import type { IconLoader, IconStyle } from "./iconTypes";

export const iconRegistry: Record<IconStyle, Record<string, IconLoader>> = {
    filled: {
        dashboard: () => import("@/icons/svg-collection/filled/dashboard.svg"),
        settings: () => import("@/icons/svg-collection/filled/settings.svg"),
        notification: () => import("@/icons/svg-collection/filled/notification.svg"),
        profile: () => import("@/icons/svg-collection/filled/profile.svg"),
        folder: () => import("@/icons/svg-collection/filled/folder.svg"),
    },
    linear: {
        dashboard: () => import("@/icons/svg-collection/linear/notification.svg"),
        settings: () => import("@/icons/svg-collection/linear/settings.svg"),
        notification: () => import("@/icons/svg-collection/linear/notification.svg"),
        profile: () => import("@/icons/svg-collection/linear/profile.svg"),
        folder: () => import("@/icons/svg-collection/linear/folder.svg"),
    },
};
