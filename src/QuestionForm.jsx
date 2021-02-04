import React from "react";
import { reduxForm } from "redux-form";

function QForm({ handleSubmit, onSubmit }) {
  return <form onSubmit={handleSubmit(onSubmit)}>FORM</form>;
}

export const QuestionForm = reduxForm({ form: "QForm" })(QForm);
