import React from "react";
import { Form, Input, Button, Checkbox } from "semantic-ui-react";

function SignupForm() {
  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Field
          id="form-input-control-first-name"
          control={Input}
          label="Имя"
        />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Фамилия"
        />
      </Form.Group>

      <Form.Field
        id="form-input-control-error-email"
        control={Input}
        label="Пароль"
        placeholder="example@example.com"
      />
      <Form.Field
        id="form-input-control-password"
        control={Input}
        label="Пароль"
        type="password"
      />
      <Form.Field
        control={Checkbox}
        label={{ children: "Я согласен с политикой конфиденциальности" }}
      />
      <Button content="Зарегистрироваться" color="green" />
    </Form>
  );
}

export default SignupForm;
