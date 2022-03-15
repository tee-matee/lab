import type { NextPage } from 'next'
import withPermission from '../permission'

const Admin: NextPage = () => {
    return (
        <div>
            HI AM ADMIN PAGE (WITH PERMISSION 'admin-user')
        </div>
    )
}

export default withPermission(Admin, ['admin-user'])