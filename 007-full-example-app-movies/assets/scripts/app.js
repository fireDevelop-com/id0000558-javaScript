const form = document.getElementById('form');
const addMovie = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const addMovieCancel = form.querySelector('.btn--cancel');
const addMovieOK = addMovieCancel.nextElementSibling;
const userInputs = form.querySelectorAll('input');
const demoText = document.getElementById('demoText');
const deleteMovie = document.getElementById('deleteMovie');

const movies = [];



// DEMOTEXT
const updateUI = () => {
  if (movies.length === 0) {
    demoText.style.display = 'block';
  } else {
    demoText.style.display = 'none';
  }
};



// BACKDROP
const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const backdropHandler = () => {
  closeForm();
  deleteMovieClose();
  clearForm();
};



// FORM
const addMovieCancelHandler = () => {
  closeForm();
  toggleBackdrop();
  clearForm();
};

const addMovieHandler = () => {
  form.classList.add('visible');
  toggleBackdrop();
};

const closeForm = () => {
  form.classList.remove('visible');
};

const clearForm = () => {
  for (const usrInput of userInputs) {
    usrInput.value = '';
  }
};



// DELETE MOVIE

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

const deleteMovieHandlerStart = movieId => {
  deleteMovie.classList.add('visible');
  toggleBackdrop();

  const deleteMovieCancel = deleteMovie.querySelector('.btn--cancel');
  let deleteMovieOK = deleteMovie.querySelector('.btn--OK');

  deleteMovieOK.replaceWith(deleteMovieOK.cloneNode(true));

  deleteMovieOK = deleteMovie.querySelector('.btn--OK');
    
  deleteMovieCancel.removeEventListener('click', deleteMovieClose);

  deleteMovieCancel.addEventListener('click', deleteMovieClose);
  deleteMovieOK.addEventListener(
    'click',
    deleteMovieHandler.bind(null, movieId)
  );
};



// ADD MOVIE

const addMovieOKHandler = () => {
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
  closeForm();
  toggleBackdrop();
  clearForm();
  newMovieRender(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI();
};

const newMovieRender = (id, title, image, rating) => {
  const newMovie = document.createElement('li');
  newMovie.className = 'movie-element';
  newMovie.innerHTML = `
    <div class="movie-element__image">
      <img src="${image}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;
  newMovie.addEventListener(
    'click',
    deleteMovieHandlerStart.bind(null, id)
  );
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovie);
};





addMovie.addEventListener('click', addMovieHandler);
backdrop.addEventListener('click', backdropHandler);
addMovieCancel.addEventListener('click', addMovieCancelHandler);
addMovieOK.addEventListener('click', addMovieOKHandler);
