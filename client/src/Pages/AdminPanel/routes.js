// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import CategoryIcon from "@material-ui/icons/Category";
import RedeemIcon from "@material-ui/icons/Redeem";
import SettingsPhoneIcon from "@material-ui/icons/SettingsPhone";

// core components/views for Admin layout
import DashboardPage from "./Dashboard/Dashboard.js";
import Categories from "./Categories/Categories.js";
import Products from "./Products/Products.js";
import Orders from "./Orders/Orders.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/categories",
    name: "Categories",
    icon: CategoryIcon,
    component: Categories,
    layout: "/admin"
  },
  {
    path: "/products",
    name: "Products",
    icon: RedeemIcon,
    component: Products,
    layout: "/admin"
  },
  {
    path: "/orders",
    name: "Orders",
    icon: SettingsPhoneIcon,
    component: Orders,
    layout: "/admin"
  }
];

export default dashboardRoutes;
