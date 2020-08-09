const form = document.getElementById('form')
const addMovie = document.querySelector('header button')
const backdrop = document.getElementById('backdrop')
const addMovieCancel = form.querySelector('.btn--cancel')
const addMovieOK = addMovieCancel.nextElementSibling
const userInputs = form.querySelectorAll('input')
const demoText = document.getElementById('demoText')
const deleteMovie = document.getElementById('deleteMovie')

const movies = []
const toggleBackdrop = () => {
    backdrop.classList.toggle('visible')
}
const updateUI = () => {
    if(movies.length === 0){
        demoText.style.display = 'block'
    } else {
        demoText.style.display = 'none'
    }
}

const addMovieCancleHandler = () => {
    closeForm()
    toggleBackdrop()
    clearForm()
}

const addMovieHandler = () => {
    form.classList.add('visible')
    toggleBackdrop()
}

const backdropHandler = ()  => {
    c
}


addMovie.addEventListener('click', addMovieHandler)
backdrop.addEventListener('click', backdropHandler)
addMovieCancel.addEventListener('click', addMovieCancelHandler)
addMovieOK.addEventListener('click', addMovieOKHandler)