/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from "react";
import MaterialTable from "material-table";
// core components
import GridItem from "../../../Components/Grid/GridItem.js";
import GridContainer from "../../../Components/Grid/GridContainer.js";

import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory
} from "../../../redux/categories/categoryActions";
import { connect } from "react-redux";

class Categories extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getCategories();
  }

  static getDerivedStateFromProps(props, state) {
    return {
      columns: [
        { title: "Name", field: "name" },
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
          render: rowData => {
            return (
              <img
                src={`../collectionImages/${rowData.file}`}
                style={{ width: 80 }}
                alt="category"
              />
            );
          }
        }
      ],
      data: props.categories.categories
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
                title="All Categories"
                columns={state.columns}
                data={state.data}
                editable={{
                  onRowAdd: newData =>
                    new Promise(resolve => {
                      const myData = new FormData();
                      myData.append("name", newData.name);
                      myData.append("file", newData.file);
                      this.props.createCategory(myData);
                      resolve();
                    }),
                  onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                      const myData = new FormData();
                      myData.append("name", newData.name);
                      myData.append("file", newData.file);
                      this.props.updateCategory(myData, oldData._id);
                      resolve();
                    }),
                  onRowDelete: oldData =>
                    new Promise(resolve => {
                      this.props.deleteCategory(oldData._id);
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
    categories: state.categories
  };
};

export default connect(
  mapStateToProps,
  { getCategories, createCategory, deleteCategory, updateCategory }
)(Categories);
