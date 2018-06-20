import React from 'react';
import ReactModal from 'react-modal';
import modalStyle from '../shared/modalStyle';
import { StyleSheet, css } from 'aphrodite';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      submitted: false,
      proposal: '',
      description: ''
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

  handleSubmit = (e) => {

  }

  handleInput = (field) => {
    return (e) => (
      this.setState({
        [field]: e.currentTarget.value
      })
    );
  }

  renderModalContent = () => {
    return (
      <div className={css(styles.formContainer)}>
        <div className={css(styles.title)}>Proposal</div>
        <div className={css(styles.subheading)}>
          We'll help you take a step forward.
        </div>
        <form className={css(styles.form)} onSubmit={this.handleSubmit}>
          <input
            required
            className={css(styles.formInput)}
            type='text'
            name='proposal'
            value={this.state.proposal}
            onChange={this.handleInput('proposal')}
            placeholder='Proposal'
          />
          <textarea
            required
            className={css(styles.formInput)}
            type='text'
            name='description'
            value={this.state.descriptionn}
            onChange={this.handleInput('description')}
            placeholder='Description'
          />
          <input disabled={this.state.submitted} className={css(styles.button)} type='submit' value='SUBMIT PROPOSAL' />
        </form>
      </div>
    )
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
          style={modalStyle}
        >
          <div className={css(styles.modal)}>
            <div>
              <span className={css(styles.button)} onClick={this.handleCloseModal}>X</span>
              { this.renderModalContent() }
            </div>
            <div className={css(styles.modalRenderTextContainer)}>
              <div className={css(styles.modalRenderText)}>
              </div>
            </div>
          </div>
        </ReactModal>
        <h1> Home </h1>
        <button onClick={this.handleOpenModal}>Trigger Modal</button>
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
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '65%',
    margin: '0 auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    justifyContent: 'space-between',
    width: '100%',
    boxSizing: 'border-box'
  },
  formInput: {
    marginTop: '15px',
    border: '1px solid #d9d9d9',
    padding: '8px 12px',
    lineHeight: '1.45',
    ':focus': {
      border: '1px solid #01b4c0',
      outline: 'none !important'
    }
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '65%',
    margin: '0 auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    justifyContent: 'space-between',
    width: '100%',
    boxSizing: 'border-box'
  },
  formInput: {
    marginTop: '15px',
    border: '1px solid #d9d9d9',
    padding: '8px 12px',
    lineHeight: '1.45',
    ':focus': {
      border: '1px solid #01b4c0',
      outline: 'none !important'
    }
  }
})

export default Home;