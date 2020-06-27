import $ from "jquery";
import { View } from "backbone";
import Handlebars from "handlebars";

const TodoItemView = View.extend({
  initialize: function (options) {
    if (!(options && options.model)) {
      throw new Error("model is not specified.");
    }
  },
  render: function () {
    this.$el.html(this.template({ footer: "This is Footer" }));

    return this;
  },
});

export default TodoItemView;
