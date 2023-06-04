import { FC } from 'react';
import styled from 'styled-components';

interface IBage {
  status?: string;
}

const BageContainer = styled.div<{ $status: boolean}>`
  border-radius: 4px;
  width: 80px;
  height: 29px;
  box-sizing: border-box;
  text-align: center;
  background: ${props => props.$status ? '#16C09861' : '#FFC5C5'};
  color: ${props => props.$status ? '#008767':'#DF0404'};
  text-transform: capitalize;
  font-weight: 500;
  line-height: 1.9;
  border: 1px solid ${props => props.$status ? '#00B087':'#DF0404'};
`;


export const Bage:FC<IBage> = ({status}) => {
  const statusStyl = status === 'active'? true : false;
  return(
    <BageContainer $status={statusStyl}>
      {status}
    </BageContainer>
  )
}