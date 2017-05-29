import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import FinancialReport from './financialReport';

class FinancialStatements extends Component {

  render() {
    return (
      <Section title="Financial Statements" theme="gray">
        <FinancialReport name="Sample Report 1" url="#" />
        <FinancialReport name="Sample Report 2" url="#" />
        <FinancialReport name="Sample Report 3" url="#" />
      </Section>
    );
  }
}

export default FinancialStatements;
