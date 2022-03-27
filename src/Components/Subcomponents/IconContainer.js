import React from 'react'

function IconContainer(props) {
  return (
    <div
      className="icon-container cursor-pointer w-12 mt-10"
    >
      <i className='h-full align-middle text-lg'>{props.children}</i>
    </div>
  )
}

export default IconContainer