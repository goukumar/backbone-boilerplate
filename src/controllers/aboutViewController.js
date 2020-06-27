import $ from "jquery";
import AboutView from "../views/about/about";

const $container = $("body #content");
const aboutViewController = () => {
  $container.html(new AboutView().render().$el);
};

export default aboutViewController;
