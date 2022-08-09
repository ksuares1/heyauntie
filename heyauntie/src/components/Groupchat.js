import React from "react";
import { Navigate } from "react-router-dom";
import chat from "../components/Chat";
import config from "../components/config";

class Groupchat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      receiverID: "",
      messageText: null,
      groupMessage: [],
      user: {},
      isAuthenticated: true
    };

    this.GUID = config.GUID;
  }

  sendMessage = () => {
    console.log('guid==>>', this.GUID, 'ggggg==>>', this.state.messageText);
    chat.sendGroupMessage(this.GUID, this.state.messageText).then(
      message => {
        console.log('msgg==>>', message);
        console.log("Message sent successfully:", message);
        this.setState({ messageText: null });
      },
      error => {
        console.log('errseee==>>', error);
        /*if (error.code === "ERR_NOT_A_MEMBER") {
          chat.joinGroup(this.GUID).then(response => {
            this.sendMessage();
          });
        }*/
      }
    ).catch(errr => {
      console.log('errseee in cacth==>>', errr);
    });
  };

  scrollToBottom = () => {
    const chat = document.getElementById("chatList");
    chat.scrollTop = chat.scrollHeight;
  };

  handleSubmit = event => {
    event.preventDefault();
    this.sendMessage();
    event.target.reset();
  };

  handleChange = event => {
    this.setState({ messageText: event.target.value });
  };

  getUser = () => {
    chat
    .init().then(hey => {
      console.log('heyyy==>>', hey);
      chat.getLoggedinUser()
      .then(user => {
        console.log("user details:", { user:"auntee" });
        this.setState({ user });
      })
      .catch(({ error }) => {
        if (error.code === "USER_NOT_LOGED_IN") {
          this.setState({
            isAuthenticated: false
          });
        }
      });      
    }).catch(err => {
      console.log('dhjdkshsj==>>', err);
    });
  };

  messageListener = () => {
    chat.addMessageListener((data, error) => {
      if (error) return console.log(`error: ${error}`);
      this.setState(
        prevState => ({
          groupMessage: [...prevState.groupMessage, data]
        }),
        () => {
          this.scrollToBottom();
        }
      );
    });
  };

  componentDidMount() {
    this.getUser();
    //this.messageListener();
    //chat.joinGroup(this.GUID)
  }

  render() {
    const { isAuthenticated } = this.state;
    if (!isAuthenticated) {
      return <Navigate to="/" />;
    }
    return (
      <div className="chatWindow">
        <ul className="chat" id="chatList">
          {this.state.groupMessage.map(data => (
            <div key={data.id}>
              {this.state.user.uid === data.sender.uid ? (
                <li className="self">
                  <div className="msg">
                    <p>{data.sender.uid}</p>
                    <div className="message"> {data.data.text}</div>
                  </div>
                </li>
              ) : (
                <li className="other">
                  <div className="msg">
                    <p>{data.sender.uid}</p>
                    <div className="message"> {data.data.text} </div>
                  </div>
                </li>
              )}
            </div>
          ))}
        </ul>
        <div className="chatInputWrapper">
          <form onSubmit={this.handleSubmit}>
            <input
              className="textarea input"
              type="text"
              placeholder="Enter your message..."
              onChange={this.handleChange}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Groupchat;