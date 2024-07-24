// Handle mobile
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const mbnavBtn = $('#header .mbnav-btn')
const barsContent = $('#header .bars-content')
const svg = mbnavBtn.querySelector('svg')
const img = mbnavBtn.querySelector('img')

let isActive = false;

mbnavBtn.onclick = () => {

    svg.classList.toggle('active')
    img.classList.toggle('active')

    barsContent.classList.toggle('active')
}