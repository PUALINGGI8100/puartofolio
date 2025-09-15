
import type { Route } from "./+types/web";
import Web_Pages from "~/pages/projects/Web_Pages";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Web Projects" },
    { name: "description", content: "Puartofolio web projects" },
  ];
}

export default function Web() {
  return <Web_Pages />;
}