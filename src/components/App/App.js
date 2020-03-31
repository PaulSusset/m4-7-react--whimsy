import React, { useReducer } from "react";
import styled from "styled-components";
import "focus-visible";
import { format } from "date-fns";
import avatar from "../../assets/carmen-sandiego.png";
import Tweet from "../Tweet";

const reducer = (state, action) => {
  switch (action.type) {
    case "toggle-like": {
      const wasLiked = state.isLiked;
      return {
        ...state,
        isLiked: !wasLiked,
        numOfLikes: wasLiked ? state.numOfLikes - 1 : state.numOfLikes + 1
      };
    }
    case "toggle-retweet": {
      const wasRetweeted = state.isRetweeted;
      return {
        ...state,
        isRetweeted: !wasRetweeted,
        numOfRetweets: wasRetweeted
          ? state.numOfRetweets - 1
          : state.numOfRetweets + 1
      };
    }
    default: {
      break;
    }
  }
};
const initialState = {
  numOfLikes: 100,
  numOfRetweets: 100,
  isLiked: false,
  isRetweeted: false
};

const date = format(new Date(), "h:mm A • MMM Do, YYYY");
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleLike = () => {
    dispatch({ type: "toggle-like" });
  };
  const toggleRetweet = () => {
    dispatch({ type: "toggle-retweet" });
  };
  return (
    <Wrapper>
      <Tweet
        tweetContents="Where in the world am I?"
        displayName="Carmen Sandiego ✨"
        username="carmen-sandiego"
        avatarSrc={avatar}
        timestamp={date}
        numOfRetweets={state.numOfRetweets}
        numOfLikes={state.numOfLikes}
        isLikedByCurrentUser={state.isLiked}
        isRetweetedByCurrentUser={state.isRetweeted}
        handleToggleLike={toggleLike}
        handleToggleRetweet={toggleRetweet}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #eee;
`;
export default App;
