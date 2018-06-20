import React from 'react';

class CommentForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      body: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = Object.assign({}, this.state, { thread_id: this.props.threadId, username: this.props.currentUser.username });
    this.props.makeComment(comment);
    this.setState({ body:"" });
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }


  render(){
    return (
      <div className='footer'>
        <div className='footer-comment'>
          <form onSubmit={this.handleSubmit}>
            <label className="label-comment">
              <input type="text"
                placeholder={"Comment"}
                value={this.state.body}
                className="comment-input"
                onChange={this.update('body')}
              />
            </label>
          </form>
        </div>
      </div>
    )
  }
}


export default (CommentForm);
