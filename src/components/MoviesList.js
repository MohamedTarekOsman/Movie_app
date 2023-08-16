import React from 'react'
import { Row } from 'react-bootstrap'
import CardMovie from './CardMovie'
import PaginationComponent from "./Pagination";
export default function MoviesList({movies, getPage,pagesCount}) {
  return (
    <>
    <Row className='mt-3'>
        {movies.length>=1?
        (movies.map((mov)=>{
            return <CardMovie key={mov.id} mov={mov}/>
        })):
        <h2 className='text-center '>لا يوجد افلام...</h2>}
        {movies.length>=1?(<PaginationComponent getPage={getPage} pagesCount={pagesCount}/>):null}
    </Row>
    </>
  )
}

