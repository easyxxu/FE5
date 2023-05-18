import React from "react";
import { useMouseLocation } from "../hooks/useMouseLocation";
export default function TextBox() {
  useMouseLocation();
  return (
    <div style={{ height: 100, width: 100, backgroundColor: "royalblue" }}>
      TextBox
    </div>
  );
}
