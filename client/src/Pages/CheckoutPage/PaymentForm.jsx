/* eslint-disable react/prop-types */
import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

export default function PaymentForm(props) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <RadioGroup
            aria-label="paymenMethod"
            name="paymentMethod"
            value={props.address.paymentMethod}
            onChange={props.handleAddressChange("paymentMethod")}
          >
            <FormControlLabel
              value="cash on delivery"
              control={<Radio color="primary" />}
              label="Cash on Delivery"
            />
            <FormControlLabel
              value="visa"
              control={<Radio color="primary" />}
              label="Visa"
            />
            <FormControlLabel
              value="jazz cash"
              control={<Radio color="primary" />}
              label="Jazz Cash"
            />
          </RadioGroup>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
