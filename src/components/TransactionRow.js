import React from "react";
import PropTypes from "prop-types";

function TransactionRow(props) {
  return (
    <tr>
      <td>{props.order.id}</td>
      <td>{props.order.orderDate}</td>
      <td>{props.order.orderTime}</td>
      <td>{props.order.amount}</td>
    </tr>
  );
}

TransactionRow.propTypes = {
  order: PropTypes.object.isRequired,
};
export default TransactionRow;
