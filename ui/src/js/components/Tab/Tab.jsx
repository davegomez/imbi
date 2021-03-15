import { NavLink, useRouteMatch } from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react'

const active =
  'text-gray-900 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10'
const inactive =
  'text-gray-500 hover:text-gray-700 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10'

const spanActive = 'bg-blue-500 absolute inset-x-0 bottom-0 h-0.5'
const spanInactive = 'bg-transparent absolute inset-x-0 bottom-0 h-0.5'

const first = 'rounded-l-lg'
const last = 'rounded-r-lg'

function Tab({ to, disabled, isFirst, isLast, children }) {
  let match = useRouteMatch({
    path: to,
    exact: true
  })
  if (disabled)
    return (
      <div
        className={`cursor-not-allowed ${match ? active : inactive} ${
          isFirst ? first : ''
        } ${isLast ? last : ''}`}
        title="Not Implemented">
        {children}
      </div>
    )
  return (
    <NavLink
      className={`${match ? active : inactive} ${isFirst ? first : ''} ${
        isLast ? last : ''
      }`}
      to={to}>
      {children}
      <span aria-hidden="true" className={match ? spanActive : spanInactive} />
    </NavLink>
  )
}
Tab.defaultProps = {
  disabled: false,
  isFirst: false,
  isLast: false
}
Tab.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool,
  to: PropTypes.string.isRequired
}
export { Tab }
