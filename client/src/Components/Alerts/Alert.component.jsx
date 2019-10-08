import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";

const Alert = ({ alerts }) => {
  alerts !== null &&
    alerts.length > 0 &&
    alerts.map(alert => {
      if (alert.alertType === "danger") {
        toast.error(alert.msg);
        return true;
      } else if (alert.alertType === "success") {
        toast.success(alert.msg);
        return true;
      } else {
        toast.warning(alert.msg);
        return true;
      }
    });

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnVisibilityChange={false}
        draggable={false}
        pauseOnHover={false}
      />
    </div>
  );
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};
const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(
  mapStateToProps,
  null
)(Alert);
