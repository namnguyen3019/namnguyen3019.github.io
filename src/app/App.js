import React from "react";
import Topbar from "../components/topbar";
import Hero from "../components/hero";
import Work from "../components/work";
import Profile from "../components/profile";
import Contact from "../components/contact";

export default function App() {
  return (
    <>
      <Topbar />
      <main>
        <Hero />
        <Work />
        <Profile />
        <Contact />
      </main>
    </>
  );
}
