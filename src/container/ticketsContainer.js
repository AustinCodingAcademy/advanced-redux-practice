import { connect } from 'react-redux';
import Tickets from '../components/Tickets';

const mapStateToProps = function (state) {
    return {
      tickets: state.tickets
    };
  };
// export default (Tickets);
export default connect(mapStateToProps)(Tickets);  