import { useState, FC } from 'react';
import styled from 'styled-components';

interface ISwitch {
  onSwitch?: (value: string) => void;
}
const switchItems = [
  {
    label: 'All customers',
    value: 'all',
    type: 'users'
  },
  {
    label: 'Actve members',
    value: 'active',
    type: 'users'
  }
];


const SwitchContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SwitchItem = styled.label<{$checked?: boolean}>`
  color: ${props => props.$checked ? '#000000' : '#16C098'};
  font-size: ${props => props.$checked ? '22px' : '14px'}; 
  line-height: ${props => props.$checked ? '33px' : '21px'};
  text-transform: capitalize;
  font-weight: ${props => props.$checked ? '600' : '400'};
  input{
    display: none;
  }
`;

export const Switch:FC<ISwitch> = ({ onSwitch }) => {
  const [ checked, setChecked ] = useState("all");

  const checkListener = (event:React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.value);
    onSwitch?.(event.target.value);
  }
  return (
    <SwitchContainer>
      {
        switchItems.map(item => (
          <SwitchItem key={item.value} $checked={checked === item.value}>
            <input type="radio" name={item.type} value={item.value} onChange={checkListener}/>
            <span>{ item.label }</span>
          </SwitchItem>
        ))
      }
    </SwitchContainer>
  )
}