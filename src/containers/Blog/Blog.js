import React, {Component} from 'react';
import MessageForm from "../../components/Messages/MessageForm/MessageForm";
import Summary from "../../components/Messages/Summary/Summary";
import {changeAuthor, changeMessage, createMessage, fetchMessages} from "../../store/actions/blogactions";
import {connect} from "react-redux";

class Blog extends Component {

  componentDidMount() {
    this.props.fetchMessages();
    this.interval = setInterval(this.props.fetchMessages, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  changeMessage = (message) => {
    this.props.changeMessage(message)
  };

  changeAuthor = (author) => {
    this.props.changeAuthor(author)
  };

  sendMessage = () => {
    this.props.createMessage(this.props.message)
  };

  stopFetching = () => {
    clearInterval(this.messagesFetchInterval);
  }

  render() {
    return (
      <div className="container container-fluid text-center">
        <MessageForm message={this.props.message.message}
              author={this.props.message.author}
              sendMessage={()=>this.sendMessage()}
              changeMessage={(e)=>this.changeMessage(e.target.value)}
              changeAuthor={(e)=>this.changeAuthor(e.target.value)}/>
        <Summary messages={this.props.messages}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    message: state.blog.message,
    messages: state.blog.messages
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeMessage: (message) => dispatch(changeMessage(message)),
    createMessage: (message) => dispatch(createMessage(message)),
    changeAuthor: (author) => dispatch(changeAuthor(author)),
    fetchMessages: () => dispatch(fetchMessages())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)