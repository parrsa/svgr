export type IconStyle = "filled" | "linear";

type FilledIcons = "dashboard" | "settings" | "notification" | "profile" | "folder";
type LinearIcons = "dashboard" | "settings" | "notification";

export type IconKey<S extends IconStyle> =
    S extends "filled" ? FilledIcons : LinearIcons;

export type IconLoader = () => Promise<{
    default: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}>;
