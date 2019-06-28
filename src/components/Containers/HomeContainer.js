import { connect } from 'react-redux';
import Home from '../Home';
import { signUp } from '../../redux/ActionCreators/Auth'

const HomeContainer = connect(
  null,
  { signUp }
)(Home);

export default HomeContainer;

