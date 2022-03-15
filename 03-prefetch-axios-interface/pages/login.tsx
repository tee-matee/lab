import type { NextPage } from 'next'
import { setUser, reSetUser, updateUser } from '../redux/actions/user'
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { DefaultRootState } from '../redux/reducers'
import Link from 'next/link'

const Login: NextPage = () => {

    const user = useSelector((state: DefaultRootState) => state.user)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <div>
                    NOW TYPE: {user.permissions}
                </div>
            </div>
            <button onClick={() => dispatch(setUser())}>setUser</button>
            <button onClick={() => dispatch(reSetUser())}>reSetUser</button>
            <button onClick={() => dispatch(updateUser({ "permissions": 'normal-user' }))}>normal-user</button>
            <button onClick={() => dispatch(updateUser({ "permissions": 'admin-user' }))}>admin-user</button>
            <button onClick={() => dispatch(updateUser({ "permissions": 'non-user' }))}>non-user</button>
            <div style={{ marginTop: '30px' }}>
                <div>
                    <Link href="/admin">
                        <a>CLICK HERE TO admin page</a>
                    </Link>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <Link href="/user">
                        <a>CLICK HERE TO user page</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login