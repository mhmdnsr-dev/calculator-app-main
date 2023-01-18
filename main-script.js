'use strict';

// Behavior Calc
// // 1)Variable
const screen = document.querySelector('.main-screen');
const mainContainer = document.querySelector('.main-container');
const evil = function (str) {
  return new Function(`return ${str}`)();
};

// // 2)Events
mainContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('btn-del')) {
    screen.value = screen.value.slice(0, -1);
  } else if (e.target.classList.contains('btn-rst')) {
    screen.value = '';
  } else if (e.target.classList.contains('btn-eqal')) {
    try {
      screen.value = evil(screen.value);
    } catch (SyntaxError) {
      alert('Malformed expression');
    }
  } else if (e.target.tagName === 'BUTTON') {
    screen.value += e.target.textContent;
  }
});

// Themes
// // 1)Variable
const themePanal = document.querySelector('.theme-panel');
const mainPage = [document.querySelector('.main')]; //main--theme1
const floatNum = [document.querySelector('.float-num')]; //float-num--theme1
const calcTitle = [document.querySelector('.calc-title')]; //calc-title--theme1
const themeTitle = [document.querySelector('.theme-title')]; //theme-title--theme1
const themeBar = [document.querySelector('.theme-bar')]; //theme-bar--theme1
const circleTheme = [document.querySelector('.circle-theme')]; //circle-theme--theme1
const mainScreen = [document.querySelector('.main-screen')]; //main-screen--theme1
const btnContainer = [document.querySelector('.btn-container')]; //btn-container--theme1
const btnPlain = document.querySelectorAll('.btn-plain'); //btn-plain--theme1
const btnRstDel = document.querySelectorAll('.btn-rst-del'); //btn-rst-del--theme1
const btnEqal = [document.querySelector('.btn-eqal')]; //btn-eqal--theme1

const theme1Fun = function (el, theme) {
  el.forEach(el => el.classList.remove(`${theme}${2}`));
  el.forEach(el => el.classList.remove(`${theme}${3}`));
  el.forEach(el => el.classList.add(`${theme}${1}`));
};
const theme2Fun = function (el, theme) {
  el.forEach(el => el.classList.remove(`${theme}${1}`));
  el.forEach(el => el.classList.remove(`${theme}${3}`));
  el.forEach(el => el.classList.add(`${theme}${2}`));
};
const theme3Fun = function (el, theme) {
  el.forEach(el => el.classList.remove(`${theme}${1}`));
  el.forEach(el => el.classList.remove(`${theme}${2}`));
  el.forEach(el => el.classList.add(`${theme}${3}`));
};
themePanal.addEventListener('click', function (e) {
  // // 2)Events

  // BTN 1
  if (e.target.dataset.theme === '1') {
    theme1Fun(mainPage, 'main--theme');
    theme1Fun(floatNum, 'float-num--theme');
    theme1Fun(calcTitle, 'calc-title--theme');
    theme1Fun(themeTitle, 'theme-title--theme');
    theme1Fun(themeBar, 'theme-bar--theme');
    theme1Fun(circleTheme, 'circle-theme--theme');
    theme1Fun(mainScreen, 'main-screen--theme');
    theme1Fun(btnContainer, 'btn-container--theme');
    theme1Fun(btnPlain, 'btn-plain--theme');
    theme1Fun(btnRstDel, 'btn-rst-del--theme');
    theme1Fun(btnEqal, 'btn-eqal--theme');
  }

  // BTN 2
  if (e.target.dataset.theme === '2') {
    theme2Fun(mainPage, 'main--theme');
    theme2Fun(floatNum, 'float-num--theme');
    theme2Fun(calcTitle, 'calc-title--theme');
    theme2Fun(themeTitle, 'theme-title--theme');
    theme2Fun(themeBar, 'theme-bar--theme');
    theme2Fun(circleTheme, 'circle-theme--theme');
    theme2Fun(mainScreen, 'main-screen--theme');
    theme2Fun(btnContainer, 'btn-container--theme');
    theme2Fun(btnPlain, 'btn-plain--theme');
    theme2Fun(btnRstDel, 'btn-rst-del--theme');
    theme2Fun(btnEqal, 'btn-eqal--theme');
  }

  // BTN 3
  if (e.target.dataset.theme === '3') {
    theme3Fun(mainPage, 'main--theme');
    theme3Fun(floatNum, 'float-num--theme');
    theme3Fun(calcTitle, 'calc-title--theme');
    theme3Fun(themeTitle, 'theme-title--theme');
    theme3Fun(themeBar, 'theme-bar--theme');
    theme3Fun(circleTheme, 'circle-theme--theme');
    theme3Fun(mainScreen, 'main-screen--theme');
    theme3Fun(btnContainer, 'btn-container--theme');
    theme3Fun(btnPlain, 'btn-plain--theme');
    theme3Fun(btnRstDel, 'btn-rst-del--theme');
    theme3Fun(btnEqal, 'btn-eqal--theme');
  }
});
