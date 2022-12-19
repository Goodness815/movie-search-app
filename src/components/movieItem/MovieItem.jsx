import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './movieitem.css'

function MovieItem({ movie }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <>

            <div className="movieItem" onClick={handleShow} style={{
                backgroundImage: `url(${movie.Poster})`
            }}>
                Title: {movie.Title}
            </div>


            <Modal
                className='movieModal'
                show={show}
                onHide={handleClose}
                centered
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Movie Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span> Title: {movie.Title}</span> <br />
                    <span> Type: {movie.Type}</span> <br />
                    <span>Year: {movie.Year}</span> <br />
                    <span>IMDB ID: {movie.imdbID}</span> <br />
                </Modal.Body>

            </Modal>
        </>
    )
}

export default MovieItem