import { Router } from "backbone";

// Here we are including controllers
import homeViewCtr from "../controllers/homeViewController";
import aboutViewCtr from "../controllers/aboutViewController";
import searchViewCtr from "../controllers/searchViewController";

const AppRouter = Router.extend({
  routes: {
    "": homeViewCtr,
    home: homeViewCtr,
    about: aboutViewCtr,
    search: searchViewCtr,
  },
});
export default AppRouter;
