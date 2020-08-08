const form = document.getElementById('form')
const addMovie = document.querySelector('header button')
const backdrop = document.getElementById('backdrop')
const addMovieCancel = form.querySelector('.btn--cancel')
const addMovieOK = addMovieCancel.nextElementSibling
const userInputs = form.querySelectorAll('input')
const demoText = document.getElementById('demoText')
const deleteMovie = document.getElementById('deleteMovie')

const movies = []

