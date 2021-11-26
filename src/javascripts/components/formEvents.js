import newBearAlert from './river';

const bearArray = [];

const trackNewBear = (e) => {
  e.preventDefault();
  const newBear = {
    bearName: document.querySelector('#bearName').value,
    typeOfBear: document.querySelector('#typeOfBear').value,
    img: document.querySelector('#img').value
  };

  bearArray.push(newBear);
  newBearAlert(bearArray);
  document.querySelector('#newBearForm').reset();
};

const bearFormEvents = () => {
  const bearElement = document.querySelector('#newBearForm');
  bearElement.addEventListener('submit', trackNewBear);
};

export { bearFormEvents, trackNewBear };
