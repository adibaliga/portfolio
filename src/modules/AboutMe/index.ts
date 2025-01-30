import { lazy } from "react";

const LazyAboutMe = lazy(() => import("./AboutMe"));

export default LazyAboutMe;
