import { bearFormEvents } from './formEvents';
import renderToDom from '../helpers/renderToDom';

const bearForm = () => {
  const domString = `<form id="newBearForm">
    <div class="mb-3">
          <label for="bearName" class="form-label">Bear Name</label>
          <input required type="text" class="form-control" id="bearName">
     </div>
     <label for="typeOfBear" class="form-label">Type of Bear</label>
     <select class="form-select" aria-label="Default select example" id="typeOfBear">
        <option selected>Type of Bear</option>
        <option value="Black Bear">Black Bear (Ursus americanus)</option>
        <option value="Brown Bear">Brown Bears (Ursus arctos)</option>
        <option value="Grizzly Bear">Grizzly Bears (Ursus arctos horribilis)</option>
        <option value="Polar Bear">Polar Bears (Ursus maritimus)</option>
      </select>
    <div class="mb-3">
          <label for="img" class="form-label">Image Link</label>
          <input required type="text" class="form-control" id="img">
    </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `;
  renderToDom('#formContainer', domString);
  bearFormEvents();
};

export default bearForm;
