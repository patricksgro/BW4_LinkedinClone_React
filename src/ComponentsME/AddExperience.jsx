import { useContext, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { ExperienceContext } from "../Context/ContextExperiences";

function addExperience({ onHide, show, ID }) {

    const { fetchExperiences } = useContext(ExperienceContext)

    const token = import.meta.env.VITE_API_TOKEN

    const [datiForm, setDatiForm] = useState({
        role: '',
        company: '',
        startDate: '',
        endDate: '',
        area: '',
        description: ''
    })

    const [inCorso, setInCorso] = useState(false)

    function handleChange(e) {
        const { name, value } = e.target
        setDatiForm(prev => ({ ...prev, [name]: value }))
    }


    function handleCheckboxChange(e) {
        const checked = e.target.checked
        setInCorso(checked)


        if (checked) {
            setDatiForm(prev => ({ ...prev, endDate: '' }))
        }
    }

    function saveForm(e) {
        e.preventDefault()

        fetch(`https://striveschool-api.herokuapp.com/api/profile/${ID}/experiences`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(datiForm)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                fetchExperiences(ID)
                onHide()
            })
    }


    return (
        <Modal show={show} onHide={onHide} centered >
            <Modal.Header closeButton>
                <Modal.Title>Aggiungi esperienza</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={saveForm}>
                    <Form.Group className="mb-3">
                        <Form.Label>Qualifica*</Form.Label>
                        <Form.Control
                            required
                            value={datiForm.role}
                            minLength={1}
                            name="role"
                            type="text"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Azienda o organizzazione*</Form.Label>
                        <Form.Control
                            required
                            value={datiForm.company}
                            minLength={1}
                            name="company"
                            type="text"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex">
                        <Form.Label>Data di inizio*</Form.Label>
                        <Form.Control
                            required
                            value={datiForm.startDate}
                            minLength={1}
                            name="startDate"
                            type="date"
                            onChange={handleChange}
                        />

                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Ancora in corso</Form.Label>
                        <input type="checkbox" name="inCorso" checked={inCorso} onChange={handleCheckboxChange} />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex">
                        <Form.Label>Data di fine*</Form.Label>
                        <Form.Control
                            required={!inCorso}
                            value={datiForm.endDate}
                            minLength={1}
                            name="endDate"
                            type="date"
                            onChange={handleChange}
                        />

                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Descrizione*</Form.Label>
                        <Form.Control
                            required
                            value={datiForm.description}
                            minLength={1}
                            name="description"
                            type="text"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Località*</Form.Label>
                        <Form.Control
                            required
                            value={datiForm.area}
                            minLength={1}
                            name="area"
                            type="text"
                            onChange={handleChange}
                        />
                    </Form.Group>
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

export default addExperience;