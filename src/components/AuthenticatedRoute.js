import { Navigate } from "react-router-dom";
import {connect} from "react-redux";

const AuthenticatedRoute = ({authedUser, children}) => {
  return authedUser ? children : <Navigate to={`/login`}/>;
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser: !!authedUser,
});

export default connect(mapStateToProps)(AuthenticatedRoute);
