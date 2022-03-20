import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  overflow: hidden;
  aspect-ratio: 16 / 9;
`
export const Img = styled.img`
  ${fadeIn()}
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  object-fit: cover;
  width: 100%;
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  & svg {
      margin-right: 4px;
  }
`
