import React, { Component } from "react";
import { Row, Input, Icon, Navbar, NavItem } from "react-materialize";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h2> Titulo </h2>
        {/* <div className="col l3 m3 s3 x">
          <Row>
            <a href="">
              <img
                className="imagem"
                height="100"
                src="http://assets.izap.com.br/clubehd.hojeemdia.com.br/uploads/tema/plusfiles/Logotipo_Clube_HD.png"
                alt="Stratum SeguranÃ?Â§a"
              />
            </a>
          </Row>
          <Row>
            <Input s={10} label="Pesquisar" validate>
              <Icon>search</Icon>
            </Input>
          </Row>
          <Row>
              <a className="" href="o-clube">O clube</a>
          </Row>
        </div> */}
      <Navbar brand="logo"   right>
      <NavItem href="o-clube" left>  <a className="" href="o-clube">O clube</a> </NavItem>
      <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
      <NavItem href='components.html'>Components</NavItem>
    </Navbar>
      </div>
    );
  }
}
