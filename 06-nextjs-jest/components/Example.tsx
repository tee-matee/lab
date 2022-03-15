
const typeList = ['active', 'deactive', 'none'] as const
type IType = typeof typeList[number]

interface IExampleComponentProps {
    type: IType
}

interface IUpToYou {
    firstName?: string
    lastName?: string
}

interface IExampleRequire {
    title: string
    description: string
}

const ExampleComponent = (props: IExampleComponentProps) => {

    const freezeObject = Object.freeze({
        updateMe: 'updateMeValue',
        freeze: Object.freeze({
            freeze: 'freezeValue'
        }),
        notFreeze: {
            freeze: 'freezeValue'
        }
    })

    const readOnlySameFreeze: Readonly<IExampleRequire> = {
        title: 'read only tile',
        description: 'read only description'
    }
    // readOnlySameFreeze.title = 'change title'

    const upToYouFullName: IUpToYou = {}
    const upToYouFromRequire: Partial<IExampleRequire> = {}
    const requireFullName: Required<IUpToYou> = {
        firstName: 'matee',
        lastName: 'susavananon'
    }

    interface IRusultExampleFunction {
        fullName: Required<IUpToYou>
    }

    const exampleFunction = (): IRusultExampleFunction => {
        return {
            fullName: requireFullName
        }
    }

    if (props.type === 'none') {
        return (<></>)
    }

    return (
        <div>
            ExampleComponent Type: {props.type}
        </div>
    )
}

export default ExampleComponent