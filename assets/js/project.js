AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");
const flutter = `<svg class="feather feather-github"  width="30" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M14.597 10.684h2.828l-5.657 5.658 5.657 5.656h-2.828L8.94 16.34l5.657-5.657zm-.194-8.68h2.829L5.918 13.318l-1.414-1.414 9.9-9.9z" fill="#429ec2" class="fill-000000"></path></svg>`;
const playStore = `<svg class="feather feather-github" id="Layer_1" width="30" height="25" style="enable-background:new 0 0 64 64;" version="1.1" viewBox="0 0 64 64" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css">
.st0{fill:#57CEF3;}
.st1{fill:#FFF200;}
.st2{fill:#48FF48;}
.st3{fill:#FF6C58;}
.st4{fill:#FF3333;}
.st5{fill:#0779E4;}
.st6{fill:#314A52;}
</style><g id="Play_Store"><polygon class="st0" points="7,3 7,61 40,32  "/><polygon class="st1" points="36,32 44,22 59,32 44,42  "/><polygon class="st2" points="36,32 7,3 11,3 45,23  "/><polygon class="st3" points="36,32 7,61 11,61 45,41  "/><path class="st4" d="M9.1,64L9.1,64c-1.9,0-3.6-1-4.5-2.6L8,58.2v0.7c0,0.3,0.1,0.6,0.3,0.8L24,44c7.4,0,14.1-1.2,18.3-3.1l5.8-3.4   v4.6L11.7,63.3C11,63.8,10.1,64,9.1,64L9.1,64z"/><path class="st5" d="M9.1,4C8.5,4,8,4.5,8,5.1V36c0,4.4,7.2,8,16,8L5.5,62.5C4.6,61.6,4,60.3,4,58.9V5.1C4,2.3,6.3,0,9.1,0V4z"/><path class="st6" d="M8.3,4.3C8.5,4.1,8.8,4,9.1,4c0.2,0,0.4,0.1,0.6,0.2l45.5,26.6C55.7,31,56,31.5,56,32c0,0.5-0.3,1-0.7,1.3   l-11.4,6.6l2.9,2.9l10.4-6.1c1.7-1,2.7-2.8,2.7-4.7c0-1.9-1-3.8-2.7-4.7L11.7,0.7C11,0.2,10.1,0,9.1,0C7.7,0,6.4,0.6,5.5,1.5   L8.3,4.3z"/></g></svg>`;
;
const appStore = `<svg  width="30" height="25" class="feather feather-github" viewBox="0 0 69.45 69.45" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style>.cls-1{fill:url(#linear-gradient);}.cls-2{fill:#fff;}</style><linearGradient gradientUnits="userSpaceOnUse" id="linear-gradient" x1="34.72" x2="34.72" y2="69.45"><stop offset="0" stop-color="#78d2f9"/><stop offset="1" stop-color="#3458e9"/></linearGradient></defs><title/><g data-name="Layer 2" id="Layer_2"><g data-name="Layer 1" id="Layer_1-2"><circle class="cls-1" cx="34.72" cy="34.72" r="34.72"/><path class="cls-2" d="M34.65,20.16l1.12-1.93a2.52,2.52,0,0,1,4.37,2.51L29.35,39.41h7.8a3.45,3.45,0,0,1,2.85,5H17.13a2.52,2.52,0,1,1,0-5h6.41l8.21-14.23-2.56-4.45a2.52,2.52,0,1,1,4.36-2.51l1.1,1.94ZM25,47l-2.42,4.2a2.52,2.52,0,0,1-4.37-2.52L20,45.6A4.32,4.32,0,0,1,25,47Zm20.83-7.6h6.54a2.52,2.52,0,0,1,0,5H48.68l2.46,4.25a2.52,2.52,0,0,1-4.37,2.52q-6.19-10.75-9.29-16.1a7,7,0,0,1,.88-8.52q2.47,4.25,7.42,12.82Z"/></g></g></svg>`;
const github = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`;
// Array of object for projects
const projects = [
  {
    title: "Wedding Counter",
    cardImage: "assets/images/project-page/wedding_counter.png",
    description: "Design your wedding countdown in different styles and themes using this app.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://play.google.com/store/apps/details?id=wedding.counter",
    Previewlink1: "",
    iconLink: playStore,
    iconLink1: ''
  },
  {
    title: "Alpha Work",
    cardImage: "assets/images/project-page/alpha_work.png",
    description: "Business management application",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "https://play.google.com/store/apps/details?id=vn.longway.s2018",
    Previewlink1: "https://apps.apple.com/vn/app/alpha-work/id1441386076",
    iconLink: playStore,
    iconLink1: appStore
  },
  {
    title: "Compose Nav Library",
    cardImage: "https://2.bp.blogspot.com/--asT-h3qn_s/X0aLtRWOesI/AAAAAAAAPkY/iOkd702WAts7_4dIXlzQhyiJWGaL5f9CgCLcBGAsYHQ/s1600/JetpackCompose_logo.png",
    description: "Navigation Library for Jetpack Compose Android",
    tagimg: "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "https://github.com/doctor-blue/compose-navigation",
    Previewlink1: "https://github.com/doctor-blue/compose-navigation",
    iconLink: github,
    iconLink1: ''
  },
  {
    title: "Moony",
    cardImage: "assets/images/project-page/moony.png",
    description: 'Personal financial management application',
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://play.google.com/store/apps/details?id=com.moony.calc",
    Previewlink1: "https://github.com/doctor-blue/moony-calc",
    iconLink: playStore,
    iconLink1: github
  },
  {
    title: "Lambda",
    cardImage: "assets/images/project-page/lambda.png",
    description: 'IoT application.This application makes some devices smart and easy to control.',
    tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
    Previewlink: "https://play.google.com/store/apps/details?id=vn.longway.smart",
    Previewlink1: "https://apps.apple.com/vn/app/lamda-smart/id1531613315",
    iconLink: playStore,
    iconLink1: appStore
  },
  {
    title: "MoonyNavBar",
    cardImage: "assets/images/project-page/moony_nav_bar.gif",
    description: 'A lightweight Android and Flutter bottom bar library. Simple and easy to use.',
    tagimg: "data:image/png;base64,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",
    Previewlink: "https://github.com/doctor-blue/moony_nav_bar_android",
    Previewlink1: "https://pub.dev/packages/moony_nav_bar",
    iconLink: playStore,
    iconLink1: flutter
  },
  {
    title: "Color Detector",
    cardImage: "assets/images/project-page/color_detector.png",
    description: `An open source project I'm building to be able to detect color directly on the user's camera.`,
    tagimg: "https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png",
    Previewlink: "https://play.google.com/store/apps/details?id=com.doctorblue.colordetector",
    Previewlink1: "https://github.com/doctor-blue/Color-Detector",
    iconLink: playStore,
    iconLink1: github
  },
  {
    title: "Been Together",
    cardImage: "assets/images/project-page/been_love.png",
    description:
      'Been Together - Been Love Memory app is essential for couples or people in love to tracker anniversary day',
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://play.google.com/store/apps/details?id=couplelove.beentogether.beenlovememory",
    Previewlink1: "",
    iconLink: playStore,
    iconLink1: ''
  },
  {
    title: "Pedometer",
    cardImage: "assets/images/project-page/pedometer.png",
    description: "Application includes: Use the built-in sensors to count your steps.Calculate how many calories you consumed",
    tagimg: "data:image/png;base64,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",
    Previewlink: "https://play.google.com/store/apps/details?id=com.doctor.blue.pedometer_countyoursteps",
    Previewlink1: "",
    iconLink: playStore,
    iconLink1: ''
  },
  {
    title: "Super Touch",
    cardImage: "assets/images/project-page/super_touch.png",
    description:
      "This is my Open Source Project. This is a similar AssistiveTouch simulation Android project on iphone.",
    tagimg: "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "https://github.com/doctor-blue/SuperTouch",
    Previewlink1: "https://github.com/doctor-blue/SuperTouch",
    iconLink: github,
    iconLink1: ''
  },
  {
    title: "More than that?",
    cardImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png",
    description: "Github",
    tagimg: "https://cdn-images-1.medium.com/max/1200/1*iDQvKoz7gGHc6YXqvqWWZQ.png",
    Previewlink: "https://github.com/doctor-blue",
    Previewlink1: "https://github.com/doctor-blue",
    iconLink: github,
    iconLink1: ''
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, cardImage, tags, Previewlink, Previewlink1, iconLink, iconLink1 }) => {
      (output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h3 class="title"><a href="#">${title}</a></h3>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon">${iconLink}</a></li>
                  <li><a href="${Previewlink1}" class="social-icon">${iconLink1}</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`
      )
    }
  );
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}