// Write your code here
import {LiCardContainer, Heading, Para} from './styledComponents'

const NoteItem = props => {
  const {details} = props
  const {title, note} = details

  return (
    <LiCardContainer>
      <Heading>{title}</Heading>
      <Para>{note}</Para>
    </LiCardContainer>
  )
}

export default NoteItem
