import Achievements_Page from "~/pages/Achievements_Page";
import type { Route } from "./+types/achievements";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Achievements" },
    { name: "description", content: "Puartofolio Achievements" },
  ];
}

export default function Achievements() {
  return <Achievements_Page />
}