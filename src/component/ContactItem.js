import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

const ContactItem = ({ item }) => {
   const dispatch = useDispatch()
   const deleteItem = (contactId) => {
      dispatch(deleteItem(contactId))
   }
   const handleDelete = (contactId) => {
      dispatch({
         type: 'DELETE_CONTACT',
         payload: {
            contactId: contactId,
         },
      })
   }

   return (
      <div>
         <Row>
            <Col lg={2}>
               <img width={50} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg" />
            </Col>
            <Col lg={7}>
               <div>{item.name}</div>
               <div>{item.phoneNumber}</div>
            </Col>

            <Col lg={2}>
               <Button variant="danger" onClick={() => handleDelete(item.id)}>
                  삭제
               </Button>
            </Col>
         </Row>
      </div>
   )
}

export default ContactItem
