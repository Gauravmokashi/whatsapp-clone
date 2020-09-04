import React, { PureComponent } from "react";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import SidebarChat from "./SidebarChat";
import "./sidebar.css"

export class Sidebar extends PureComponent {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar__header">
          <Avatar src="https://lh3.googleusercontent.com/a-/AOh14GhD2XR2uluGXhpe6BaMInlBH0lD9drYPhBDh3kXY5E=s88-c-k-c0x00ffffff-no-rj-mo" />
          <div className="sidebar__headerRight">
            <IconButton>
              <DonutLargeIcon />
            </IconButton>
            <IconButton>
              <ChatIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>

        <div className="sidebar__search">
          <div className="sidebar_searchContainer">
            <SearchOutlined />
            <input placeholder="Search or start new chat" type="text" />
          </div>
        </div>
        <div className="sidebar__chats">
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
        </div>
      </div>
    );
  }
}

export default Sidebar;
