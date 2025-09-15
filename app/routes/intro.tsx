import Intro_Page from "~/pages/Intro_Page";
import type { Route } from "./+types/intro";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Puartofolio" },
    { name: "description", content: "Welcome to Puartofolio" },
  ];
}

export default function Intro() {
  return <Intro_Page />
}