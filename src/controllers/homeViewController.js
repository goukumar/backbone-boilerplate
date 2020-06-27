import $ from "jquery";
import HomeView from "../views/home/home";

const $container = $("body #content");
const homeViewController = () => {
  $container.html(new HomeView().render().$el);
};

export default homeViewController;
