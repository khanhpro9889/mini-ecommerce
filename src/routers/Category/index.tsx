import lazyLoading from "../../utils/router/lazyLoading";

export default {
  path: "/category/:id",
  page: lazyLoading(() => import("./Category")),
};
