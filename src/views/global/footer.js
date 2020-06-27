import { View } from "backbone";
import FooterTemplate from "../../templates/footer.hbs";

const FooterView = View.extend({
  template: FooterTemplate,
  tagName: "div",
  className: "footer",
  render: function () {
    this.$el.html(this.template({ footer: "This is Footer" }));

    return this;
  },
});
export default FooterView;
