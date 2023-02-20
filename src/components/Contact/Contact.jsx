import "./Contact.css";
// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function Contact() {
  const [state, handleSubmit] = useForm("moqzeazw");
  if (state.succeeded) {
    return <p className="titulo">Mensaje enviado!</p>;
  }
  return (
    <section className="contact">
      {" "}
      <p className="subtitulo">Tenés un proyecto en mente?</p>
      <h1 className="titulo">Contactame</h1>
      <form onSubmit={handleSubmit} id="contacto">
        <label htmlFor="name">Ingrese su nombre</label>
        <input id="name" type="text" name="name" placeholder="Nombre" />
        <label htmlFor="email">Ingrese su email</label>
        <input id="email" type="email" name="email" placeholder="Email" />
        <label htmlFor="subject">Ingrese su asunto</label>
        <input id="subject" type="text" name="subject" placeholder="Asunto" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          id="message"
          name="message"
          cols="30"
          rows="10"
          resize="none"
          placeholder="Mensaje"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button className="btn" type="submit" disabled={state.submitting}>
          Enviar
        </button>
      </form>
    </section>
  );
}

export { Contact };
