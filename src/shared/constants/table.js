export const MENTOR_REQUEST_COLUMNS = [{
  id: 'slackName',
  Header: 'Slack User',
  accessor: d => d.user.slack_name,
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
  id: 'mentorSlackName',
  Header: 'Mentor Requested',
  accessor: d => d.requested_mentor.slack_name,
  minWidth: 100
}, {
  Header: 'Additional Details',
  minWidth: 300,
  accessor: 'details'
}, {
  Header: 'Current Status',
  minWidth: 300,
  accessor: 'status'
}, {
  Header: 'Created At',
  accessor: 'created_at',
  minWidth: 200
}];

export const SQUAD_COLUMNS = [{
  Header: 'Name',
  accessor: 'name',
  minWidth: 75
},
{
  id: 'leader',
  Header: 'Leader',
  accessor: d => `${d.leader.first_name} ${d.leader.last_name}`,
  minWidth: 75
}, {
  id: 'mentors',
  Header: 'Mentors',
  accessor: d => d.mentors.map(mentor => `${mentor.first_name} ${mentor.last_name}`).join(', ')
}, {
  id: 'members',
  Header: 'Members',
  accessor: d => `${d.minimum}-${d.maximum}`,
  minWidth: 40
}, {
  Header: 'Skill Level',
  accessor: 'skill_level',
  minWidth: 50
}, {
  Header: 'Discription',
  accessor: 'description',
  minWidth: 200
}];

export const MENTOR_COLUMNS = [{
  Header: 'Last Name',
  accessor: 'last_name'
}, {
  Header: 'First Name',
  accessor: 'first_name'
}, {
  Header: 'Slack Name',
  accessor: 'slack_name'
}, {
  Header: 'Zip Code',
  accessor: 'zip'
}];

export const LED_SQUAD_COLUMNS = [{
  Header: 'Name',
  accessor: 'name',
  minWidth: 50
}, {
  id: 'members',
  Header: 'Members',
  accessor: d => `${d.minimum}-${d.maximum}`,
  minWidth: 40
}, {
  Header: 'Skill Level',
  accessor: 'skill_level',
  minWidth: 50
}, {
  Header: 'Discription',
  accessor: 'description'
}];
