import React, { memo, useState } from "react"
import BasicForm from "../components/form/BasicForm"
import BasicInput from "../components/inputs/BasicInput"

interface InitialFormInputObject {
  [index: string]: RegExp | object | string | boolean,
  value: string,
  isValid: boolean,
  validate: {
    regex: RegExp,
    message: string
  }[]
}

interface InitialStateFormInput {
  [index: string]: InitialFormInputObject,
  // id
  // status
  // dataSet
  username: InitialFormInputObject,
  password: InitialFormInputObject
}

const Index = () => {
  const [formInput, setFormInput] = useState<InitialStateFormInput>({
    username: {
      // id
      // formId
      // name
      value: '',
      isValid: false,
      validate: []
    },
    password: {
      // id
      // formId
      // name
      value: '',
      isValid: false,
      validate: [
        {
          regex: /abcd/,
          message: 'abcd'
        },
        {
          regex: /defg/,
          message: 'defg'
        }
      ]
    }
  })

  const handleUpdateFormInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormInput(prevState => {
      return {
        ...prevState,
        [event.target.name]: {
          ...prevState[event.target.name],
          value: event.target.value,
          isValid: event.target.validity.valid
        }
      }
    })
  }

  const onHandleGetFormStatus = (e) => {
  }

  return (
    <div>
      Index
      <BasicForm
        id="tee">
        <div>
          <p>tee1</p>
          <BasicInput
            id="1"
            formId="tee"
            name="username"
            value={formInput.username.value}
            validate={formInput.username.validate}
            onChangeInputValue={handleUpdateFormInput} />
          <BasicInput
            id="2"
            formId="tee"
            name="password"
            value={formInput.password.value}
            validate={formInput.password.validate}
            onChangeInputValue={handleUpdateFormInput} />
        </div>
      </BasicForm>
    </div>
  )
}

export default memo(Index)