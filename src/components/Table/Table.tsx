import { FC } from 'react';
import { styled } from 'styled-components';
import { Bage } from '@/components/Bage/Bage';
import { ITable } from '@/types/global'; 

const TableContainer = styled.div`
  margin-bottom: 30px;
  @media(max-width: 1110px){
    width: 100%;
    overflow-x: scroll;
    padding: 0 15px;
  }
`;

const TableHead = styled.div`
  display: grid;
  grid-template-columns: 163px 130px 151px 215px 138px 91px;
  grid-template-rows: auto;
  color: #B5B7C0;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  text-transform: capitalize;
  border-bottom: 1px solid #EEEEEE;
  padding: 14px 40px 14px 38px;
  
`;

const TableBody = styled.div`
  display:grid;
  grid-template-columns: auto;
  width: 100%;
  padding: 0 40px 0 38px;
`;

const TableItem = styled.div`
  display: grid;
  grid-template-columns: 118px 68px 110px 169px 95px 85px;
  font-size: 14px;
  padding: 24px 0;
  border-bottom: 1px solid #EEEEEE;
  text-align: left;
  grid-column-gap: 49px;
`;

const TableFooter = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  color: #B5B7C0;
  font-size: 14px;
  padding: 0 40px 0 38px;
`;

const TablePagination = styled.nav`
  ul{
    display: flex;
    align-items: center;
    gap:12px;
    flex-wrap: wrap;
    padding: 0;
    list-style: none;
  }
  li {
    
  }
  @media (max-width: 637px){
    margin-top: 15px;
  }
`;
const TablePaginationItem = styled.li<{$active?: boolean}>`
  button {
      width: 26px;
      height: 24px;
      box-sizing: border-box;
      text-align: center;
      outline: none;
      border:1px solid #EEEEEE;
      background-color:${ props => props.$active ? '#5932EA': '#F5F5F5'};
      border-radius: 4px;
      color: ${props => props.$active ?'#FFFFFF' :'#404B52'};
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      
      svg{
        path{
          fill: #404B52;
        }
      }
      &:hover{
        background-color: #5932EA;
        color: #FFFFFF;
        svg{
          path{
            fill: #FFFFFF;
          }
        }
      }
    }
    div{
      color: #000000;
    }
`;
export const Table: FC<ITable> = ({ data }) => {
  const activePage = 1;
  return (
    <>
      <TableContainer>
        <TableHead>
          <div> customer name </div>
          <div> company </div>
          <div> phone number</div>
          <div> email </div>
          <div> country </div>
          <div> status </div>
        </TableHead>
        <TableBody>
          {
            data.map((customer) => (
              <TableItem key={customer.phone}>
                <div>{ customer.name}</div>
                <div>{ customer.company}</div>
                <div>{ customer.phone}</div>
                <div>{ customer.email}</div>
                <div>{ customer.country}</div>
                {/* <div>{ customer.status}</div> */}
                <Bage status={customer.status}/>
              </TableItem>
            ))
          }
        </TableBody>
      </TableContainer>
      <TableFooter>
        <div>
          <span>Showing data 1 to 8 of  256K entries</span>
        </div>
         <TablePagination>
            <ul>
              <TablePaginationItem>
                <button type="button">
                  <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.936 6.392L0.176 3.668L2.936 0.944H4.664L1.892 3.668L4.664 6.392H2.936Z" fill="#404B52"/>
                  </svg>
                </button>
              </TablePaginationItem>
              <TablePaginationItem $active>
                <button type="button">1</button>
              </TablePaginationItem>
              <TablePaginationItem>
                <button type="button">2</button>
              </TablePaginationItem>
              <TablePaginationItem>
                <button type="button">3</button>
              </TablePaginationItem>
              <TablePaginationItem>
                <button type="button">4</button>
              </TablePaginationItem>
              <TablePaginationItem>
                <div>...</div>
              </TablePaginationItem>
              <TablePaginationItem>
                <button type="button">40</button>
              </TablePaginationItem>
              <TablePaginationItem>
                <button type="button">
                  <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.344 0.944H2.072L4.832 3.668L2.072 6.392H0.344L3.116 3.668L0.344 0.944Z" fill="#404B52"/>
                  </svg>
                </button>
              </TablePaginationItem>
            </ul>
         </TablePagination>
      </TableFooter>
    </>
  )
}