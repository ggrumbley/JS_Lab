import { Story } from 'inkjs';
// import * as S from './ink-stories/vastDesert';
import * as S from './ink-stories/vastDesert2';
// import jsonStory from './ink-stories/vastDesert.json';
import './style.css';

const story = new Story(S.storyContent);
// const story = new Story(jsonStory);

const storyContainer = document.getElementById('story');
const waterElement = document.getElementById('water');
const positionElement = document.getElementById('position');
const northElement = document.getElementById('north');

northElement.addEventListener('click', function (event) {
  story.EvaluateFunction('goNorth');
  story.ChooseChoiceIndex(0);
  continueStory();
});

const southElement = document.getElementById('south');

southElement.addEventListener('click', function (event) {
  story.EvaluateFunction('goSouth');
  story.ChooseChoiceIndex(0);
  continueStory();
});

const westElement = document.getElementById('west');

westElement.addEventListener('click', function (event) {
  story.EvaluateFunction('goWest');
  story.ChooseChoiceIndex(0);
  continueStory();
});

const eastElement = document.getElementById('east');

eastElement.addEventListener('click', function (event) {
  story.EvaluateFunction('goEast');
  story.ChooseChoiceIndex(0);
  continueStory();
});

function refreshWater() {
  waterElement.innerHTML = story.EvaluateFunction('currentWater', [], true).output;
}

function refreshPosition() {
  positionElement.innerHTML = story.EvaluateFunction('currentPosition', [], true).output;
}

function continueStory() {
  // Get ink to generate the next paragraph
  const paragraphText = story.Continue();

  // Create paragraph element (initially hidden)
  const paragraphElement = document.createElement('p');
  paragraphElement.innerHTML = paragraphText;
  storyContainer.appendChild(paragraphElement);

  refreshWater();
  refreshPosition();
}

continueStory();
