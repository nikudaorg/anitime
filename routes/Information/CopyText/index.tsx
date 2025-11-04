"use client";
import { ReactNode } from "react";

const CopyText = ({
  copiedMessage,
  text,
  children,
}: {
  copiedMessage: string;
  text: string;
  children: ReactNode;
}) => {
  return (
    <span
      onClick={() => {
        navigator.clipboard.writeText(text);
        alert(copiedMessage);
      }}
    >
      {children}
    </span>
  );
};

export default CopyText;
