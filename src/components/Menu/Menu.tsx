import styled from 'styled-components';
import Image from 'next/image';
import iconHelp from '@/assets/img/help-icon.svg';
import iconIncome from '@/assets/img/income-icon.svg';
import iconKey from '@/assets/img/key-icon.svg';
import iconProduct from '@/assets/img/product-icon.svg';
import iconPromote from '@/assets/img/promote-icon.svg';
import iconUser from '@/assets/img/user-icon.svg';

const MenuContainer = styled.nav`
  align-self: baseline;
  margin-top: 70px;
  ul{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
`;

const MenuItem = styled.li<{ active?: boolean}>`
  display: flex;
  flex-direction: row;
  padding: 13px;
  background-color: ${props => props.active ? '#5932EA' : '#FFFFFF'};
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
  a{
    color: ${ props => props.active ? '#FFFFFF' : '#9197B3'};
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    margin-left: 14px;
  }
`;

export const Menu = () => {
  return (
  <MenuContainer>
    <ul>
      <MenuItem>
        <Image src={iconKey} width={21} height={21} alt="icon key" />
        <a href="#">Dashboard</a>
      </MenuItem>
      <MenuItem>
        <Image src={iconProduct} width={21} height={21} alt="icon product"/>
        <a href="#">Product</a>
      </MenuItem>
      <MenuItem active>
        <Image src={iconUser} width={21} height={21} alt="icon user" />
        <a href="#">Customers</a>
      </MenuItem>
      <MenuItem>
        <Image src={iconIncome} width={21} height={21} alt="icon income" />
        <a href="#">Income</a>
      </MenuItem>
      <MenuItem>
        <Image src={iconPromote} width={21} height={21} alt="icon promote"/>
        <a href="#">Promote</a>
      </MenuItem>
      <MenuItem>
        <Image src={iconHelp} width={21} height={21} alt="icon help"/>
        <a href="#">Help</a>
      </MenuItem>
    </ul>
  </MenuContainer>
  )
}