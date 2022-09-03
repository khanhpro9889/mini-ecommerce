import { CHECKOUT_PATH } from "../../constants/path";
import lazyLoading from "../../utils/router/lazyLoading";

const page = {
  path: CHECKOUT_PATH,
  page: lazyLoading(() => import("./CheckOut")),
};

export default page;
