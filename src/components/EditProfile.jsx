import { useEffect, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useSelector } from 'react-redux'
import "../style/EditProfile.css"

export default function EditProfile(props) {
    const myProfile = useSelector((state) => state.myProfile.profileData)
    //console.log(myProfile._id);
    const [image, setImage] = useState(null)

    const [editDetails, setEditDetails] = useState({
        id: myProfile._id,
        name: myProfile.name,
        surname: myProfile.surname,
        bio: myProfile.bio,
        area: myProfile.area,
        email: myProfile.email,
        title: myProfile.title,
        username: myProfile.username,

    })

    const editProfile = async (e) => {
        console.log("first")
        e.preventDefault()


        try {
            let formData = new FormData()
            formData.append("profile", image)
            formData.get("profile")
            let response = await fetch(
                `https://striveschool-api.herokuapp.com/api/profile/${editDetails.id}/picture`,
                // `https://striveschool-api.herokuapp.com/api/profile/`,

                {
                    method: "POST",
                    headers: {
                        Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmFkZThmMjY0OGVhODAwMTViZDhhZTEiLCJpYXQiOjE2NTU1NjQ1MzEsImV4cCI6MTY1Njc3NDEzMX0._-K2RTj3Yy2fqnV-4zPUH9sgSLayqXfW1aciSiV9tmg",
                    },
                    body: formData,
                }
            )
            let data = await response.json()
            console.log(data);
        } catch (err) {
            console.log(err)
        }

    }
    useEffect(() => {
        console.log(image)

    }, [image])

    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter modal-container">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Edit intro
                </Modal.Title>

            </Modal.Header>
            <Modal.Body className="modal-container-content">
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>First name*</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            defaultValue={editDetails.name}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Last name*</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your surname"
                            defaultValue={editDetails.surname}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Additional name*</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your username"
                            defaultValue={editDetails.username}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            defaultValue={editDetails.email}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Headline*</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your job title"
                            defaultValue={editDetails.title}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Current position</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your bio"
                            defaultValue={editDetails.bio}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Location</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your bio"
                            defaultValue={editDetails.area}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Add image</Form.Label>
                        <Form.Control
                            type="file"
                            onChange={(e) => { setImage(e.target.files[0]) }}


                        />
                    </Form.Group>
                    {/* <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group> */}
                    <Button type="submit" variant="primary" onClick={editProfile} className='mb-3'>
                        Save
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    );
}