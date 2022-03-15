import React from 'react'
import { useSelector } from "react-redux"
import { DefaultRootState } from '../redux/reducers'

const UserPermission = ['normal-user', 'admin-user', 'non-user'] as const
type UserPermissionInterface = typeof UserPermission[number]

const withPermission = (Component: any, requiredPermissions: UserPermissionInterface[]) => {
    const ComponentParent = (props: any) => {
        const permissions = useSelector((state: DefaultRootState) => state.user.permissions)
        const hasPermission = requiredPermissions.every(r => permissions.includes(r))
        return hasPermission ? <Component /> : <>PERMISSION FAIL !!</>
    }
    return ComponentParent
}

export default withPermission