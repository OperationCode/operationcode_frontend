import React, { Component } from 'react';
import { SQUAD_COLUMNS } from 'shared/constants/table';
import { getSquads, makeGenericFetch } from 'shared/utils/apiHelper';
import IndexTable from 'shared/components/indexTable/indexTable';
import SquadsModal from './squadsModal';

class SquadsTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSquad: null,
      squads: []
    };
  }

  componentWillMount() {
    makeGenericFetch('squads').then(squads =>
      this.setState({ squads })
    );
  }
  componentDidMount() {
    this.fetchSquads();
  }

  handleModalClose = () => this.setState({ activeSquad: null });

  handleFormUpdate = () => this.fetchSquads();

  fetchSquads = () => {
    getSquads()
      .then((squads) => {
        this.setState({ squads });
      }).catch(this.setAuthFetchError);
  }

  rowClickHandler = (squad) => {
    const activeSquad = this.state.squads.find(x => x.id === squad.id);
    this.setState({ activeSquad });
  }

  render() {
    const { activeSquad } = this.state;
    return (
      <div style={{ width: '100%' }} >
        <IndexTable
          heading="Squads"
          columns={SQUAD_COLUMNS}
          onRowClick={this.rowClickHandler}
          fetchRecords={getSquads}
        />
        {!!activeSquad && <SquadsModal
          squad={activeSquad}
          isOpen={!!activeSquad}
          onRequestClose={this.handleModalClose}
          handleFormUpdate={this.handleFormUpdate}
        />}
      </div>
    );
  }
}

export default SquadsTable;
