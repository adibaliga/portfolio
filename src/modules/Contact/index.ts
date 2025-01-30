import { lazy } from "react";

const LazyContact = lazy(() => import("./Contact"));

export default LazyContact;
