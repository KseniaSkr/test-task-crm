'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const pages = document.querySelectorAll('.members__page');

  pages.forEach(function(page, index) {
    if (index !== 0 && index !== pages.length - 1) {
      page.addEventListener('click', function() {
        pages.forEach(function(p) {
          p.classList.remove('members__page--active');
        });
        this.classList.add('members__page--active');
      });
    }
  });
});

window.onload = () => {
  const input = document.querySelector('#search');

  input.oninput = function() {
    const value = this.value.trim().toLowerCase();
    const list = document.querySelectorAll('.table__customer');

    list.forEach((elem) => {
      const customerInfo = elem.innerText.toLowerCase();

      if (customerInfo.includes(value)) {
        elem.style.display = 'table-row';
      } else {
        elem.style.display = 'none';
      }
    });
  };
};

document.addEventListener('DOMContentLoaded', function() {
  const openButton = document.querySelector('.open');
  const sidebar = document.querySelector('.sidebar');
  const tabletWidth = 700;
  const tabletPosition = '262px';
  const mobilePositionClosed = '-12px';
  const mobilePositionOpen = '90px';

  openButton.addEventListener('click', function(event) {
    event.preventDefault();
    sidebar.classList.toggle('sidebar--open');

    if (sidebar.classList.contains('sidebar--open')) {
      openButton.style.left = window.innerWidth >= tabletWidth
        ? tabletPosition : mobilePositionOpen;
    } else {
      openButton.style.left = mobilePositionClosed;
    }
  });

  function handleTabletScreen(event) {
    if (event.matches) {
      if (sidebar.classList.contains('sidebar--open')) {
        openButton.style.left = tabletPosition;
      } else {
        openButton.style.left = mobilePositionClosed;
      }
    } else {
      if (sidebar.classList.contains('sidebar--open')) {
        openButton.style.left = mobilePositionOpen;
      } else {
        openButton.style.left = mobilePositionClosed;
      }
    }
  }

  const tabletMediaQuery = window.matchMedia(`(min-width: ${tabletWidth}px)`);

  tabletMediaQuery.addListener(handleTabletScreen);
  handleTabletScreen(tabletMediaQuery);
});
