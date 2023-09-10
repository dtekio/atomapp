import React from "react";
import { Button, Tab, Icon, Modal } from "semantic-ui-react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function UserForm() {
  const [open, setOpen] = React.useState(false);

  const panes = [
    {
      menuItem: "Войти",
      render: () => (
        <Tab.Pane>
          <LoginForm />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Зарегистрироваться",
      render: () => (
        <Tab.Pane>
          <SignupForm />
        </Tab.Pane>
      ),
    },
  ];

  return (
    <Modal
      closeIcon
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button color="blue">
          <Icon name="sign in" />
          Войти
        </Button>
      }
      style={{ top: "20%" }}
    >
      <Modal.Content>
        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
      </Modal.Content>
    </Modal>
  );
}

export default UserForm;
