import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import Styled from 'styled-components'

const Main = Styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    Padding-top: 50px;
    Padding-left: 5%;
    Padding-right: 5%;
`;


function PageDefault({ children }) {
    return(
        <>  
            <Menu />
                 <Main>
                 {children}
                 </Main>
            <Footer />       
        </>
    );

}
export default PageDefault