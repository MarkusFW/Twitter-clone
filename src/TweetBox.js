import React, { useState } from "react";
import "./TweetBox.css";
import db from "./firebase";
import { Avatar, Button } from "@mui/material";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Markus Furnes-Wilkens",
      username: "markusfw02",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://lh3.googleusercontent.com/ogw/AOh-ky3crYIxo3Pie4iIIWPUWsSivDoOp4Gg5r9oM5nelw=s32-c-mo",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://lh3.googleusercontent.com/ogw/AOh-ky3crYIxo3Pie4iIIWPUWsSivDoOp4Gg5r9oM5nelw=s32-c-mo" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
