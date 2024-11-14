"use client";

import React from "react";
import { twMerge } from "tailwind-merge";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface UpbarProps extends React.HTMLAttributes<HTMLDivElement> {}
export default function Upbar({ className }: UpbarProps) {
  return (
    <header
      className={twMerge("flex items-center gap-4 px-4 py-2", className)}
    ></header>
  );
}
