import React, { Component } from 'react';
import { NavMenu } from './NavMenu';
import { CssBaseline, Typography, Container, Button } from "@material-ui/core"

interface ILayoutProps {
  children: any;
}

export class Layout extends Component<ILayoutProps, any> {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavMenu />

        {/* Container */}
        <CssBaseline />
        <Container maxWidth="lg">
          {this.props.children}
        </Container>

        <Container>
        </Container>
      </div>
    );
  }
}
