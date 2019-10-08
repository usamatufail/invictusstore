import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Accessibility from "@material-ui/icons/Accessibility";
import Done from '@material-ui/icons/CheckCircleOutline';
import Pending from '@material-ui/icons/Sync';
import Cancel from '@material-ui/icons/Cancel';
// core components
import GridItem from "../../layout/Grid/GridItem.js";
import GridContainer from "../../layout/Grid/GridContainer.js";
import Table from "../../layout/Table/Table.js";
import Tasks from "../../layout/Tasks/Tasks.js";
import CustomTabs from "../../layout/CustomTabs/CustomTabs.js";
import Danger from "../../layout/Typography/Danger.js";
import Card from "../../layout/Card/Card.js";
import CardHeader from "../../layout/Card/CardHeader.js";
import CardIcon from "../../layout/Card/CardIcon.js";
import CardBody from "../../layout/Card/CardBody.js";
import CardFooter from "../../layout/Card/CardFooter.js";

import { ordersCompleted, ordersPending, ordersRejected } from "../../variables/general";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "../../variables/charts.js";

import styles from "../../../Assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      {/* dashboard header section */}
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Toda`s Total Sale</p>
              <h3 className={classes.cardTitle}>
                0.00 <small>RS</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  Get more space
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Total Products</p>
              <h3 className={classes.cardTitle}>20</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 24 Hours
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>assignment</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Today`s Orders</p>
              <h3 className={classes.cardTitle}>15</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                Tracked from Github
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <ShoppingCart />
              </CardIcon>
              <p className={classes.cardCategory}>Total Orders</p>
              <h3 className={classes.cardTitle}>245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>

{/* chart section */}
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Daily Sales</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in today sales.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Email Subscriptions</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="danger">
              <ChartistGraph
                className="ct-chart"
                data={completedTasksChart.data}
                type="Line"
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Completed Tasks</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="Orders:"
            headerColor="primary"
            tabs={[
              {
                tabName: "Completed",
                tabIcon: Done,
                tabContent: (
                  <Tasks
                    // checkedIndexes={[0, 3]}
                    tasksIndexes={[0, 1, 2, 3]}
                    tasks={ordersCompleted}
                  />
                )
              },
              {
                tabName: "Pending",
                tabIcon: Pending,
                tabContent: (
                  <Tasks
                    // checkedIndexes={[0]}
                    tasksIndexes={[0, 1]}
                    tasks={ordersPending}
                  />
                )
              },
              {
                tabName: "Rejected",
                tabIcon: Cancel,
                tabContent: (
                  <Tasks
                    // checkedIndexes={[1]}
                    tasksIndexes={[0, 1, 2]}
                    tasks={ordersRejected}
                  />
                )
              }
            ]}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
