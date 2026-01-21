import axios from "axios";
import React, { createContext, useReducer } from "react";

export const GameContext = createContext();

const initialState = {
  gameSelect: "start",
  questions: [],
  timeLeft: 10,
  ropePosition: 0,
  round: 1,
  score: {
    left: 0,
    right: 0,
  },
  index: {
    left: 0,
    right: 0,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "setQuestions":
      return {
        ...state,
        questions: action.payload,
      };

    case "nextQuestion":
      return {
        ...state,
        index: {
          left: Math.floor(Math.random() * state.questions.length),
          right: Math.floor(Math.random() * state.questions.length),
        },
        timeLeft: 10,
      };

    case "second":
      return {
        ...state,
        timeLeft: state.timeLeft - 1,
      };

    case "addScore":
      return {
        ...state,
        score: {
          ...state.score,
          [action.payload]: state.score[action.payload] + 1,
        },
        ropePosition:
          action.payload === "left"
            ? state.ropePosition - 1
            : state.ropePosition + 1,
      };

    case "resetGame":
      return {
        ...state,
        score: {
          left: 0,
          right: 0,
        },
        ropePosition: 0,
        timeLeft: 10,
        round: state.round + 1,
      };

    case "duoGame":
      return {
        ...state,
        gameSelect: "duo",
      };

    case "soloGame":
      return {
        ...state,
        gameSelect: "solo",
      };

    default:
      return state;
  }
}

export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function fetchQuestions() {
    axios
      axios.get("http://localhost:9000/questions")
      .then((res) => dispatch({ type: "setQuestions", payload: res.data }))
      .catch((err) => console.error(err));
  }

  return (
    <GameContext.Provider
      value={{
        ...state,
        dispatch,
        fetchQuestions,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
