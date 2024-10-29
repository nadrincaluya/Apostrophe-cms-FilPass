module.exports = {
  extend: '@apostrophecms/piece-page-type',
  options: {
    label: 'Review Page',
    pluralLabel: 'Review Pages',
  },
  fields: {
    add: {},
    group: {}
  },
  methods(self) {
    return {
      async addCategoryChoices(req) {
        const allReviews = await self.apos.modules.review.find(req)
          .project({
            category: 1
          })
          .toArray();
        const uniqueCategories = [ ...new Set(allReviews.map(review => review.category)) ];
        return [
          {
            label: 'All',
            value: 'all'
          },
          ...uniqueCategories.map(category => ({
            label: category.charAt(0).toUpperCase() + category.slice(1),
            value: category
          }))
        ];
      }
    };
  },
  extendMethods(self) {
    return {
      filterByIndexPage(_super, query, page) {
        // if the page has a category, add it to the query
        // if the page category is `all`, don't modify the query and return all pieces
        if (page.displayCategory && page.displayCategory !== 'all') {
          query.category(page.displayCategory);
        }
        // return the query
        return query;
      },
      chooseParentPage(_super, pages, piece) {
        // if the piece has a category and there is more than one page, assign the correct one
        if (piece.category && pages.length > 1) {
          const pieceCategory = typeof piece.category === 'string' ? piece.category : 'all';
          // find the page with the correct category or use the default behavior
          return pages.find((page) => page.displayCategory === pieceCategory) || _super(pages, piece);
        }
        // if only a single page, use the default behavior
        return _super(pages, piece);
      }
    };
  }
};
