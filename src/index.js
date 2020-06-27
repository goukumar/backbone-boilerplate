import $ from "jquery";
import HeaderView from "./views/global/header";
import FooterView from "./views/global/footer";

import "./sass/styles.scss";

$(function () {
  let header = new HeaderView();
  let footer = new FooterView();
  $("#header").html(header.render().$el);
  $("#footer").html(footer.render().$el);
});
