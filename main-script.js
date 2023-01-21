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
    } catch {
      alert('Malformed expression');
    }
  } else if (e.target.tagName === 'BUTTON') {
    screen.value += e.target.textContent;
  }
});

screen.addEventListener('keydown', function (e) {
  if (e.code === 'Enter') {
    try {
      screen.value = evil(screen.value);
    } catch (err) {
      alert('Malformed expression');
    }
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

const themeFun = function (el, theme, e) {
  const data = e.target.dataset.theme;
  const arr = ['1', '2', '3'];
  arr.splice(+data - 1, 1);
  el.forEach(el => el.classList.remove(`${theme}${arr[0]}`));
  el.forEach(el => el.classList.remove(`${theme}${arr[1]}`));
  el.forEach(el => el.classList.add(`${theme}${data}`));
};

themePanal.addEventListener('click', function (e) {
  // // 2)Events

  // BTN 1
  if (e.target.dataset.theme === '1') {
    themeFun(mainPage, 'main--theme', e);
    themeFun(floatNum, 'float-num--theme', e);
    themeFun(calcTitle, 'calc-title--theme', e);
    themeFun(themeTitle, 'theme-title--theme', e);
    themeFun(themeBar, 'theme-bar--theme', e);
    themeFun(circleTheme, 'circle-theme--theme', e);
    themeFun(mainScreen, 'main-screen--theme', e);
    themeFun(btnContainer, 'btn-container--theme', e);
    themeFun(btnPlain, 'btn-plain--theme', e);
    themeFun(btnRstDel, 'btn-rst-del--theme', e);
    themeFun(btnEqal, 'btn-eqal--theme', e);
  }

  // BTN 2
  if (e.target.dataset.theme === '2') {
    themeFun(mainPage, 'main--theme', e);
    themeFun(floatNum, 'float-num--theme', e);
    themeFun(calcTitle, 'calc-title--theme', e);
    themeFun(themeTitle, 'theme-title--theme', e);
    themeFun(themeBar, 'theme-bar--theme', e);
    themeFun(circleTheme, 'circle-theme--theme', e);
    themeFun(mainScreen, 'main-screen--theme', e);
    themeFun(btnContainer, 'btn-container--theme', e);
    themeFun(btnPlain, 'btn-plain--theme', e);
    themeFun(btnRstDel, 'btn-rst-del--theme', e);
    themeFun(btnEqal, 'btn-eqal--theme', e);
  }

  // BTN 3
  if (e.target.dataset.theme === '3') {
    themeFun(mainPage, 'main--theme', e);
    themeFun(floatNum, 'float-num--theme', e);
    themeFun(calcTitle, 'calc-title--theme', e);
    themeFun(themeTitle, 'theme-title--theme', e);
    themeFun(themeBar, 'theme-bar--theme', e);
    themeFun(circleTheme, 'circle-theme--theme', e);
    themeFun(mainScreen, 'main-screen--theme', e);
    themeFun(btnContainer, 'btn-container--theme', e);
    themeFun(btnPlain, 'btn-plain--theme', e);
    themeFun(btnRstDel, 'btn-rst-del--theme', e);
    themeFun(btnEqal, 'btn-eqal--theme', e);
  }
});
