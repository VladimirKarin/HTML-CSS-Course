//Year Update
const yearElement = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

// Make mobile navigation work
const toggleMobileNav = () => {
    const headerElement = document.querySelector('header');
    headerElement.classList.toggle('nav-open');
};

const navigationButtonElement = document.querySelector('.btn-mobile-nav');
navigationButtonElement.addEventListener('click', toggleMobileNav);

//Smooth Scrolling animation
const smoothScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');

    // Scroll back to the top
    if (href === '#') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    } else if (href.startsWith('#')) {
        // Scroll to other links
        const sectionElement = document.querySelector(href);
        sectionElement.scrollIntoView({ behavior: 'smooth' });
    }

    // Close mobile navigation
    const headerElement = document.querySelector('header');
    if (e.currentTarget.classList.contains('main-nav-link')) {
        headerElement.classList.toggle('nav-open');
    }
};

const allLinks = document.querySelectorAll('a:link');
allLinks.forEach((link) => link.addEventListener('click', smoothScroll));

// Sticky Navigation
const sectionHeroElement = document.querySelector('.section-hero');
const observer = new IntersectionObserver(
    (entries) => {
        const entry = entries[0];
        document.body.classList.toggle('sticky', !entry.isIntersecting);
    },
    {
        root: null,
        threshold: 0,
        rootMargin: '-80px',
    }
);

observer.observe(sectionHeroElement);

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
    const flex = document.createElement('div');
    flex.style.display = 'flex';
    flex.style.flexDirection = 'column';
    flex.style.rowGap = '1px';

    flex.appendChild(document.createElement('div'));
    flex.appendChild(document.createElement('div'));

    document.body.appendChild(flex);
    const isSupported = flex.scrollHeight === 1;
    document.body.removeChild(flex);

    if (!isSupported) {
        document.body.classList.add('no-flexbox-gap');
    }
}

checkFlexGap();
