"use client";
import React from "react";
import GLTFViewer from "../components/model";
import dynamic from "next/dynamic";

const Page = dynamic(() => import("./index.tsx"), { ssr: false });

export default function DynamicPage() {
  return <Page />;
}
