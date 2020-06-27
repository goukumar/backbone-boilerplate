import aboutTemplate from "./about.hbs";
const AboutView = Backbone.View.extend({
  tagName: "div",
  className: "about-us",
  template: aboutTemplate,
  render: function () {
    this.$el.html(this.template({ content: "About us" }));
    return this;
  },
});

export default AboutView;
