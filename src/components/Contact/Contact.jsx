// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function Contact() {
  const [state, handleSubmit] = useForm("moqzeazw");
  if (state.succeeded) {
    return <p className="tarjeta-p">Mensaje enviado!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Ingrese su nombre</label>
      <input id="name" type="text" name="name" />
      <label htmlFor="email">Ingrese su email</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" cols="30" rows="10" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button className="btn" type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export { Contact };
