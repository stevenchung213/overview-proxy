import React from 'react';
import { NavDropdown, MenuItem } from 'react-bootstrap';

class LangSelector extends React.Component {
  constructor() {
    super();

    this.state = {
      current: <a class="nav-link dropdown-toggle" id="current-lang"><span class="flag-icon flag-icon-us"></span> English</a>,
    };
  }

  render() {
    return(
      <div id='flag-icons-container'>
        {this.state.current}
        <NavDropdown>
          <MenuItem><span class="flag-icon flag-icon-us flag-icon-squared"></span> United States</MenuItem>
          <MenuItem><span class="flag-icon flag-icon-ar flag-icon-squared"></span> Argentina</MenuItem>
          <MenuItem><span class="flag-icon flag-icon-de flag-icon-squared"></span> Deutschland</MenuItem>
          <MenuItem><span class="flag-icon flag-icon-fr flag-icon-squared"></span> France</MenuItem>
          <MenuItem><span class="flag-icon flag-icon-cn flag-icon-squared"></span> 中国</MenuItem>
          <MenuItem><span class="flag-icon flag-icon-ca flag-icon-squared"></span> Canada</MenuItem>
        </NavDropdown>    
      </div>
    ) 
  }
  
};

export default LangSelector;
