import { SINGLE_PATH } from "../../constants/path";
import lazyLoading from "../../utils/router/lazyLoading";

const page = {
  path: SINGLE_PATH,
  page: lazyLoading(() => import("./SingleProduct")),
};

export default page;
