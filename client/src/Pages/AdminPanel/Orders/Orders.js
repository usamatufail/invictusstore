/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from "react";
import MaterialTable from "material-table";
// core components
import GridItem from "../../../Components/Grid/GridItem.js";
import GridContainer from "../../../Components/Grid/GridContainer.js";

import {
  getOrders,
  updateOrder,
  deleteOrder
} from "../../../redux/orderInfo/orderInfo.actions";
import { connect } from "react-redux";

class Orders extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getOrders();
  }

  static getDerivedStateFromProps(props, state) {
    return {
      columns: [
        { title: "User", field: "user" },
        { title: "First Name", field: "firstName" },
        { title: "Last Name", field: "lastName" },
        { title: "Address", field: "address1" },
        { title: "Address", field: "address2" },
        { title: "City", field: "city" },
        { title: "State", field: "state" },
        { title: "Zip", field: "zip" },
        { title: "Country", field: "country" },
        { title: "Payment Method", field: "paymentMethod" },
        // { title: "Items", field: "cartItems" },
        { title: "Date", field: "date" },
        {
          title: "Status",
          field: "status",
          lookup: { inProgress: "In Progress", completed: "Completed" }
        }
      ],
      data: props.orders
    };
  }

  render() {
    const state = this.state;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12}>
            {state.columns.length !== 0 && (
              <MaterialTable
                title="All Orders"
                columns={state.columns}
                data={state.data}
                editable={{
                  onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                      this.props.updateOrder(newData, oldData._id);
                      resolve();
                    }),
                  onRowDelete: oldData =>
                    new Promise(resolve => {
                      this.props.deleteOrder(oldData._id);
                      resolve();
                    })
                }}
              />
            )}
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // debugger;
  return {
    orders: state.orderInfo.orders
  };
};

export default connect(
  mapStateToProps,
  {
    getOrders,
    deleteOrder,
    updateOrder
  }
)(Orders);
