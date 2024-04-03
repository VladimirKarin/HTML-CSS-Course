// The Start
// const myName = 'Vladimir Karin';
// const h1 = document.querySelector('.heading-primary');

// h1.addEventListener('click', function () {
//     h1.textContent = myName;
//     h1.style.backgroundColor = 'red';
//     h1.style.padding = '5rem';
// });

// console.log('Hello World!');
// console.log(myName);
// console.log(h1);

//Year Update
const yearElement = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

// Make mobile navigation work
const navigationButtonElement = document.querySelector('.btn-mobile-nav');
const headerElement = document.querySelector('header');

navigationButtonElement.addEventListener('click', function () {
    headerElement.classList.toggle('nav-open');
});

//Smooth Scrolling animation
const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const href = link.getAttribute('href');

        //Scroll back to the top
        if (href === '#')
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });

        // Scroll to other links
        if (href !== '#' && href.startsWith('#')) {
            const sectionElement = document.querySelector(href);
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }

        // CLose mobile navigation
        if (link.classList.contains('main-nav-link'))
            headerElement.classList.toggle('nav-open');
    });
});

// Sticky Navigation
const sectionHeroElement = document.querySelector('.section-hero');
const observer = new IntersectionObserver(
    function (entries) {
        const entry = entries[0];
        if (!entry.isIntersecting) {
            document.body.classList.add('sticky');
        }
        if (entry.isIntersecting) {
            document.body.classList.remove('sticky');
        }
    },
    {
        // In the vieport
        root: null,
        threshold: 0,
        rootMargin: '-80px',
    }
);

observer.observe(sectionHeroElement);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
    var flex = document.createElement('div');
    flex.style.display = 'flex';
    flex.style.flexDirection = 'column';
    flex.style.rowGap = '1px';

    flex.appendChild(document.createElement('div'));
    flex.appendChild(document.createElement('div'));

    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);

    if (!isSupported) document.body.classList.add('no-flexbox-gap');
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
