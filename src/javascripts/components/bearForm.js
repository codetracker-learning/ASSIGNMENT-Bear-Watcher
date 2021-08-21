import buildABear from './river';
import renderToDom from '../helpers/renderToDom';

const bearz = [];

const handleBearForm = (e) => {
  e.preventDefault();
  const newBear = {
    name: document.querySelector('#name').value,
    type: document.querySelector('#type').value,
    img: document.querySelector('#img').value
  };
  bearz.push(newBear);
  buildABear(bearz);
  document.querySelector('#bearFormz').reset();
};

const bearFormEvents = () => {
  const bearElement = document.querySelector('#bearFormz');
  bearElement.addEventListener('submit', handleBearForm);
};

const bearForm = () => {
  const domString = `<form id="bearFormz">
    <div class="mb-3">
          <label for="text" class="form-label">Bear Name</label>
          <input required type="text" class="form-control" id="name" aria-describedby="emailHelp">
     </div>
    <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Bear Type</label>
          <input required type="text" class="form-control" id="type">
     </div>
    <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Image Link</label>
          <input required type="text" class="form-control" id="img">
    </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `;
  renderToDom('#bearForm', domString);
  bearFormEvents();
};

export default bearForm;
