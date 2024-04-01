import React, { useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'

const SearchBox = () => {
   const [keyword, setKeyword] = useState('')
   let dispatch = useDispatch()
   let { contact } = useSelector((state) => state)
   const searchByName = (event) => {
      event.preventDefault()
      dispatch({ type: 'SEARCH_BY_USERNAME', payload: { keyword } })
   }
   return (
      <div>
         <Form onSubmit={searchByName}>
            <Row>
               <Col lg={10}>
                  <Form.Control type="text" placeholder="이름을 입력하세요." onChange={(event) => setKeyword(event.target.value)} />
               </Col>
               <Col lg={2}>
                  <Button type="submit">찾기</Button>
               </Col>
            </Row>
         </Form>
      </div>
   )
}

export default SearchBox
