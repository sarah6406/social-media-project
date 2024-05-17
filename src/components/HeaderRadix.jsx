"use client";
import React from "react";
import * as Separator from "@radix-ui/react-separator";
import "./headerradix.css";
import Link from "next/link";

const SeparatorDemo = () => (
  <div className="radix-header" style={{ width: "100%", maxWidth: 300, margin: "0 15px" }}>
    <div className="Text" style={{ fontWeight: 500 }}>
      TheHappyHippyHub
    </div>
    <div className="Text">...where we can all be happy hippys together.</div>
    <Separator.Root className="SeparatorRoot" style={{ margin: "15px 0" }} />
    <div style={{ display: "flex", height: 20, alignItems: "center" }}>
      <Link href="/"><div className="Text">Home</div></Link>
      <Separator.Root
        className="SeparatorRoot"
        decorative
        orientation="vertical"
        style={{ margin: "0 15px" }}
      />
      <Link href="/profile"><div className="Text">My Profile</div></Link>
      <Separator.Root
        className="SeparatorRoot"
        decorative
        orientation="vertical"
        style={{ margin: "0 15px" }}
      />
      <Link href="/create-post"><div className="Text">New Post</div></Link>
      <Separator.Root
        className="SeparatorRoot"
        decorative
        orientation="vertical"
        style={{ margin: "0 25px" }}
      />
      <Link href="/feed"><div className="Text">News Feed</div></Link>
    </div>
  </div>
);

export default SeparatorDemo;
