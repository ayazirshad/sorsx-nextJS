"use client";
import React from "react";
import TrHeader from "@/components/TrHeader/TrHeader";
import TrFooter from "@/components/TrFooter/TrFooter";

export default function TrLayout({ children }) {
  return (
    <>
      <TrHeader />
      {children}
      <TrFooter />
    </>
  );
}
