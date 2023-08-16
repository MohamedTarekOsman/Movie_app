import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {BsSearch} from "react-icons/bs"
import logo from '../images/OIP.jpg'
export default function NavBar({search}) {
  const onSearch=(word)=>{
    search(word)
  }
  return (
    <div className='nav-style w-100'>
      <Container>
        <Row className='pt-2'>
            <Col xs="2" lg="1">
                <img className='logo' src={logo} alt='logo'/>
            </Col>
            <Col xs='10' lg='11' className='d-flex align-items-center'>
                <div className='search w-100'>
                <BsSearch className='fa fa-search'/>
                  <input type='text' className='form-control' placeholder='ابحث' onChange={
                    (e)=>{onSearch(e.target.value)}
                  }/>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}
