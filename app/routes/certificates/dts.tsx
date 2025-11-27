import type { Route } from "./+types/dts";
import Dts_Page from "~/pages/certificates/dts_page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "certificates" },
    { name: "description", content: "Puartofolio certificates" },
  ];
}

export default function Dtx() {
  return <Dts_Page />;
}