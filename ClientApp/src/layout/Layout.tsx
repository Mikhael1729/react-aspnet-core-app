import React, { Component } from 'react';
import { NavMenu } from './NavMenu';
import { CssBaseline, Container, Box } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"

interface ILayoutProps {
  children: any;
}

export class Layout extends Component<ILayoutProps, any> {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <Box borderBottom={1} color={grey[800]} mb={5}>
          <NavMenu />
        </Box>

        {/* Container */}
        <CssBaseline />
        <Container maxWidth="lg">{this.props.children}</Container>
      </div>
    );
  }
}
