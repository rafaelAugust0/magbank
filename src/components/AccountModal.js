import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

const AccountModal = ({show, handleClose}) => (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Abra sua conta</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Seu nome</Form.Label>
                        <Form.Control type="text" placeholder="Digite seu nome" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Seu email</Form.Label>
                        <Form.Control type="email" placeholder="Digite um email válido" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCity">
                        <Form.Label>Sua cidade</Form.Label>
                        <Form.Control as="select">
                            <option value="1">Itapema - SC</option>
                            <option value="2">Foz do Iguaçu - PR</option>
                            <option value="3">Lavras - MG</option>
                            <option value="3">Rio de Janeiro - RJ</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Check
                        type="checkbox"
                        id="custom-checkbox"
                        label="Eu li e concordo com os termos de uso."
                    />

                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Criar conta
                </Button>
            </Modal.Footer>
        </Modal>
)

export default AccountModal;