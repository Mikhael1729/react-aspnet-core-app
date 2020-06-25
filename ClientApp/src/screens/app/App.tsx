import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from '../../layout/Layout';
import { Home } from '../home/Home';
import { FetchData } from '../fetch-data/FetchData';
import { Counter } from '../counter/Counter';
import { ReportCharts } from "../report-charts/report-charts"
import { AddTreatment } from "../add-treatment/add-treatment";

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={Counter} />
        <Route path="/fetch-data" component={FetchData} />
        <Route path="/charts" component={ReportCharts} />
        <Route path="/add-treatment" component={AddTreatment} />
      </Layout>
    );
  }
}
