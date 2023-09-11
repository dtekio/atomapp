import React from "react";
import { Button, Form, Checkbox, Input, Icon, Divider } from "semantic-ui-react";

function LoginForm() {
  return (
    <Form>
      <Form.Field
        id="form-input-control-email"
        control={Input}
        label="Электронная почта"
        type="email"
      />
      <Form.Field
        id="form-input-control-password"
        control={Input}
        label="Пароль"
        type="password"
      />

      <Form.Field control={Checkbox} label={{ children: "Чужой компьютер" }} />
      <Button content="Войти" color="green" />
      <Divider horizontal>Или</Divider>
      <p>Войти с помощью социальных сетей</p>
      <div>
        <Button icon color="google plus">
          <Icon name="google" />
        </Button>
        <Button icon color='vk'>
          <Icon name="vk" />
        </Button>
        <Button icon color='facebook'>
          <Icon name="facebook f" />
        </Button>
        <Button icon color='apple'>
          <Icon name="apple" />
        </Button>
      </div>
      <br />
    </Form>
  );
}

export default LoginForm;
