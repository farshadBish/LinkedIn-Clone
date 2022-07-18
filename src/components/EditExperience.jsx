import React, { useState } from 'react'
import { useEffect } from 'react';
import { Button, Container, Form, Modal } from 'react-bootstrap'
import { useSelector } from 'react-redux';

const EditExperience = (props) => {

    const oneOfExp = useSelector((state)=>state.singleExperience.singleExperiences)
    const myProfile = useSelector((state) => state.myProfile.profileData)

    const [role, setRole] = useState('');
    const [company, setCompany] = useState('');
    const [area, setArea] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [description, setDescription] = useState('');
    const [expImg, setExpImg] = useState('');
    // useEffect(()=>{
    //     setRole(oneOfExp.role)
    // },[oneOfExp])

    const editingIt = async (e) =>{
        e.preventDefault();
        const blog = { role, company, area, startDate, endDate, description, expImg };
        console.log(blog);

        try {
            let response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${myProfile._id}/experiences/${props.expid}`, {
                method: "PUT",
                headers: {
                    Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmFkZThmMjY0OGVhODAwMTViZDhhZTEiLCJpYXQiOjE2NTU1NjQ1MzEsImV4cCI6MTY1Njc3NDEzMX0._-K2RTj3Yy2fqnV-4zPUH9sgSLayqXfW1aciSiV9tmg",
                    "Content-Type" : "application/json",
                    'Accept' : 'application/json'
                },
                body : JSON.stringify(blog) 
            })
            let data = response.json()
            alert('SUCCED! reload the page for update')
        }catch(err){
            console.log(err,'AGHA rouzbeh error');
    }
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Edit Experiance
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Role</Form.Label>
                        <Form.Control
                            type="text"
                            value={role}
                            onChange={(e) =>setRole(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Company</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Company Name"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Area</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Name Of City-Country"
                            value={area}
                            onChange={(e) => setArea(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>start Date</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder="Started-Date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>End Date</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder="Finish-Date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Desc"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Add image</Form.Label>
                        <Form.Control
                            type="text"
                            value={expImg}
                            onChange={(e) => setExpImg(e.target.value)}

                        />
                    </Form.Group>
                    <Button type="submit" variant="primary"  className='mb-3' onClick={editingIt}>
                        Save
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default EditExperience