import React, { Component } from "react";
import { Row, Input, Icon, Navbar, NavItem, Button } from "react-materialize";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar className="red" brand={<img className="logo" src="./root/images/Logotipo_Clube_HD.png" alt=""/>} right >
          <NavItem onClick={() => console.log('test click')}>O clube</NavItem>
          <NavItem href='components.html'>Parceiros</NavItem>
          <NavItem href='components.html'>Promoção</NavItem>
          <NavItem href='components.html'>Fale Conosco</NavItem>
        </Navbar>
        <Row className="busca">
          <Input s={8} label="Pesquisar" validate>
          <Icon>search</Icon>
          </Input>
          <Button waves='light' className="btnPesquisa">Pesquisar</Button>
        </Row>
      </div>
    );
  }
}
