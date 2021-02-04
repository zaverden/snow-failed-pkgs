import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { QuestionForm } from "./QuestionForm";

const store = createStore((s) => s);

export function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Let it snow</h1>
        <QuestionForm />
      </div>
    </Provider>
  );
}
