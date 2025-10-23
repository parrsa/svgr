"use client";
import dynamic from "next/dynamic";
import * as React from "react";
import { iconRegistry } from "./iconRegistry";
import type { IconStyle, IconKey, IconLoader } from "./iconTypes";

type IconProps = React.SVGProps<SVGSVGElement> & {
  title?: string;
  size?: number | string;
};

type Props<S extends IconStyle> = {
  style: S;
  name: IconKey<S>;
  size?: number | string;
  className?: string;
  title?: string;
  ssr?: boolean;
};

export default function Icon<S extends IconStyle>({
  style,
  name,
  size = 20,
  className,
  title,
  ssr = false,
}: Props<S>) {
  const loader = iconRegistry[style][name] as IconLoader;

  const SvgIcon = React.useMemo(() => {
    return dynamic<IconProps>(
      () =>
        loader().then((mod) => {
          if (mod.default) return mod.default;
          return mod;
        }),
      {
        ssr,
        loading: () => <span className={className} aria-hidden />,
      }
    );
  }, [loader, ssr, className]);

  const ariaProps = title
    ? ({ role: "img", "aria-label": title } as const)
    : ({ "aria-hidden": true } as const);

  return (
    <SvgIcon
      width={size}
      height={size}
      className={className}
      title={title}
      focusable={false}
      {...ariaProps}
    />
  );
}
