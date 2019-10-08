
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Description from '@material-ui/icons/Description';
import Reports from '@material-ui/icons/EqualizerSharp';
import Settings from '@material-ui/icons/Settings';

// core components/views for Admin layout
import DashboardPage from "./views/Dashboard/Dashboard.js";
import UserProfile from "./views/UserProfile/UserProfile.js";
import AddUser from "./views/users/AddUser";
import AddProduct from "./views/Products/AddProduct";
import EditProduct from "./views/Products/EditProduct";
import Maps from "./views/Maps/Maps.js";
import NotificationsPage from "./views/Notifications/Notifications.js";
// core components/views for RTL layout

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: AddUser,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Users",
    icon: Person,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/products",
    name: "Products",
    icon: ShoppingCart,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/orders",
    name: "Orders",
    icon: Description,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/reports",
    name: "Reports",
    icon: Reports,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/settings",
    name: "Settings",
    icon: Settings,
    component: NotificationsPage,
    layout: "/admin"
  },
 
 
];

export default dashboardRoutes;
