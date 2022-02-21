import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== "/add-ons/marketing") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
