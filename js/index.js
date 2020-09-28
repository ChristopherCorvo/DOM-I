const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



// nav1 = document.querySelector('nav a:nth-child(1)').textContent = siteContent['nav']['nav-item-1']
// nav2 = document.querySelector('nav a:nth-child(2)').textContent = siteContent['nav']['nav-item-2']
// nav3 = document.querySelector('nav a:nth-child(3)').textContent = siteContent['nav']['nav-item-3']
// nav4 = document.querySelector('nav a:nth-child(4)').textContent = siteContent['nav']['nav-item-4']
// nav5 = document.querySelector('nav a:nth-child(5)').textContent = siteContent['nav']['nav-item-5']
// nav6 = document.querySelector('nav a:nth-child(6)').textContent = siteContent['nav']['nav-item-6']

// Nav-bar
const navLinkNames = document.querySelectorAll('nav a');
// this variable contains a HTML Collection

navLinkNames[0].textContent = siteContent["nav"]['nav-item-1'];
navLinkNames[1].textContent = siteContent["nav"]['nav-item-2'];
navLinkNames[2].textContent = siteContent["nav"]['nav-item-3'];
navLinkNames[3].textContent = siteContent["nav"]['nav-item-4'];
navLinkNames[4].textContent = siteContent["nav"]['nav-item-5'];
navLinkNames[5].textContent = siteContent["nav"]['nav-item-6'];




// cta-heading --- need to add line breaks
const mainTitle = document.querySelector(".cta-text h1").textContent = siteContent["cta"]["h1"];
// cta-button
const mainButton = document.querySelector(".cta-text button").textContent = siteContent["cta"]["button"]
// cta-image
const ctaImage = document.getElementById("cta-img").setAttribute('src', siteContent['cta']['img-src'])

//  Main-content

const featuresH4 = document.querySelector('.text-content h4').textContent = siteContent['main-content']['features-h4']

const featuresContent = document.querySelector('.text-content p').textContent = siteContent['main-content']['features-content']

const aboutH4 = document.querySelector('.top-content .text-content:nth-child(2) h4').textContent = siteContent['main-content']['about-h4']

const aboutContent = document.querySelector('.top-content .text-content:nth-child(2) p').textContent = siteContent['main-content']['about-content']



const mainImage = document.getElementById('middle-img').setAttribute('src', siteContent['main-content']['middle-img-src']);


// features section 
const servicesH4 = document.querySelector('.bottom-content .text-content h4').textContent = siteContent['main-content']['services-h4'];

const servicesContent = document.querySelector('.bottom-content .text-content p').textContent = siteContent['main-content']['services-content']

const productH4 = document.querySelector('.bottom-content .text-content:nth-child(2) h4').textContent = siteContent['main-content']['product-h4']

const productContent = document.querySelector('.bottom-content .text-content:nth-child(2) p').textContent = siteContent['main-content']['product-content']

const visionH4 = document.querySelector('.bottom-content .text-content:nth-child(3) h4').textContent = siteContent['main-content']['vision-h4']

const visionContent = document.querySelector('.bottom-content .text-content:nth-child(3) p').textContent = siteContent['main-content']['vision-content']

// contact section 

const contactH4 = document.querySelector('.contact h4').textContent = siteContent['contact']['contact-h4'];

const contactAddress = document.querySelector('.contact p:nth-of-type(1)').textContent = siteContent['contact']['address'];

const phone = document.querySelector('.contact p:nth-of-type(2)').textContent = siteContent['contact']['phone'];

const email = document.querySelector('.contact p:nth-of-type(3)').textContent = siteContent['contact']['email'];


// Used a HTML Collection to solve Contact problems
// const contactP = document.querySelectorAll('.contact p');

// const contactAddress = contactP[0].textContent = siteContent['contact']['address'];

// const phone = contactP[1].textContent = siteContent['contact']['phone'];

// const email = contactP[2].textContent = siteContent['contact']['email'];

//footer section

const copyRight = document.querySelector('footer p').textContent = siteContent['footer']['copyright'];

const firstLink = document.createElement('a');
firstLink.textContent = "FirstLink"

const newLink = document.createElement('a');
newLink.textContent = "TestLink"

const navBar = document.querySelector('nav');
navBar.appendChild(newLink);

navBar.prepend(firstLink);

const navigationColor = document.querySelectorAll('a').forEach((element) => {
  element.style.color = "green";
  element.style.cursor = 'pointer';
});



const bodyColor = document.querySelector('body');
bodyColor.style.backgroundColor = "lightGray"

mainButton