
import type { Route } from "./+types/index";
import Index_Page from "~/pages/projects/Index_Pages";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Projects" },
    { name: "description", content: "Puartofolio projects" },
  ];
}

export default function Index() {
  return <Index_Page />;
}