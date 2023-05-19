// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem/index'

import {
  AppContainer,
  Heading,
  InputContainer,
  Input,
  TextArea,
  ButtonContainer,
  Button,
  UlContainer,
  NoNotesContainer,
  Image,
  Para,
} from './styledComponents'

const noNoteUrl = 'https://assets.ccbp.in/frontend/hooks/empty-notes-img.png'
//  alt should be notes empty

const Notes = () => {
  const [list, setList] = useState([])
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const newNote = {
    title,
    note,
  }

  const onClickSubmitAddNote = () => {
    setList(prevState => [...prevState, newNote])
    setTitle('')
    setNote('')
  }

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeNote = event => {
    setNote(event.target.value)
  }

  return (
    <AppContainer>
      <Heading>Notes</Heading>
      <InputContainer onSubmit={onClickSubmitAddNote}>
        <Input
          onChange={onChangeTitle}
          value={title}
          placeholder="Title"
          type="text"
        />
        <TextArea
          onChange={onChangeNote}
          value={note}
          placeholder="Take a Note..."
          type="text"
        />
        <ButtonContainer>
          <Button type="submit">Add</Button>
        </ButtonContainer>
      </InputContainer>
      {list.length !== 0 && (
        <UlContainer>
          {list.map(item => (
            <NoteItem key={uuidv4()} details={item} />
          ))}
        </UlContainer>
      )}
      {list.length === 0 && (
        <NoNotesContainer>
          <Image src={noNoteUrl} alt="notes empty" />
          <Heading>No Notes Yet</Heading>
          <Para>Notes you add will appear here</Para>
        </NoNotesContainer>
      )}
    </AppContainer>
  )
}

export default Notes
