//popover

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

//Gender select
if (window.location.pathname === '/') {
    const radionBtn1 = document.querySelector("#flexRadio1")
    const radionBtn2 = document.querySelector("#flexRadio2")
    const radionBtn3 = document.querySelector("#flexRadio3")
    const genderSelect = document.querySelector("#genderSelect")

    radionBtn1.addEventListener("change", () => {
        genderSelect.classList.add('d-none')

    })
    radionBtn2.addEventListener("change", () => {
        genderSelect.classList.add('d-none')

    })
    radionBtn3.addEventListener("change", () => {
        genderSelect.classList.remove('d-none')

    })
}


// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import Alert from 'bootstrap/js/dist/alert'

import Carousel from 'bootstrap/js/dist/carousel'

//library MDB
import * as mdb from 'mdb-ui-kit'

//Module

import { Input } from 'mdb-ui-kit'