import { styled } from 'styled-components';
import Image from 'next/image';
import logotype from '@/assets/img/logotype.svg';
import avatar from '@/assets/img/avatar.png';
import { Menu } from '@/components/Menu/Menu';

const SidebarContainer = styled.aside`
  display: grid;
  grid-template-rows: min-content;
  max-width: 306px;
  width: 100%;
  height: 100vh;
  padding: 39px 28px 76px 28px;
  background-color: #fff;
  box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
  transition: max-width .2s ease;
  a, span {
    transition: display .4s ease;
  }
  @media screen and ( max-width: 1320px ){
    max-width: 100px;
    a,span {
      opacity: 0;
      display: none;
    }
    li:after{
      display: none;
    }
    &:hover{
      max-width: 306px;
      a,
      span {
        opacity: 1;
        display: block;
      }
      li:after{
        display: block;
      }
    }
  }
`;

const LogotypeContainer = styled.div`
  display:flex;
  flex-direction:row;
  align-items: center;
  height: 39px;
  div{
    display: flex;
    align-items: baseline;
    transition: all 0.5s ease;
  }
  span {
    font-size: 26px;
    font-weight: 600;
    margin-left: 6px;
    &:last-child{
      color: #838383;
      font-weight: 500;
      font-size: 10px;
      margin-left: 4px;
    }
  }
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  div:first-child{
    display: flex;
  }
  div:last-child{
    display:flex;
    flex-direction: column;
    margin-left: 12px;
  }
  span{
    &:first-child{
      font-size: 14px;
      line-height: 21px;
    }
    &:last-child{
      color: #757575;
      font-size: 12px;
    }
  }
`;

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <LogotypeContainer>
        <Image src={logotype} width={30} height={33} alt="logotype" />
        <div>
          <span>Dashboard</span>
          <span>v.01</span>
        </div>
      </LogotypeContainer>
      <Menu />
      <UserContainer>
        <div>
          <Image src={avatar} width={42} height={42} alt="avatar"/>
        </div>
        <div>
          <span>Evano</span>
          <span>Project Manager</span>
        </div>
      </UserContainer>
    </SidebarContainer>
  )
};