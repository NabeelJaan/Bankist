'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

//Tabs Component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function(e){
  const btnClicked = e.target.closest('.operations__tab');
  //Guard Clause
  if (!btnClicked) return;
  tabs.forEach( t => t.classList.remove('operations__tab--active'));
  btnClicked.classList.add('operations__tab--active');

  // Activate the content area
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  const tabsContentArea = document.querySelector(`.operations__content--${btnClicked.dataset.tab}`).classList.add('operations__content--active');

});



////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
const header = document.querySelector('.header');

// Create Elements

const message = document.createElement('div');

message.classList.add('cookie-message');

message.innerHTML = 'Agree. <button class="btn btn--close--cookie">Got it!</button>';

header.append(message);

header.after(message);

document.querySelector('.btn--close--cookie').addEventListener( 'click', function(){
  message.remove();
});

message.style.backgroundColor = 'red';

/////////////////////////////////////////////////////////////////

