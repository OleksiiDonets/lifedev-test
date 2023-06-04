import { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import search from '@/assets/img/search-icon.svg';

interface ISearch {
  onSearch: (value:string) => void;
}

const SearchContainer = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 7px 8px;
  background-color: #F9FBFF;
  border-radius: 10px;
  height: fit-content;
  input {
    background: #F9FBFF;
    border:none;
    padding: 3px;
    margin-left:7px;
    color: #000000;
    &::placeholder {
      color: #B5B7C0;
      font-size: 12px;
      line-height: 18px;
    }
    &:focus{
      outline: none;
    }
  }
  @media screen and ( max-width: 637px ) {
    margin-bottom: 15px;

  }
`;

export const Search:FC<ISearch> = ({onSearch}) => {
  const changeListener = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  }
  return (
    <SearchContainer htmlFor="search">
      <Image src={search} alt="search" />
      <input id="search" type="text" placeholder="Search"  onChange={(event) => changeListener(event)}/>
    </SearchContainer>
  )
};
