import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import ProductSection from '../components/ProductSection'

const Container = styled.div`
`
const Home = () => {
  return (
    <Container>
      <Navbar />
      <ProductSection/>
    </Container>
  )
}

export default Home