import React, { memo, useRef } from "react"
import styled from "styled-components"

interface Props {
    id: string
    children: JSX.Element
}

const index: React.FC<Props> = (props: Props) => {
    const {
        id,
        children
    } = props

    const formRef = useRef<HTMLFormElement>(null)

    return (
        <FormStyled>
            <form
                id={id}
                ref={formRef} >
                {children}
            </form>
        </FormStyled>
    )
}

export default memo(index)

const FormStyled = styled.div`
                `