import React from 'react'
import { createPortal } from 'react-dom'


const modalContainer = document.getElementById("videos")


function VideosModal({ children }) {
    const modalBody = children
    return createPortal(modalBody, modalContainer)
}

export default VideosModal