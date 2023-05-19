// Style your elements here
import styled from 'styled-components'

//   AppContainer,
//   Heading,
//   InputContainer,
//   Input,
//   ButtonContainer,
//   Button,
//   UlContainer,
//   NoNotesContainer,
//   Image,
//   Para,
// TextArea

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  //   justify-content: center;
  align-items: center;
  padding: 50px;
`

export const Heading = styled.h1`
  font-family: 'Bree Serif';
`

export const InputContainer = styled.form`
  width: 100%;
  box-shadow: 1px 0px 0px 16px #e6ffe6;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
`
export const TextArea = styled.textarea`
  width: 100%;
  box-shadow: 1px 0px 0px 16px #e6ffe6;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
`
export const Input = styled.input`
  outline: none;
  border: none;
  padding: 10px 0 10px 0;
`

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  background-color: blue;
  color: white;
  font-size: bold;
  padding: 10px;
`

export const UlContainer = styled.ul`
  margin-top: 20px;
  padding: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const NoNotesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`

export const Image = styled.img`
  width: 70px;
`

export const Para = styled.p``
