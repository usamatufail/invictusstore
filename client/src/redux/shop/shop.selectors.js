import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCategories = createSelector(
  [selectShop],
  shop => shop.categories
);

export const selectCategoryProducts = categoryUrlParam =>
  createSelector(
    [selectCategories],
    categories => categories[categoryUrlParam]
  );

export const selectSingleProduct = (categoryUrlParam, productId) =>
  createSelector(
    [selectCategories],
    products =>
      products[categoryUrlParam].items.filter(
        item => item.id === parseInt(productId)
      )
  );
