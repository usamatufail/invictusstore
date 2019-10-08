import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import shopReducer from "./shop/shop.reducer";
import orderInfoReducer from "./orderInfo/orderInfo.reducer";
import userReducer from "./user/userReducer";
import alertReducer from "./alert/alertReducer";
import productReducer from "./products/productReducer";
import categoryReducer from "./categories/categoryReducer";
import contactReducer from "./contact/contactReducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["user"]
};

const rootReducer = combineReducers({
  shop: shopReducer,
  cart: cartReducer,
  orderInfo: orderInfoReducer,
  user: userReducer,
  alert: alertReducer,
  product: productReducer,
  categories: categoryReducer,
  contact: contactReducer
});

export default persistReducer(persistConfig, rootReducer);
