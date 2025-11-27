import type { Route } from "./+types/ibm";
import Ibm_Page from "~/pages/certificates/ibm_page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "certificates" },
    { name: "description", content: "Puartofolio certificates" },
  ];
}

export default function Ibm() {
  return <Ibm_Page />;
}