import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import withPermission from '../permission'
import useHome, { getHome } from '../services/api'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const { data } = useHome()

  return (
    <div>

    </div>
  )
}

export default Home