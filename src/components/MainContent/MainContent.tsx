import { useState, useMemo } from 'react';
import styled from 'styled-components';
import { Table } from '@/components/Table/Table';
import { Search } from '@/components/Search/Search';
import { Switch } from '@/components/Switch/Switch';
import { usersDb } from '@/data/usersDb';
import { User } from '@/types/global';

const StyledTitle = styled.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
`;

const  StyledSection = styled.section`
  display: flex;
  flex-direction:column;
  align-items: center;
  width:100%;
  padding-top: 41px;
  @media(max-width: 1440px){
    align-items: start;
    padding-right:20px;
  }
`;


const StyledTableContainer = styled.div`
  display: grid;
  background-color: #FFFFFF;
  border-radius: 30px;
  padding: 30px 0 40px 0;
  margin-top: 51px;
  box-shadow:  0px 10px 60px rgba(226, 236, 249, 0.5);
  
`;

const StyledTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
  align-items: center;
  padding: 0 53px 40px 38px;
`;

export const MainContent = () => {
  const [ searchStr, setSearchStr ] = useState('');
  const [ visibleUsers, setVisibleUsers ] = useState('');

  const filterUsers = (value:string, visible:string): User[] =>{
     return usersDb.users.filter(( user:User ) => {
      let key: keyof User;
      if(!value && visible === 'active') {
        return user.status === 'active';
      }else {
        for(key in user) {
          if(user[key].includes(value.toLowerCase())) {
            return true;
          }
        }
      }
    });
  };
  
  const users = useMemo(()=> filterUsers( searchStr, visibleUsers),[searchStr, visibleUsers]);
  return (
    <StyledSection>
      <div>
        <StyledTitle>Hello Evano 👋🏼,</StyledTitle>
        <StyledTableContainer>
          <StyledTopContainer>
            <Switch onSwitch={(value: string) => setVisibleUsers( value )} />
            <Search onSearch={(value:string) => setSearchStr(value)}/>
          </StyledTopContainer>
          <Table data={ users }/>
        </StyledTableContainer>
      </div>
    </StyledSection>
  )
}