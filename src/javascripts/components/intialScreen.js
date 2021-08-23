import renderToDom from '../helpers/renderToDom';

const initialScreen = () => {
  const domString = `
    <div>
      <h1>Welcome to Bear Watcher!</h1>
      <p>Watch salmon leaping up the falls, while brown bears compete with each other for the best fishing spots. The largest and most successful bears can catch and eat more than 30 salmon (over 120 pounds) per day!
      Bears are most abundant at Brooks Falls in late June and July during the sockeye salmon migration, but also keep an eye out for bald eagles, lots of gulls, and maybe even the occasional wolf trying to partake in the salmon buffet.
      </p>
      <p>Track bears below!</p>
    <div id='form'></div>
    </div>
    <div class='bearCardFlex'>
      <div id='bearCards'></div>
    </div>
    <div class='bearAwardsFlex'>
      <div id='bearAwards'></div>
    </div>
  `;
  renderToDom('body', domString);
};

export default initialScreen;
