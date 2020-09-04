import React, { PureComponent } from "react";
import { AttachFile, SearchOutlined, MoreVert, InsertEmoticon } from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";
import "./Chat.css"

export class Chat extends PureComponent {
  render() {
    return (
      <div className="chat">
        <div className="chat__header">
          <Avatar />
          <div className="chat__headerInfo">
            <h3> Romm name</h3>
            <p>last seen at ...</p>
          </div>
          <div className="chat__headerRight">
            <IconButton>
              <SearchOutlined />
            </IconButton>
            <IconButton>
              <AttachFile />
            </IconButton>
            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
        </div>
        <div>
          <div className="chat__body">
            <p className="chat__message">
              <span className="chat__name">Gaurav</span>
              This is a message
              <span className="chat__timestamp">
                {new Date().toUTCString()}
              </span>
            </p>

            <p className="chat__message chat__reciever">
              <span className="chat__name">Gaurav</span>
              This is a message
              <span className="chat__timestamp">
                {new Date().toUTCString()}
              </span>
            </p>

            <p className="chat__message ">
              <span className="chat__name">Gaurav</span>
              This is a message
              <span className="chat__timestamp">
                {new Date().toUTCString()}
              </span>
            </p>
          </div>

          <div className="chat__footer">
              <InsertEmoticon/>
              <form>
                  <input placeholder="Type a message" type="text"/>
                  <button type="submit">Send a message</button>
              </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
