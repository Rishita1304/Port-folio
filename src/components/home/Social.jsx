import React from 'react'

const Social = () => {
  return (
    <div className='home__social'>
        <a href='https://leetcode.com/rishita1304' className='home__social-icon tooltip' target='_blank'>
            <i className='uil uil-brackets-curly'><span class="tooltiptext">Leetcode</span></i>
        </a>
        <a href='https://www.linkedin.com/in/rishita1304/' className='home__social-icon tooltip' target='_blank'>
        <i className='uil uil-linkedin'><span class="tooltiptext">Linkedin</span></i>
        </a>
        <a href='https://www.github.com/rishita1304/' className='home__social-icon tooltip' target='_blank'>
        <i className='uil uil-github-alt'><span class="tooltiptext">Github</span></i>
        </a>
    </div>
  )
}

export default Social