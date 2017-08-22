import PropTypes from 'prop-types'

export const providerPropType = PropTypes.shape({
  // who is the customer?
  identify: PropTypes.func.isRequired,
  // what are they doing?
  track: PropTypes.func.isRequired,
  // what web page are they on?
  page: PropTypes.func.isRequired,
  // what app screen are they on?
  screen: PropTypes.func,
  // what account or organization are they part of?
  group: PropTypes.func.isRequired,
  // what was their past identity?
  alias: PropTypes.func.isRequired,
})

export default providerPropType
