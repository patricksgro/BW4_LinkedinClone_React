import { useContext, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { MeContext } from '../Context/ContextMe'

function EditPersonalProfile({ show, onHide, saveForm, isBio }) {

    const { personalProfile } = useContext(MeContext)

    const [loading, setLoading] = useState(true)
    const [formData, setFormData] = useState(
        isBio ? {
            bio: ''
        } : {
            name: '',
            surname: '',
            title: '',
            area: ''
        })

    const token = import.meta.env.VITE_API_TOKEN

    useEffect(() => {
        if (show) {
            fetchProfileData()
        }
    }, [show])

    function fetchProfileData() {
        setLoading(true)
        fetch('https://striveschool-api.herokuapp.com/api/profile/me', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                setFormData(
                    isBio ? {
                        bio: data.bio
                    } :
                        {
                            name: data.name,
                            surname: data.surname,
                            title: data.title,
                            area: data.area
                        })
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }

    function HandleChange(e) {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch('https://striveschool-api.herokuapp.com/api/profile/', {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(formData)
        })
            .then(() => {
                saveForm()
            })
            .catch(error => console.log(error))
    }

    const [picture, setPicture] = useState()

    const addProfilePicture = (e) => {
        setPicture(e.target.files[0])
    }

    const uploadImg = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('profile', picture)
        const res = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${personalProfile._id}/picture`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: formData
        })
    }


    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Modifica presentazione</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    {
                        isBio ?
                            <Form.Group className="mb-3">
                                <Form.Label>Bio*</Form.Label>
                                <Form.Control
                                    required
                                    minLength={1}
                                    name="bio"
                                    value={formData.bio}
                                    type="text"
                                    onChange={HandleChange} />
                            </Form.Group>
                            :
                            <>
                                <Form.Group className="mb-3">
                                    <Form.Label>Immagine del profilo*</Form.Label>
                                    <Form.Control
                                        required
                                        name="profile"
                                        type="file"
                                        onChange={addProfilePicture} />

                                    <Button variant="dark" onClick={uploadImg}>
                                        Upload
                                    </Button>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Nome*</Form.Label>
                                    <Form.Control
                                        required
                                        minLength={2}
                                        name="name"
                                        value={formData.name}
                                        type="text"
                                        onChange={HandleChange} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Cognome*</Form.Label>
                                    <Form.Control
                                        required
                                        minLength={2}
                                        value={formData.surname}
                                        name="surname"
                                        type="text"
                                        onChange={HandleChange} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Sommario*</Form.Label>
                                    <Form.Control
                                        required
                                        minLength={5}
                                        value={formData.title}
                                        name="title"
                                        type="text"
                                        onChange={HandleChange} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Località</Form.Label>
                                    <Form.Control
                                        required
                                        value={formData.area}
                                        name="area"
                                        type="text"
                                        onChange={HandleChange} />
                                </Form.Group>
                            </>
                    }
                    <Button variant="primary" type="submit">
                        Salva
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Chiudi
                </Button>

            </Modal.Footer>
        </Modal>
    )
}

export default EditPersonalProfile;