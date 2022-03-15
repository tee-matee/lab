export const callService = async (url: string) => {
    const res = await fetch(url)
    return await res.json()
}

type listValue = {
    name: string,
    value: string
}

type LookupListValue = {
    language: string,
    list: listValue[]
}

type LookupList = LookupListValue[]

export const callApiGetLookupExample = async (language: string = 'thai') => {
    alert('callApiGetLookupExample')
    const res: LookupList = await callService(`http://localhost:3000/api/lookup?language=${language}`)
    return res
}