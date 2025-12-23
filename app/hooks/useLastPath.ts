import { useLocation } from "react-router";

export const useLastPath = () => {
  const { pathname } = useLocation();
  
  // Memecah path dan mengambil bagian terakhir yang bukan string kosong
  const pathSegments = pathname.split("/").filter(Boolean);
  const lastPath = pathSegments[pathSegments.length - 1] || "home";

  return lastPath;
};