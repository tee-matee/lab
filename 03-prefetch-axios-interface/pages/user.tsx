import type { NextPage } from 'next'
import withPermission from '../permission'

const User: NextPage = () => {
    return (
        <div>
            HI AM USER PAGE (WITH PERMISSION 'normal-user')
        </div>
    )
}

export default withPermission(User, ['normal-user'])