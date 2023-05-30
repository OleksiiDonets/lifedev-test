'use client';
import { createGlobalStyle } from 'styled-components';
import Image from 'next/image'
import data from '@/data/usersDb.json';
import { Sidebar } from '@/components/Sidebar/Sidebar';

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
`

export default async function Home() {

  return (
    <>
    <GlobalStyle/>
    <main>
      <Sidebar/> 
    </main>
    </>
    
  )
}
