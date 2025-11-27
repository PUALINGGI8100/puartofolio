import type { Route } from "./+types/dql";
import Dql_Page from "~/pages/certificates/dql_page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "certificates" },
    { name: "description", content: "Puartofolio certificates" },
  ];
}

export default function Dql() {
  return <Dql_Page />;
}