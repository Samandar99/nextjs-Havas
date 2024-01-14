import React from 'react'

function LoadingIndicator() {
  return (
    <div>
      Loading...
      <section className='section'>
        <div className='dots'>
          <span style="--i:1"></span>
          <span style="--i:2"></span>
        </div>
      </section>

    </div>
  )
}

export default LoadingIndicator
