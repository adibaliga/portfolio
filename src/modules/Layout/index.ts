import { lazy } from "react";

const LazyNavbar = lazy(() => import("./NavBar"));
const LazyHeader = lazy(() => import("./Header"));
const LazyFooter = lazy(() => import("./Footer"));

export { LazyNavbar as Navbar, LazyHeader as Header, LazyFooter as Footer };
