import type { Route } from "./+types/g";
import G_Page from "~/pages/certificates/g_page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "certificates" },
    { name: "description", content: "Puartofolio certificates" },
  ];
}

export default function G() {
  return <G_Page />;
}