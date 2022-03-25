import React from 'react';
import {Component} from 'react';
import { Navbar,NavbarText, NavItem, NavLink, NavbarBrand, DropdownToggle, DropdownItem, Nav, Collapse,DropdownMenu, UncontrolledDropdown,
  InputGroup,InputGroupText,Input,NavbarToggler} from 'reactstrap';

{/**Navigation bar section working with screen responsiveness */}
  export default class Navigation extends Component {
    constructor(props){
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }

    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

  render() {
    return (
      <div>
       <Navbar color="light" expand="md" fixed="top" light>
          <NavbarBrand href="/">Kira</NavbarBrand>
           <NavbarToggler onClick={this.toggle} /> 
          <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="/components/">About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Contact</NavLink>
          </NavItem>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>Categories</DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>Female Nightwear</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Male Nightwear</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Robes</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <NavbarText>
        <InputGroup>
        <Input placeholder="search item" />
        <InputGroupText href="">
          <i className="bi-search" style={{'fontSize': '0.8rem', 'color': 'cornflowerblue'}}></i>
          </InputGroupText>
        </InputGroup>
        </NavbarText>
      </Collapse>
    </Navbar>
  </div>
    )
  }
}