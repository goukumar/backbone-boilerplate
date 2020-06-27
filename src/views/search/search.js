import eventBus from "../../utility/eventBus";
import searchTemplate from "./search.hbs";
import searchListTemplate from "../../templates/searchList.hbs";
import { View } from "backbone";
const SearchView = View.extend({
  template: searchTemplate,
  filters: [],
  default: {
    searchResult: ".search-content",
  },
  events: {
    "click .filter input": "onClick",
  },
  initialize(options) {
    if (!(options && options.model)) {
      throw new Error("model is not specified.");
    }
    eventBus.on("search", this.search, this);
  },
  search(keyWord) {
    if (!keyWord.length) {
      alert("Please type something in search box! ");
      return;
    }
    this.$(this.default.searchResult).html(
      searchListTemplate({
        products: this.model.search(keyWord),
      })
    );
  },
  onClick(e) {
    let $target = this.$(e.target);
    let selected = $target.is(":checked");

    selected
      ? this.filters.push($target.val())
      : this.filters.pop($target.val());

    this.$(this.default.searchResult).html(
      searchListTemplate({
        products: this.model.filterItems(this.filters),
      })
    );
  },
  eachUnique() {
    const categories = this.model.models.map((item) => {
      return item.attributes.category;
    });
    return [...new Set(categories)];
  },
  render() {
    const filters = this.eachUnique();
    this.$el.html(
      this.template({
        products: this.model.models,
        filters: filters,
      })
    );
    return this;
    //header HTML is available inside $el of this view
    //$header = this.$(".header");
  },
});

export default SearchView;
