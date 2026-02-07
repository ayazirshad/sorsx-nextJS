"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export const useLanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  const LANG_KEY = "preferredLanguage";

  // List of files that exist in the TR version (mapped to Next.js routes)
  // user's list: ai_interviewer.html, demo_page_1.html, demo_page_2.html, home.html, midsize_businesses.html, sorsx_hire.html
  // mapped to routes:
  const TR_ROUTES = [
    "/ai_interviewer",
    "/demo_page_1",
    "/demo_page_2",
    "/home", // This maps to /tr (or /tr/home)
    "/midsize_businesses",
    "/sorsx_hire",
  ];

  const getBaseRoute = (path) => {
    let p = path;
    if (p.startsWith("/tr")) {
      p = p.replace("/tr", "");
    }
    // Handle root /tr or /tr/ being same as /tr/home effectively for mapping
    if (p === "" || p === "/") {
      return "/home";
    }
    return p;
  };

  const setLanguage = (lang) => {
    if (typeof window === "undefined") return;
    localStorage.setItem(LANG_KEY, lang);

    const isUnderTR = pathname.startsWith("/tr");
    let baseRoute = getBaseRoute(pathname);

    if (lang === "tr") {
      if (!isUnderTR) {
        // Switching to TR
        if (!TR_ROUTES.includes(baseRoute)) {
          // If page not supported in TR, user logic fallback to home
          router.push("/tr");
        } else {
          if (baseRoute === "/home") router.push("/tr");
          else router.push(`/tr${baseRoute}`);
        }
      }
    } else {
      // Switching to EN
      if (isUnderTR) {
        if (baseRoute === "/home") router.push("/");
        else router.push(baseRoute);
      }
    }
  };

  const checkLanguage = () => {
    if (typeof window === "undefined") return;
    const preferredLang = localStorage.getItem(LANG_KEY);
    const isUnderTR = pathname.startsWith("/tr");
    const baseRoute = getBaseRoute(pathname);

    if (preferredLang === "tr" && !isUnderTR) {
      // User wants TR but is on EN
      // Only redirect if it's a valid TR page or Home
      if (baseRoute === "/home") {
        router.push("/tr");
      } else if (TR_ROUTES.includes(baseRoute)) {
        router.push(`/tr${baseRoute}`);
      }
    } else if (preferredLang === "en" && isUnderTR) {
      // User wants EN but is on TR
      if (baseRoute === "/home") {
        router.push("/");
      } else {
        router.push(baseRoute);
      }
    }
  };

  return { setLanguage, checkLanguage };
};
