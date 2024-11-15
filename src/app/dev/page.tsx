"use client";
import React, { Suspense } from "react";
import GLTFViewer from "../components/model";
export default function Page() {
  return (
    <Suspense fallback={<div className="loader">Loading 3D Model...</div>}>
      <GLTFViewer />
    </Suspense>
  );
}
