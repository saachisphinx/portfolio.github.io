import './sass/main.scss';
import canvasDots from './heroCanvas';
import canvasDotsBg from './bgCanvas';

/* PROFILE */
import profileImg from './assets/imgs/newpic.png';

/* PROJECTS */
import patient2goImg from './assets/imgs/patient2go.png';
import visenImg from './assets/imgs/Visen.png';
import healcontrolImg from './assets/imgs/Healcontrol.png';
import fraudImg from './assets/imgs/project-fakejob.png';
import sentimentImg from './assets/imgs/sentiment.png';


/* SKILLS */
import sqlImg from './assets/imgs/sql.png';
import pythonImg from './assets/imgs/py.png';
import nodeImg from './assets/imgs/node.png';
import tsImg from './assets/imgs/ts.png';
import fastapiImg from './assets/imgs/fastapi.png';
import dockerImg from './assets/imgs/docker.png';
import awsImg from './assets/imgs/aws.png';
import azureImg from './assets/imgs/azure.png';
import angularImg from './assets/imgs/angular.png';
import pgImg from './assets/imgs/pg.png';
import gitImg from './assets/imgs/git.png';
import ghaImg from './assets/imgs/gha.png';

window.addEventListener('DOMContentLoaded', () => {
  canvasDotsBg();
  canvasDots();

  const profile = document.querySelector('.profile__img');
  if (profile) profile.src = profileImg;

  const patient2go = document.querySelector('.project__img--patient2go');
  if (patient2go) patient2go.src = patient2goImg;
  const visen = document.querySelector('.project__img--visen');
  if (visen) visen.src = visenImg;

  const healcontrol = document.querySelector('.project__img--healcontrol');
  if (healcontrol) healcontrol.src = healcontrolImg;

  const fraud = document.querySelector('.project__img--fraud');
  if (fraud) fraud.src = fraudImg;

  const sentiment = document.querySelector('.project__img--sentiment');
  if (sentiment) sentiment.src = sentimentImg;

  setSkill('.skills__item--sql', sqlImg);
  setSkill('.skills__item--python', pythonImg);
  setSkill('.skills__item--node', nodeImg);
  setSkill('.skills__item--ts', tsImg);
  setSkill('.skills__item--fastapi', fastapiImg);
  setSkill('.skills__item--docker', dockerImg);
  setSkill('.skills__item--aws', awsImg);
  setSkill('.skills__item--azure', azureImg);
  setSkill('.skills__item--angular', angularImg);
  setSkill('.skills__item--pg', pgImg);
  setSkill('.skills__item--git', gitImg);
  setSkill('.skills__item--gha', ghaImg);

  initExperienceCarousel();
});

function setSkill(selector, src) {
  const el = document.querySelector(selector);
  if (!el) return;

  const img = document.createElement('img');
  img.src = src;

  const label = el.textContent;
  el.textContent = '';
  el.appendChild(img);

  const span = document.createElement('span');
  span.textContent = label;
  el.appendChild(span);
}

/* FORM SAFETY */
document
  .querySelector('.contact__form-submit')
  ?.addEventListener('click', () => {
    document.querySelector('.contact__form')?.submit();
  });

/* EXPERIENCE CAROUSEL */
function initExperienceCarousel() {
  const slides = document.querySelectorAll('.experience__card');
  const dots = document.querySelectorAll('.experience__dot');
  const leftArrow = document.querySelector('.experience__arrow--left');
  const rightArrow = document.querySelector('.experience__arrow--right');
  const slidesContainer = document.querySelector('.experience__slides');

  if (!slides.length) return;

  let currentIndex = 0;

  function updateCarousel() {
    // Update slide position
    const translateX = -currentIndex * 100;
    slidesContainer.style.transform = `translateX(${translateX}%)`;

    // Update card visibility
    slides.forEach((card, idx) => {
      card.classList.toggle('experience__card--active', idx === currentIndex);
    });

    // Update dot indicators
    dots.forEach((dot, idx) => {
      dot.classList.toggle('experience__dot--active', idx === currentIndex);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  }

  // Event listeners for arrows
  if (leftArrow) leftArrow.addEventListener('click', prevSlide);
  if (rightArrow) rightArrow.addEventListener('click', nextSlide);

  // Event listeners for dots
  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      currentIndex = idx;
      updateCarousel();
    });
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });
}
