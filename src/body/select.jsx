import React, { Component } from "react";
import { Row, Input } from "react-materialize";

import "./../JqueryFiles/select";

export default class Body extends Component {
  render() {
    return (
      <div className="busca">
        <Row>
          <Input
            s={6}
            type="select"
            label="Op��o"
            icon="weekend"
            defaultValue="2"
          >
            <option value="1">Option 1</option>
          </Input>
        </Row>
      </div>
    );
  }
}
