import React, { memo, useState, useEffect } from "react"
import { callApiGetLookupExample } from "../core/callservice"
import { useSelector, useDispatch } from 'react-redux'
import { typeRedux } from "../redux/types"
import { useRouter } from 'next/router'

const Lookup2 = () => {

    const router = useRouter()
    const lookup = useSelector((state) => state.lookup)
    const dispatch = useDispatch()
    const [lookupList, setLookupList] = useState([])

    useEffect(() => {
        if (!lookup.isHasData) {
            getLookup()
        } else {
            setLookupList(lookup.data)
        }
    }, [lookup])

    const getLookup = async (language: string = 'thai') => {
        const lookupFromService = await callApiGetLookupExample(language)
        dispatch({
            type: typeRedux.lookup,
            data: {
                ...lookup,
                isHasData: true,
                data: lookupFromService[0].list
            }
        })
    }
    return (
        <div>
            <p onClick={() => router.push('http://localhost:3000/lookup1')}>
                click to lookup 1
            </p>
            <p onClick={() => router.push('http://localhost:3000/lookup2')}>
                click to lookup 2
            </p>
            <button
                onClick={() => getLookup('thai')}>
                Get Thai Language
            </button>
            <button
                onClick={() => getLookup('english')}>
                Get English Language
            </button>
            {lookupList.map((e, i) => {
                return (
                    <div>
                        {`value: ${e.value}`}
                    </div>
                )
            })}
        </div>
    )
}

export default memo(Lookup2)