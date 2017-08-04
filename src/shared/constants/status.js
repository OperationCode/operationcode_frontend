const REQUEST_STATUSES = [
  {
    value: 'Unassigned',
    label: 'Unassigned'
  },
  {
    value: 'Assigned',
    label: 'Assigned'
  },
  {
    value: 'Contacted',
    label: 'Contacted'
  },
  {
    value: 'Awaiting Response',
    label: 'Awaiting Response'
  },
  {
    value: 'Scheduled',
    label: 'Scheduled'
  },
  {
    value: 'Completed',
    label: 'Completed'
  }
];

export const MENTOR_ANSWERS = [
  {
    value: true,
    label: 'Yes'
  },
  {
    value: false,
    label: 'No'
  }
];

export const IDENTIFIERS = [
  {
    value: 'civ',
    label: 'Volunteer'
  },
  {
    value: 'mil',
    label: 'Mil / Vet / Spouse'
  }
];

export const WORKINFO = [
  {
    value: 'fulltime',
    label: 'Employed Full-Time'
  },
  {
    value: 'parttime',
    label: 'Employed Part-Time'
  },
  {
    value: 'unemployed',
    label: 'Currently Un-Employed'
  }
];

export const SCHOOLINFO = [
  {
    value: 'online',
    label: 'Self-Taught (MOOCS, Etc.)'
  },
  {
    value: 'bootcamp',
    label: 'Code Bootcamp'
  },
  {
    value: 'associates',
    label: '2 Year Degree'
  },
  {
    value: 'college',
    label: '4 Year Degree'
  },
  {
    value: 'postgrad',
    label: 'Post Graduate Studies'
  }
];

export default REQUEST_STATUSES;
