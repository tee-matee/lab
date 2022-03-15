import { usePrefetching, getPrefetching } from '../services/api'
import React, { useState, useEffect } from "react"

const WithPrefetch = () => {

    useEffect(() => {
        caches.keys().then(e => console.log('useEffect', e))
    }, [])

    return (
        <div>
            <button
                onClick={() => getPrefetching()}>
                WithPrefetch
            </button>
        </div>
    )
}

export default WithPrefetch