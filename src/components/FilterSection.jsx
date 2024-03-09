import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/filtercontext';
import { FaCheck } from "react-icons/fa";
import PriceConverter from '../helpers/PriceConverter';
import { Button } from "./styles/Button";

const FilterSection = () => {
  const { filters: { text, category, colors, price, maxPrice, minPrice },updateFilterValue, all_products, clearFilters } = useFilterContext();
  const getUniqueData = (data, attr) => {
    let newSortedArray;
    newSortedArray = data.map((curElem) => {
      return curElem[attr];
    })
    if (attr == "colors") {
      // newSortedArray = newSortedArray.flat();
      // newSortedArray = ["all",...new Set([].concat(...newSortedArray))];
      newSortedArray = newSortedArray.flat();
    }
    newSortedArray = ["all",...new Set(newSortedArray)];
    return newSortedArray;
  }

  const categories = getUniqueData(all_products,"category");
  const companies = getUniqueData(all_products,"company");
  const colorsArray = getUniqueData(all_products,"colors");
  return (
    <Wrapper>
      
      <div className="filter-search">
        <form>
          <input placeholder='Search...' type="text" name='text' value={text} onChange={updateFilterValue} />
        </form>
      </div>

      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {
            categories.map((curElem) => {
              return(
                <button
                type='button'
                className={curElem == category ? "active" : "" }
                name='category'
                onClick={updateFilterValue}
                value={curElem}
                key={curElem}
                >{curElem}</button>
              );
            })
          }
        </div>
      </div>

      <div className="filter-company">
        <h3>Company</h3>
        <form action='#'>
          <select className='filter-company--select' onChange={updateFilterValue} name="company">
            {
              companies.map((curElem) =>(
                <option
                value={curElem}
                key={curElem}
                name="company"
                >{curElem}</option>
              ))
            }
          </select>
        </form>
      </div>

      <div className="filter-colors colors">
        <h3>Colors</h3>
        <div className="filter-color-style">
          {
            colorsArray.map((curElem) => {
              if (curElem == 'all') {
                return (
                  <button
                  key={curElem}
                  type='button'
                  className='color-all--style'
                  value={curElem}
                  onClick={updateFilterValue}
                  name='colors'
                  >All</button>
                );
              } else {
                return (
                  <button
                  key={curElem}
                  type='button'
                  className={(curElem == colors) ? 'btnStyle active' : 'btnStyle'}
                  value={curElem}
                  onClick={updateFilterValue}
                  name='colors'
                  style={{ backgroundColor: curElem }}
                  >{curElem == colors ? <FaCheck className="checkStyle" /> : null}</button>
                );
              }
            })
          }
        </div>
      </div>

      <div className="filter_price">
        <h3>Price</h3>
        <p><PriceConverter price={price} /></p>
        <input type="range" min={minPrice} max={maxPrice} name='price' onChange={updateFilterValue} />
      </div>

      <div className="filter-clear">
        <Button className='btn' onClick={clearFilters}> clear filters </Button>
      </div>

    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;
export default FilterSection;
