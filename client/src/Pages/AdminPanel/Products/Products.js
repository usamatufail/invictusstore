/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from "react";
import MaterialTable from "material-table";
// core components
import GridItem from "../../../Components/Grid/GridItem.js";
import GridContainer from "../../../Components/Grid/GridContainer.js";

import { getCategories } from "../../../redux/categories/categoryActions";
import { connect } from "react-redux";

import {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct
} from "../../../redux/products/productActions";

class Products extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getProducts();
    this.props.getCategories();
  }

  static getDerivedStateFromProps(props, state) {
    const categoryArray = props.categories.categories.map(category => {
      var id = category._id;
      var returnObject = {};
      returnObject[id] = category.name;
      return returnObject;
    });
    const categoryObject = Object.assign({}, ...categoryArray);

    if (categoryObject) {
      return {
        columns: [
          { title: "Title", field: "title" },
          { title: "Description", field: "description" },
          {
            title: "Preview",
            field: "file",
            editComponent: props => (
              <input
                type="file"
                name="file"
                onChange={e => {
                  return props.onChange(e.target.files[0]);
                }}
              />
            ),
            render: rowData => (
              <img
                src={`../itemImages/${rowData.file}`}
                style={{ width: 80 }}
                alt="category"
              />
            )
          },
          { title: "Price", field: "price" },
          { title: "Vendor", field: "vendor" },
          { title: "Quantity", field: "quantity" },
          { title: "Discount", field: "discountPercentage" },
          {
            title: "Category",
            field: "category",
            lookup: categoryObject
          }
        ],
        data: props.product.products
      };
    }
  }

  render() {
    const state = this.state;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12}>
            {Object.keys(state.columns[7].lookup).length !== 0 && (
              <MaterialTable
                title="All Products"
                columns={state.columns}
                data={state.data}
                editable={{
                  onRowAdd: newData =>
                    new Promise(resolve => {
                      const myData = new FormData();
                      myData.append("title", newData.title);
                      myData.append("description", newData.description);
                      myData.append("vendor", newData.vendor);
                      myData.append("price", newData.price);
                      myData.append("quantity", newData.quantity);
                      myData.append(
                        "discountPercentage",
                        newData.discountPercentage
                      );
                      myData.append("category", newData.category);
                      myData.append("file", newData.file);
                      this.props.createProduct(myData);
                      resolve();
                    }),
                  onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                      const myData = new FormData();
                      myData.append("title", newData.title);
                      myData.append("description", newData.description);
                      myData.append("vendor", newData.vendor);
                      myData.append("price", newData.price);
                      myData.append("quantity", newData.quantity);
                      myData.append(
                        "discountPercentage",
                        newData.discountPercentage
                      );
                      myData.append("category", newData.category);
                      myData.append("file", newData.file);
                      this.props.updateProduct(myData, oldData._id);
                      resolve();
                    }),
                  onRowDelete: oldData =>
                    new Promise(resolve => {
                      this.props.deleteProduct(oldData._id);
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
    categories: state.categories,
    product: state.product
  };
};

export default connect(
  mapStateToProps,
  { getProducts, getCategories, createProduct, deleteProduct, updateProduct }
)(Products);
