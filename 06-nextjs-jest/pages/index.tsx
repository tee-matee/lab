import type { NextPage } from 'next'
import ExampleComponent from '../components/Example'

const IndexPage: NextPage = () => {
  return (
    <div>
      IndexPage
      <ExampleComponent
        type="active" />
      <ExampleComponent
        type="deactive" />
      <ExampleComponent
        type="none" />
    </div>
  )
}

export default IndexPage