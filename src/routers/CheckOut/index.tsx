import lazyLoading from "../../utils/router/lazyLoading";

export default {
  path: "/checkout",
  page: lazyLoading(() => import("./CheckOut")),
};
