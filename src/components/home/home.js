import React from 'react';
import ReactModal from 'react-modal';
import { StyleSheet, css } from 'aphrodite';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }

  handleOpenModal = (e) => {
    e.preventDefault();
    this.setState({
      showModal: true
    })
  }

  handleCloseModal = (e) => {
    e.preventDefault();
    this.setState({
      showModal: false
    })
  }

  renderModalContent = () => {
    const { isLoginScreen } = this.state;
    if (isLoginScreen) return <LoginFormContainer />;
    if (isSignupScreen) return <SignupFormContainer />;
    if (isForgotPasswordScreen) return <ForgotPasswordFormContainer />;
  }

  render() {
    const { showModal } = this.state;

    return (
      <div>
        <ReactModal
          isOpen={showModal}
          onRequestClose={this.handleCloseModal}
          shouldFocusAfterRender={true}
          contentLabel="Login"
          style={this.formatModalStyle()}
        >
          <div className={css(styles.modal)}>
            <div>
              <span className={css(styles.button)} onClick={this.handleCloseModal}>X</span>
              <Thread />
            </div>
            <div className={css(styles.modalRenderTextContainer)}>
              <div className={css(styles.modalRenderText)}>
              </div>
            </div>
          </div>
        </ReactModal>
        <h1> Home </h1>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    color: '#01b4c0',
    right: '0',
    cursor: 'pointer',
    ':hover': {
      color: '#10a1ab'
    },
    float: 'right',
    fontSize: '14px'
  },
  modalRenderTextContainer: {
    width: '65%',
    margin: '0 auto'
  },
  modalRenderText: {
    position: 'relative',
    marginTop: '10%',
    textAlign: 'center',
    fontSize: '14px'
  },
  modal: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%'
  }
})

export default Home;