import React from "react";
import { Link } from "react-router-dom";
import AboutBenefit from "../About/AboutBenefit";
import AboutTeam from "./AboutTeam";

export default function TeamMain() {
  return (
    <section>
      <AboutBenefit />

      <AboutTeam />
    </section>
  );
}
