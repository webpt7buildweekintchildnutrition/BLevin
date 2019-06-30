const toggleMenu = (event) => {
    // Toggle the "menu--open" class on your menu refence. 
    event.preventDefault();
    if (menu.classList.contains('menu--open')) {
      menu.classList.add('menu--close');
      menu.classList.remove('menu--open');
      nav.classList.remove('vertical-nav');
      menuIcon.classList.remove('fa-times');
      menuIcon.classList.add('fa-bars');
      
    } else {
      menu.classList.remove('menu--close');
      menu.classList.add('menu--open');
      nav.classList.add('vertical-nav');
      menuIcon.classList.remove('fa-bars');
      menuIcon.classList.add('fa-times');
    }
    event.stopPropagation();
//     body.addEventListener('click', () => { 
//       if (menu.classList.contains('menu--open')) {
//       menu.classList.add('menu--close');
//       menu.classList.remove('menu--open');
//       }
//     }
//   )
  }
  
 
  const menu = document.querySelector('.links');
  const nav = document.querySelector('nav');
  const menuButton = document.querySelector('.nav-icon');
  const menuIcon = document.querySelector('i');
  
  menuButton.addEventListener('click', toggleMenu);

  