
import type { Route } from "./+types/certificates";
import Certificates_Page from "~/pages/Certificates_Page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Certificates" },
    { name: "description", content: "Puartofolio Certificates" },
  ];
}

export default function Achievements() {
  return <Certificates_Page />
}