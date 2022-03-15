import React, { memo, useRef } from "react"
import styled from "styled-components"

type OnChangeInputValueType = (event: React.ChangeEvent<HTMLInputElement>) => void

interface Props {
    id: string,
    formId: string,
    name: string,
    value: string,
    validate: {
        regex: RegExp,
        message: string
    }[],
    onChangeInputValue: OnChangeInputValueType
}

const index: React.FC<Props> = (props: Props) => {
    const {
        id,
        formId,
        name,
        value,
        validate,
        onChangeInputValue
    } = props
    const inputRef = useRef<HTMLInputElement>(null)

    const validatedValue = (value: string) => {
        if (value !== '') {
            // change to loop and break
            validate.map((e) => {
                const reg = new RegExp(e.regex.source)
                if (!reg.test(value)) {
                    inputRef.current?.setCustomValidity(e.message)
                } else {
                    inputRef.current?.setCustomValidity('')
                }
            })
        } else {
            inputRef.current?.setCustomValidity('')
        }
        const x = inputRef.current?.querySelectorAll(':invalid')
        if (x !== undefined) {

        } else {
            return initialState
        }
    }

    return (
        <InputStyled>
            <input
                ref={inputRef}
                id={id}
                form={formId}
                name={name}
                value={value}
                onChange={(event) => {
                    validatedValue(event.target.value)
                    onChangeInputValue(event)
                }} />
        </InputStyled>
    )
}


export default memo(index)

const InputStyled = styled.div`
    input:valid {
        background-color: red;
    }
    input:invalid {
        background-color: blue;
    }
`