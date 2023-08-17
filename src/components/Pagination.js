import React from 'react'
import ReactPaginate from 'react-paginate'

export default function PaginationComponent({getPage,pagesCount}) {
  
  const handelPageClick=(data)=>{
      getPage(data.selected+1)
  }
  return (
    <div>
        <ReactPaginate
        breakLabel="..."
        nextLabel="التالي"
        onPageChange={handelPageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={0}
        pageCount={pagesCount}
        previousLabel="السابق"
        containerClassName='pagination justify-content-center'
        pageClassName='page-item'
        previousClassName='page-item'
        nextClassName='page-item'
        pageLinkClassName='page-link'
        previousLinkClassName='page-link'
        nextLinkClassName='page-link'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        activeClassName='active'
        />
    </div>
  )
}
