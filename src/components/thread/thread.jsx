import React from 'react';
import { connect } from 'react-redux';
import { createComment } from '../../actions/commentAction.js';
import { updateThread } from '../../actions/threadAction.js';


class Thread extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      thread: {
        heading: props.heading,
        description: props.description,
        votes: props.votes
      },
      editStatus: false
    };

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEditButton(action){
    return () => {
      if (action === 'edit') {
        this.setState({editStatus: true});
      } else {
        this.setState({editStatus: false});
      }
    };
  }

  handleChange(property){
    return (e) => {
      let thread = Object.assign({}, this.state.thread);
      let prty = property;
      thread[prty] = e.target.value;
      this.setState({thread, editStatus: false});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.updateThread(this.state);
  }

  threadDisplay(){
    let thread;
    if (this.state.editStatus === false) {
      thread = (
        <div className='thread-display'>
          <div className='thread-heading'>{this.state.thread.heading}</div>
          <div className='thread-description'>{this.state.thread.description}</div>
          <button className='thread-edit' onClick={this.handleEditButton('edit')}>Edit</button>
        </div>
      );
    } else {
      thread = (
        <form className='thread-edit-form' onSubmit={this.handleSubmit}>
          <input className='thread-edit-heading' type='text' onChange={this.handleChange('heading')} value={this.state.thread.heading} />
          <input className='thread-edit-description' type='text' onChange={this.handleChange('description')} value={this.state.thread.description} />
          <button className='thread-edit-cancel' onClick={this.handleEditButton('cancel')}>Cancel</button>
        </form>
      );
    }
    return thread;
  }

  render(){
    return (
      this.threadDisplay()

      commentForm
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    location: ownProps.location,
    heading: state[ownProps.location].heading,
    description: state[ownProps.location].description,
    votes: state[ownProps.location].vote
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createComment: (comment) => dispatch(createComment(comment))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Thread);
