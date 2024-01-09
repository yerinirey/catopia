import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './routes/home'
import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import Layout from './components/Layout/Layout'
import Breed from './routes/breed'

const router = createBrowserRouter([

{
  path:"/",
  element: (
    <Layout>
      <Home />
    </Layout>
  ),
},
{
  path:"/breed",
  element: (
    <Layout>
      <Breed />
    </Layout>
  )
}
])
const GlobalStyles = createGlobalStyle`
  ${reset};
  :root{
    --darkgrey: #393646;
    --grey: #4F4557;
    --lightgrey: #6D5D6E;
    --beige: #F4EEE0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    background-color: var(--grey);
    color: var(--beige);
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

function App() {

  return (
    <Wrapper>
      <GlobalStyles />
      <RouterProvider router={router} />
    </Wrapper>
  )
}

export default App
