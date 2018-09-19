import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import logo from '../images/logo.jpg'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Transition from 'react-transition-group/Transition'

class Header extends Component {
  state = { in: false }
  componentDidMount() {
    this.setState({ in: true })
    // const { location } = this.props

    // does not work in safari
    // const animate = this.wrapper.animate(
    //   [{ height: '70vh' }, { height: '20vh' }],
    //   {
    //     duration: 300,
    //     fill: 'forwards',
    //     easing: 'cubic-bezier(0.86,0,0.07,1)',
    //     iterations: 1,
    //   }
    // )
    // animate.pause()

    // if (location.pathname === '/') {
    //   animate.reverse()
    // } else {
    //   animate.play()
    // }
  }

  render() {
    const { siteTitle, location } = this.props
    return (
      <Transition in={this.state.in} timeout={0}>
        {state => {
          return (
            <HeaderWrapper
              isHome={location.pathname === '/'}
              className={state}
              // ref={wrapper => (this.wrapper = ReactDOM.findDOMNode(wrapper))} // get dom element
            >
              <HeaderContainer>
                <h1 style={{ margin: 0 }}>
                  <img src={logo} alt="my face" />
                  <Link
                    to="/"
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    {siteTitle}
                  </Link>
                </h1>
                <MainNav>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                  </ul>
                </MainNav>
              </HeaderContainer>
              <StaticQuery
                query={IMAGE}
                render={({ background: { fluid } }) => (
                  <Img style={styles.image} fluid={fluid} />
                )}
              />
            </HeaderWrapper>
          )
        }}
      </Transition>
    )
  }
}

const styles = {
  image: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    opacity: 0.3,
  },
}

const HeaderWrapper = styled.div`
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  background: green;
  transition: height 300ms cubic-bezier(0.86, 0, 0.07, 1);

  &.entering {
    height: ${({ isHome }) => (isHome ? '20vh' : '70vh')};
  }
  &.entered {
    height: ${({ isHome }) => (isHome ? '70vh' : '20vh')};
  }

  h1 {
    display: flex;
    align-items: center;
    img {
      height: 50px;
      margin: 0;
      border-radius: 50%;
      margin-right: 10px;
    }
  }

  nav {
  }
`

const IMAGE = graphql`
  query HeaderImage {
    background: imageSharp(original: { src: { regex: "/logo/" } }) {
      fluid(maxWidth: 1240) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MainNav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    li {
      margin: 0;
      margin-left: 10px;
      a {
        text-decoration: none;
        color: #fff;

        &:hover {
          border-bottom: 3px solid blue;
        }
      }
    }
  }
`

// doesnt work with Img but in thery it could work
// const Billboard = styled(Img)`
//   position: absolute;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 100%;
// `

export default Header
