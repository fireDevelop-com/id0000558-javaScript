const form = document.getElementById('form');
const addMovie = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const addMovieCancel = form.querySelector('.btn--cancel');
const addMovieOK = addMovieCancel.nextElementSibling;
const userInputs = form.querySelectorAll('input');
const demoText = document.getElementById('demoText');
const deleteMovie = document.getElementById('deleteMovie');

const movies = [];

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const updateUI = () => {
  if (movies.length === 0) {
    demoText.style.display = 'block';
  } else {
    demoText.style.display = 'none';
  }
};

const deleteMovieClose = () => {
  toggleBackdrop();
  deleteMovie.classList.remove('visible');
};

const deleteMovieHandler = movieId => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById('movie-list');
  listRoot.children[movieIndex].remove();
  deleteMovieClose();
  updateUI();
};

const startDeleteMovieHandler = movieId => {
  deleteMovie.classList.add('visible');
  toggleBackdrop();

  const cancelDeletionButton = deleteMovie.querySelector('.btn--cancel');
  let confirmDeletionButton = deleteMovie.querySelector('.btn--danger');

  confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));

  confirmDeletionButton = deleteMovie.querySelector('.btn--danger');
    
  cancelDeletionButton.removeEventListener('click', deleteMovieClose);

  cancelDeletionButton.addEventListener('click', deleteMovieClose);
  confirmDeletionButton.addEventListener(
    'click',
    deleteMovieHandler.bind(null, movieId)
  );
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;
  newMovieElement.addEventListener(
    'click',
    startDeleteMovieHandler.bind(null, id)
  );
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement);
};

const closeMovieModal = () => {
  form.classList.remove('visible');
};

const showMovieModal = () => {
  form.classList.add('visible');
  toggleBackdrop();
};

const clearMovieInput = () => {
  for (const usrInput of userInputs) {
    usrInput.value = '';
  }
};

const cancelAddMovieHandler = () => {
  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
};

const addMovieHandler = () => {
  const title = userInputs[0].value;
  const image = userInputs[1].value;
  const rating = userInputs[2].value;

  if (
    title.trim() === '' ||
    image.trim() === '' ||
    rating.trim() === '' ||
    +rating < 1 ||
    +rating > 5
  ) {
    alert('Please enter valid values (rating between 1 and 5).');
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: title,
    image: image,
    rating: rating
  };

  movies.push(newMovie);
  console.log(movies);
  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI();
};

const backdropClickHandler = () => {
  closeMovieModal();
  deleteMovieClose();
  clearMovieInput();
};

addMovie.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
addMovieCancel.addEventListener('click', cancelAddMovieHandler);
addMovieOK.addEventListener('click', addMovieHandler);
