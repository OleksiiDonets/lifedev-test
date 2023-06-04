'use client';
import { createGlobalStyle, styled } from 'styled-components';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { MainContent } from '@/components/MainContent/MainContent';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    background-color: #FAFBFF;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button{
    font-family: inherit;
  }
`;

const Container = styled.main`
  display: flex;
  gap: 71px;
  @media( max-width: 1320px){
    gap: 40px;
  }
`;

export default async function Home() {

  return (
    <>
    <GlobalStyle/>
    <Container>
      <Sidebar/> 
      <MainContent />
    </Container>
    </>
    
  )
}
