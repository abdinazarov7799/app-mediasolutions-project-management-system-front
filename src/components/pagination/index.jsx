import React from "react";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { toNumber } from "lodash";

const Styled = styled.div`
  ul {
    width: 100%;
    display: flex;
    margin-top: 30px;
    margin-bottom: 20px;
    justify-content: flex-end;
    align-items: center;

    li {
      a {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #000;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
      }

      margin-right: 20px;

      transition: 0.3s ease;

      &:hover {
        a {
          color: #ffa200;
          border-color: #ffa200;
        }
      }

      &.selected {
        a {
          background-color: #ffa200;
          color: #fff;
          border-color: #ffa200;
        }
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;
const Pagination = ({
  pageCount = 2,
  page = 0,
  setPage = () => {},
  ...rest
}) => {

  return (
    <Styled {...rest}>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<FiChevronRight size={22} />}
        onPageChange={({ selected }) => setPage(selected)}
        pageRangeDisplayed={3}
        initialPage={toNumber(page)}
        pageCount={pageCount}
        previousLabel={<FiChevronLeft size={22} />}
        renderOnZeroPageCount={null}
      />
    </Styled>
  );
};

export default Pagination;
