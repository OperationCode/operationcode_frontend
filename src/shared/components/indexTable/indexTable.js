import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'shared/components/heading/heading';
import ReactTable from 'react-table';

const IndexTable = props => (
  <div style={{ width: '100%' }}>
    <Heading
      text={props.heading}
      style={{ margin: '4rem auto', lineHeight: 0 }}
    />
    <ReactTable
      data={props.data}
      columns={props.columns}
      getTdProps={props.onRowClick}
      minWidth={1000}
    />
  </div>
);

IndexTable.defaultProps = {
  onRowClick: () => {}
};
IndexTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  heading: PropTypes.string.isRequired,
  onRowClick: PropTypes.func
};

export default IndexTable;
