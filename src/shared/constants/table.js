const MENTOR_REQUEST_COLUMNS = [{
  id: 'slackName',
  Header: 'Slack User',
  accessor: d => d.requested_mentor.slack_name,
  minWidth: 100
}, {
  Header: 'Language',
  accessor: 'language',
  minWidth: 100
}, {
  id: 'service',
  Header: 'Service',
  accessor: d => d.service.name,
  minWidth: 100
}, {
  Header: 'Mentor Requested',
  accessor: 'mentor_requested',
  minWidth: 100
}, {
  Header: 'Additional Details',
  minWidth: 300,
  accessor: 'details'
}, {
  Header: 'Created At',
  accessor: 'created_at',
  minWidth: 200
}];

export default MENTOR_REQUEST_COLUMNS;
