import type { Route } from "./+types/cna";
import Cna_Page from "~/pages/certificates/cna_page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "certificates" },
    { name: "description", content: "Puartofolio certificates" },
  ];
}

export default function Cna() {
  return <Cna_Page />;
}