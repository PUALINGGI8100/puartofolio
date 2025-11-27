import type { Route } from "./+types/index";
import Index_Page from "~/pages/certificates/Index_Page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "certificates" },
    { name: "description", content: "Puartofolio certificates" },
  ];
}

export default function Index() {
  return <Index_Page />;
}