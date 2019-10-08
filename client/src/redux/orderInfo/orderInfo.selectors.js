import { createSelector } from "reselect";

const selectOrderInfo = state => state.orderInfo;

export const selectAddress = createSelector(
  [selectOrderInfo],
  orderInfo => orderInfo.address
);

export const selectPaymentMethod = createSelector(
  [selectOrderInfo],
  orderInfo => orderInfo.paymentMethod
);
