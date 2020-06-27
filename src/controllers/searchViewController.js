import $ from "jquery";
import SearchView from "../views/search/search";
import SearchCollection from "../collections/searchCollection";

const $container = $("body #content");
const searchViewController = async () => {
  const searchCollection = new SearchCollection();
  await searchCollection.fetch();
  $container.html(new SearchView({ model: searchCollection }).render().$el);
};

export default searchViewController;
