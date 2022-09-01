import lazyLoading from "../../utils/router/lazyLoading";

export default {
  path: "/product/:id",
  page: lazyLoading(() => import("./SingleProduct")),
};
