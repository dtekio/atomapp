import React from 'react'
import { Dropdown, Menu, Input, Button, Icon } from 'semantic-ui-react'
import UserForm from './forms/UserForm'

const MenuExampleAttached = () => (
  <div>
    <Menu className='navbar' attached='top'>
      <Dropdown item icon='sidebar' simple>
        <Dropdown.Menu>
          <Dropdown.Header>Справка</Dropdown.Header>
          <Dropdown.Item>О нас</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Menu.Item header><img alt="logo" src='/images/logo.png' /> Atom App</Menu.Item>
      <Menu.Item>
      <Input className='icon' icon='search' placeholder='Поиск...' />
    </Menu.Item>

      <Menu.Menu position='right'>
      <Menu.Item>+7 (701) 072 02-17</Menu.Item>
      <Menu.Item><UserForm/></Menu.Item>
      </Menu.Menu>
    </Menu>

  </div>
)

export default MenuExampleAttached