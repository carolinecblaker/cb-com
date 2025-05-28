import _ from 'lodash';
import img from './assets/img/53EE617A-796E-48FD-8120-17141EC25C13.jpg';
import imgb from './assets/img/ccb-bellrock-selfie.jpeg';
import img2 from './assets/img/sometimes_800.jpg';
import li from './assets/img/linkedin.svg';
import gh from './assets/img/github.svg';


window.addEventListener('scroll', function () {
  const parallaxElements = 
        document.querySelectorAll('.parallax-bg');
  parallaxElements.forEach(function (element) {
      let scrollPosition = window.pageYOffset;
      element.style.transform = 
            'translateY(' + scrollPosition * 0.5 + 'px)';
  });
});

//document.getElementsByTagName('footer').appendChild(component());
