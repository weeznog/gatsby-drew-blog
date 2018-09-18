import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = ({ location }) => (
  <Layout location={location}>
    <h1>Hi from the second page</h1>
    <h2>drew test</h2>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
