import React from 'react';

const Rainbow = (WrappedComponent) => {
  const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'pink'];
  const randomColours = colours[Math.floor(Math.random() * 5)]
  const className = randomColours + '-text';

  return (props)=> (
    <div className={className}>
      <WrappedComponent {...props}/>
    </div>
  )
}

export default Rainbow;