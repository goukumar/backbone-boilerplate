import homeTemplate from "./home.hbs";
const HomeView = Backbone.View.extend({
  tagName: "div",
  className: "home",
  template: homeTemplate,
  render: function () {
    this.$el.html(this.template({ content: "Home Page view" }));
    return this;
  },
});

export default HomeView;
