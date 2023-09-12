import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

import "./styles.css";

function App() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "bill",
      lastName: "luo",
      email: "test@test.com",
      isDeveloper: true
    }
  });
  const onSubmit = data => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName">First Name</label>
      <input name="firstName" placeholder="bill" ref={register} />

      <label htmlFor="lastName">Last Name</label>
      <input name="lastName" placeholder="luo" ref={register} />

      <label htmlFor="email">Email</label>
      <input
        name="email"
        placeholder="bluebill1049@hotmail.com"
        type="email"
        ref={register}
      />

      <label>Is developer?</label>
      <input name="isDeveloper" type="checkbox" ref={register} />

      <input type="submit" />
    </form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
