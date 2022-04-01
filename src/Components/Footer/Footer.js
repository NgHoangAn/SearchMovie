import React from 'react'
import styledComponents from 'styled-components'

function Footer() {
  return (
    <FooterPane>
        <h3>Copyright © copany xyz</h3>
        <span>hoangan.cv@gmail.com</span>
    </FooterPane>
  )
}

export default Footer

const FooterPane = styledComponents.div`
    width: 100%;
    height: 8vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    color: var(--color-white);
    background: linear-gradient(rgba(0, 0, 0, 0.9) 40%, rgba(0, 0, 0, 0.99) 100%, transparent);
`