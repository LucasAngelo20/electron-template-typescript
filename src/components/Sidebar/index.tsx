import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BiBath } from 'react-icons/bi'

import { Container, Options, OptionText } from './styles'

interface DivProps extends HTMLDivElement {
  width: number
}

interface TextProps {
  fontSize: number
}

const Sidebar: React.FC<DivProps & TextProps> = () => {
  const [isActive, setIsActive] = useState(false)
  return (
    <Container width={isActive ? 200 : 0}>
      <GiHamburgerMenu
        style={{ transition: 'all 0.2s ease-out' }}
        color={isActive ? '#000' : '#d3d3d3'}
        size={30}
        onClick={() => setIsActive(!isActive)}
      />
      <Options width={isActive ? 200 : 0}>
        <OptionText fontSize={isActive ? 20 : 0} width={isActive ? 200 : 0}>
          teste
        </OptionText>
      </Options>
      <Options width={isActive ? 200 : 0}>
        <OptionText fontSize={isActive ? 20 : 0} width={isActive ? 200 : 0}>
          teste2
        </OptionText>
      </Options>
      <Options width={isActive ? 200 : 0}>
        <OptionText fontSize={isActive ? 20 : 0} width={isActive ? 200 : 0}>
          teste3
        </OptionText>
      </Options>
      <Options width={isActive ? 200 : 0}>
        <OptionText fontSize={isActive ? 20 : 0} width={isActive ? 200 : 0}>
          teste4
        </OptionText>
      </Options>
    </Container>
  )
}

export default Sidebar
