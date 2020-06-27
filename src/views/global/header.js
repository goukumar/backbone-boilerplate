import $ from "jquery";
import Backbone, { View } from "backbone";
import AppRouter from "../../routes/routes";
import HeaderTemplate from "../../templates/header.hbs";
import eventBus from "../../utility/eventBus";
const HeaderView = View.extend({
  template: HeaderTemplate,
  tagName: "div",
  className: "header",
  default: {
    searchResult: ".search-content",
    searchInput: "#searchForm input",
    searchForm: "#searchForm",
  },
  events: {
    "submit #searchForm": "search",
    "click .navigation a": "onClick",
  },
  initialize() {
    this.router = new AppRouter();
    Backbone.history.start();
  },
  search(e) {
    e.preventDefault();
    let keyWord = this.$(this.default.searchInput).val();
    if (!keyWord.length) {
      alert("Please type something in search box! ");
      return;
    }
    // this.router.navigate("/search/" + keyWord, { trigger: true });
    eventBus.trigger("search", keyWord);
  },
  onClick(e) {
    e.preventDefault();
    var $li = $(e.target);
    this.router.navigate($li.attr("href"), { trigger: true });
  },
  render() {
    this.$el.html(
      this.template({
        navigation: [
          { url: "/home", title: "Home" },
          { url: "/about", title: "About" },
          { url: "/search", title: "Search" },
        ],
      })
    );

    return this;
  },
});
export default HeaderView;
