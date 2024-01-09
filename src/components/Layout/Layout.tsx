
import React from "react"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import styled from "styled-components"

const Main = styled.div`
    min-height: calc(100vh - 70px);
`;

const Layout = (props: {
    children: React.ReactNode
}) => {
    return (
        <div>
            <Header />
            <Main>
                {props.children}
            </Main>
            <Footer />
        </div>
    )
}

export default Layout