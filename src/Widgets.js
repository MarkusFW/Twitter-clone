import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import { Search } from "@mui/icons-material";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1591911708947537920"} />

        <TwitterTimelineEmbed
        className="testeeerrr"
          sourceType="profile"
          screenName="artindetails"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://github.com/MarkusFW"}
          options={{ text: "#reactjs is awesome", via: "markusfw02" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
