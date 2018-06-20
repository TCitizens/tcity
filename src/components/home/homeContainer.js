import { connect } from 'react-redux';
import Home from './home';
import { updateModalMapState } from '../../actions/modalAction';

const mapStateToProps = () => {
};

const mapDispatchToProps = (dispatch) => {
  return ({
    updateModalMapState: (modalState) => dispatch(updateModalMapState(modalState))
  })
}

export default connect(null, mapDispatchToProps)(Home);