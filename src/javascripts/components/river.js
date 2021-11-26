import renderToDom from '../helpers/renderToDom';

const newBearAlert = (allBears) => {
  let domString = '';
  allBears.forEach((bear) => {
    domString += `<div class="bearDisplay" style="width: 18rem;">
      <img src="${bear.img}" class="card-img-top" alt="${bear.bearName}">
      <div class="card-body">
        <h1 class="card-title">${bear.bearName}</h1>
        <hr>
        <h3 class="card-text">${bear.typeOfBear}</h3>
      </div>
    </div>
      `;
  });
  renderToDom('#bearTracker', domString);
};

export default newBearAlert;
