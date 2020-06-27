import { Collection } from "backbone";
import _ from "underscore";

import SearchModel from "../models/searchModel";

const SearchCollection = Collection.extend({
  url: "https://fakestoreapi.com/products",
  model: SearchModel,
  parse(response) {
    // Save this scope inside a variable.
    let self = this;

    _.each(response, function (item) {
      let product = new self.model(item);

      self.push(product);
    });

    return this.models;
  },
  filterItems(filters) {
    if (filters.length) {
      return this.models.filter((item) => {
        return filters.indexOf(item.attributes.category) >= 0;
      });
    }
    return this.models;
  },
  search(keyword) {
    return this.models.filter((item) => {
      return item.attributes.title.indexOf(keyword) >= 0;
    });
  },
  resetFilters() {},
});

export default SearchCollection;
