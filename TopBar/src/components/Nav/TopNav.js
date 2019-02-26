import React from 'react'
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Button,
} from 'react-bootstrap'
import Form from './Form.js'
import TopRightHeader from './TopRightHeader.js'

export default class TopNav extends React.Component {
  render() {
    return (
      <div id="top-Nav">
        <div>
          <div className="top-header">
            <Navbar id='main-navbar' bg="light">
              <div id='main-logo-container'>
                <div id="su-casa">
                </div>
                <a href="/" id='main-logo'>
                <img
                id="top-header-logo-img"
                src="https://s3-us-west-1.amazonaws.com/fec-su-casa/logo.png"
                />
                </a>

              </div>
              <TopRightHeader/>
              <div id="input-forms">
                <Form id={'destination-search-input'}
                      secondId={'destination-form'} placeholder={'Where'}/>
                <Form placeholder={'Check In'}/>
                <Form placeholder={'Check Out'}/>
                <Button id="search-button" bsSize="large">
                  Search
                </Button>
              </div>
            </Navbar>

          </div>
        </div>
      </div>
    )
  }
}
