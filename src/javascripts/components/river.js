import renderToDom from '../helpers/renderToDom';

const buildABear = (bearArr) => {
  let domString = '';
  bearArr.forEach((bearz) => {
    domString += `<div class="card bearz" style="width: 18rem;">
      <img src="${bearz.img}" class="card-img-top" alt="${bearz.name}">
      <div class="card-body">
        <h1 class="card-title">${bearz.name}</h1>
        <p class="card-text">${bearz.type}</p>
      </div>
    </div>
      `;
  });
  renderToDom('#bearWatch', domString);
};

export default buildABear;
