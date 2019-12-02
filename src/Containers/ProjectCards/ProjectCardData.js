import inCollaboration from "../../static/images/inCollaboration.png";
import mineSweeper from "../../static/images/mineSweeper.png";
import randomGroupGenerator from "../../static/images/randomGroupGenerator.png";
import gmScreen from "../../static/images/gmScreen.png";
import kidie from "../../static/images/kidie.png";
import aliens from "../../static/images/aliens.png";

const data = [
  {
    title: "In Collaboration",
    link: "https://incollaboration.nology.io/login",
    githubLink: "https://github.com/nology-tech/in-collaboration",
    imageLink: inCollaboration,
    techStack:
      "React.js, Travis, Firebase, SCSS, Facebook authentication and Graph API",
    description:
      "In Collaboration is an MVP created in four works of the course at _nology created entirely in React. The project completion was the product of myself and the 8 other students on the course. My specific areas I worked on were set up of Travis CI, Facebook authorisation and login, and context. The biggest challenge was restricting login to only members of a specific Facebook group."
  },
  {
    title: "Random group generator",
    link: "https://groups.matthewbickell.co.uk",
    githubLink: "https://github.com/mbickell/random-group-generator",
    imageLink: randomGroupGenerator,
    techStack: "JS, JQuery, CSS, HTML",
    description:
      "This was a personal interest project initially made in the 3rd week of the course and consistently worked on throughout. I found we were wasting time trying to pick groups to work in and weren't getting to work with everyone, so in order to work with other people I created the random group generator."
  },
  {
    title: "GM screen",
    link: "https://gm-screen.matthewbickell.co.uk",
    githubLink: "https://github.com/mbickell/gm-screen-plus-react",
    imageLink: gmScreen,
    techStack: "React.js, SCSS, Firebase, API's",
    description:
      "Another personal interest project. I enjoy running games Dungeons and Dragons but I didn't like that there were no easy to use online tools available to facilitate the running of the game. I created the GM Screen + to better run my games and keep all information related to it in the same place. This is very much a work in progress but combines the uses of React, API's and Firebase databases to create a more fully fledged product and is being worked on incrementally."
  },
  {
    title: "Minesweeper",
    link: "http://minesweeper.matthewbickell.co.uk/",
    githubLink: "https://github.com/mbickell/minesweeper",
    imageLink: mineSweeper,
    techStack: "Vanilla JS, CSS, HTML",
    description:
      "This was a challenge given to me by a trainer at _nology. The objective was to generate a minesweeper playing field, the initial challenge was to create a field of 15x15 squares, populate it with 30 mines and generate the clues. You can regenerate the field by refreshing the page."
  },
  {
    title: "KIDIE Calendar",
    link: "https://kidie.matthewbickell.co.uk",
    githubLink: "https://github.com/mbickell/kidie",
    imageLink: kidie,
    techStack: "React.js, SCSS, Firebase, Google calendar API",
    description:
      "A brief at _nology to use the Google calendar API to display the dates of events of a fictional dance institute. The challenge here was discovering how to use the API based purely on the documentation. Once this had been achieved the data needed to be reformatted to more easily display and filter the events. As an added bonus I safely hosted the website by securing the API key and used an additional API to generate the random background images that are displayed on reload."
  },
  {
    title: "Hostile Aliens",
    link: "https://aliens.matthewbickell.co.uk",
    githubLink: "https://github.com/mbickell/hostile-aliens-brief",
    imageLink: aliens,
    techStack: "Vanilla JS, CSS, HTML",
    description:
      "A brief at _nology to create a simple game. The challenge here was to focus on object oriented programming and to unit test the site. It's a simple premise, click the fire button to randomly deal damage to a ship. Once a ship is destroyed it can no longer be hit. Keep clicking until all ships are destroyed. If the mothership is destroyed then the game is won. Push reset to reset the game field."
  }
];

export default data;
