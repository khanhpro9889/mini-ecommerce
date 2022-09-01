import lazyLoading from "../../utils/router/lazyLoading";

export default {
  path: "/",
  page: lazyLoading(() => import("./Home")),
};
