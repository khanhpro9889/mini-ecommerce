import { CATEGORY_PATH } from "../../constants/path";
import lazyLoading from "../../utils/router/lazyLoading";

const page = {
  path: CATEGORY_PATH,
  page: lazyLoading(() => import("./Category")),
};

export default page;
