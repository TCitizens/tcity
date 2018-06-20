import { connect } from 'react-redux';
import Home from './home';
import { updateModalMapState, updateModalThreadState } from '../../actions/modalActions';

const mapStateToProps = () => {
};

const mapDispatchToProps = (dispatch) => {
  return ({
    updateModalMapState: (modalState) => dispatch(updateModalMapState(modalState)),
    updateModalThreadState: (modalState) => dispatch(updateModalThreadState(modalState))
  })
}

export default connect(null, mapDispatchToProps)(Home);