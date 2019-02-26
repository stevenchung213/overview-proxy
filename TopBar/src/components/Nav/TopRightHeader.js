import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Button,
} from 'react-bootstrap'
import LangSelector from './LangSelector.js'
import Form from "./TopNav";
const TopRightHeader = () => (
  <div id='top-right-header' >
    <LangSelector/>
    <Nav>
      <NavItem>Trip Boards</NavItem>
      <NavDropdown title="Login" id="Login">
        <MenuItem>Traveler Login</MenuItem>
        <MenuItem>Owner Login</MenuItem>
      </NavDropdown>
      <NavDropdown title="Help" id="Help">
        <MenuItem>Vist help center</MenuItem>
        <MenuItem divider />
        <MenuItem>Travelers</MenuItem>
        <MenuItem>How it works</MenuItem>
        <MenuItem>Security Center</MenuItem>
        <MenuItem divider />
        <MenuItem>Homeowners</MenuItem>
        <MenuItem>How it works</MenuItem>
        <MenuItem>List your property</MenuItem>
        <MenuItem>Community</MenuItem>
        <MenuItem>Discovery Hub</MenuItem>
        <MenuItem divider />
        <MenuItem>Property managers</MenuItem>
        <MenuItem>List your properties</MenuItem>
      </NavDropdown>
    </Nav>
    <Button id="list-your-prop-button" bsSize="large">List your property</Button>
    <div id="birdhouse-logo">
      <img alt="HomeAway birdhouse"
           src="http://csvcus.homeaway.com/rsrcs/cdn-logos/2.11.0/bce/moniker/homeaway_us/birdhouse-bceheader.svg"
      />
    </div>

  </div>
  );

export default TopRightHeader;
