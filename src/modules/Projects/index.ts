import { lazy } from "react";

const LazyProjects = lazy(() => import("./Project"));

export default LazyProjects;
