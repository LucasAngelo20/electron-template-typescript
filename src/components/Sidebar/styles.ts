import styled from 'styled-components'

export const Container = styled.div`
  background-color: #fff;
  height: 1000px;
  width: ${props => props.width + 'px'};
  transition: all 0.5s ease-in-out;
  margin-right: 40px;
`

export const Options = styled.div`
  background-color: #d3d3d3;
  color: #191622;
  height: 50px;
  width: ${props => props.width + 'px'};
  margin-bottom: 5px;
  transition: all 0.5s ease-in-out;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    background-color: #333;
    color: white;
  }
`

export const OptionText = styled.h3`
  transition: font-size 0.2s ease-out;
  margin-left: 60px;
  mix-blend-mode: difference;
`
