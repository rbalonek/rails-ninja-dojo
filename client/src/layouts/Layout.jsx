import React from "react";

export default function Layout(props) {
  return (
    <div style={{ contain: "content" }}>
      <main>{props.children}</main>
    </div>
  );
}
