let lastPageYOffset = 0;
let userScroll = false;
let scrollTimeout;

document.querySelectorAll('.js-sidebar-button').forEach((button) => {
  button.addEventListener('click', () => {
    userScroll = true;
  });
});

window.onscroll = function () {
  const { innerHeight } = window;
  const pageYOffset = window.pageYOffset || document.documentElement.scrollTop;

  const sidebarStyle = document.querySelector('.js-sidebar').style;
  let margin = pageYOffset - innerHeight;
  if (margin < 0) {
    margin = 0;
  }
  sidebarStyle.marginTop = `${margin}px`;

  clearTimeout(scrollTimeout);

  scrollTimeout = setTimeout(() => {
    userScroll = false;
  }, 200);

  if (
    document.body.scrollTop > innerHeight ||
    document.documentElement.scrollTop > innerHeight
  ) {
    if (pageYOffset < lastPageYOffset && !userScroll) {
      // scrolling up
      showHeader();
    } else {
      // scrolling down
      hideHeader();
    }
  } else {
    // show header when at the start screen of the page
    showHeader();
  }
  lastPageYOffset = pageYOffset <= 0 ? 0 : pageYOffset;
};

function hideHeader() {
  document.querySelector('.js-header').style.opacity = '0';
  document.querySelector('.js-header').style.pointerEvents = 'none';
}

function showHeader() {
  document.querySelector('.js-header').style.opacity = '1';
  document.querySelector('.js-header').style.pointerEvents = 'auto';
}
