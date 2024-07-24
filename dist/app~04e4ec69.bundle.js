(()=>{"use strict";var n,A={249:(n,A,e)=>{e.d(A,{A:()=>m});var t=e(354),r=e.n(t),i=e(314),o=e.n(i),a=e(417),p=e.n(a),d=new URL(e(263),e.b),s=new URL(e(719),e.b),E=o()(r()),B=p()(d),g=p()(s);E.push([n.id,`* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  font-family: 'Roboto', sans-serif;\n  font-size: 12px;\n  color: #212121;\n}\n\n/* skip */\n\n.skip-link {\n  position: absolute;\n  top: -40px;\n  left: 0;\n  background-color: #bf1722;\n  color: white;\n  padding: 8px;\n  z-index: 100;\n}\n \n.skip-link:focus {\n   top: 0;\n}\n\n/* loading */\n\n.hidden {\n  display: none;\n}\n\n.loading {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 1.5em;\n  background: rgba(0, 0, 0, 0.7);\n  color: white;\n  padding: 1em;\n  border-radius: 10px;\n}\n\n/* header */\n\n.header {\n  min-height: 56px;\n  transition: min-height 0.3s;\n}\n\n.app-bar__brand {\n  width: 100%;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.app-bar__brand .logo {\n  font-weight: 700;\n  font-size: 4em;\n  margin: 0.5em 0.25em;\n  display: inline-block;\n  color: #212121;\n}\n\n.app-bar .app-bar__menu button {\n  font-size: 32px;\n  margin: 10px auto;\n  display: block;\n  min-width: 44px;\n  min-height: 44px;\n  border: none;\n  background: none;\n}\n\n.app-bar .app-bar__navigation {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n}\n\n.nav__list {\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}\n\n.nav__item {\n  box-sizing: border-box;\n  display: inline-block;\n  width: 24%;\n  text-align: center;\n  line-height: 24px;\n  text-transform: uppercase;\n}\n\n.app-bar__navigation a {\n  display: inline-block;\n  padding: 1.3em;\n  text-decoration: none;\n  color: #212121;\n  font-size: 15px;\n  font-weight:700;\n}\n\n.app-bar .app-bar__navigation a:hover {\n  text-decoration: underline;\n  color: #616161;\n}\n\n/* main */\nmain {\n  width: 100%;\n  margin: 0 auto;\n}\n\n.content .content__heading {\n  font-weight: bold;\n  margin-top: 40px;\n  text-align: center;\n  font-size: 24px;\n}\n\n.restaurants {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  grid-gap: 20px;\n  padding: 0 20px;\n  margin: 32px auto auto;\n}\n\n.restaurant-item {\n  padding: 16px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  width: 100%;\n  border-radius: 5px;\n  overflow: hidden;\n  margin-bottom: 20px;\n  padding: 0;\n}\n\n.restaurant-item__image {\n  width: 100%;\n  height: 300px;\n  object-fit: cover;\n  margin-bottom: 10px;\n  padding: 0 10px;\n  border-radius: 15px;\n}\n\n.restaurant-item__content h3,\n.restaurant-item__content p {\n  margin-bottom: 5px;\n}\n\n.restaurant-item__content h3 {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.restaurant-item__content p {\n  font-size: 12px;\n  padding: 0 10px;\n}\n\n.restaurant-item__content a {\n  color: #FF0000;\n  text-decoration: none;\n  padding: 10px 44px 44px 10px;\n}\n\n.restaurant-item__content a:hover {\n  text-decoration: underline;\n}\n\n/* hero */\n/* .hero {\n  background-image: url("/src/public/images/heros/hero-image_4.jpg");\n  background-size: cover;\n  background-position: center;\n  height: 50vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  color: white;\n  padding: 0;\n  margin: 0;\n} */\n\n.hero {\n  height: 50vh;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n.hero .kata {\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 20px;\n  border-radius: 20px;\n}\n\n.hero h1 {\n  margin-bottom: 10px;\n  font-size: 1.4rem;\n}\n\n.hero p {\n  font-size: 1.2rem;\n}\n\n/* detail */\n\n.restaurant-detail {\n  padding: 20px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n  background-color: #fff;\n  margin: 20px auto;\n  max-width: 800px;\n}\n\n.restaurant__poster {\n  width: 100%;\n  height: auto;\n  border-radius: 8px;\n  margin-bottom: 20px;\n}\n\n.restaurant-detail .restaurant__name {\n  font-size: 24px;\n  font-weight: 700;\n  margin-bottom: 10px;\n}\n\n.restaurant__info h4 {\n  font-size: 16px;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n\n.restaurant__info p {\n  font-size: 16px;\n  margin-bottom: 10px;\n}\n\n.restaurant__descriptionkedua h3 {\n  font-size: 24px;\n  font-weight: 600;\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n\n.restaurant__info button {\n  display: inline-block;\n  background-color: #FF0000;\n  color: white;\n  font-size: 14px;\n  min-width: 44px;\n  min-height: 44px;\n  padding: 12px 12px;\n  margin-top: 10px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  font-weight: bold;\n  text-align: center;\n}\n\n.restaurant__info button:hover {\n  background-color: #AF0404;\n}\n\n.restaurant__menu {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n\n.restaurant__menu > div {\n  width: 100%;\n}\n\n.restaurant__menu h4 {\n  font-size: 20px;\n  margin-bottom: 5px;\n}\n\n.restaurant__menu ul {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\n.restaurant__menu li {\n  font-size: 16px;\n  margin-bottom: 5px;\n}\n\n.reviews__item {\n  margin-top: 20px;\n}\n\n.review {\n  padding: 10px;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  margin-bottom: 10px;\n}\n\n.review p {\n  margin: 5px 0;\n  font-size: 14px;\n  color: #212121;\n}\n\n.review p strong {\n  color: #212121;\n}\n\nform#reviewForm {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n}\n\nform#reviewForm label {\n  margin-bottom: 10px;\n  font-weight: bold;\n  font-size: 16px;\n}\n\nform#reviewForm input,\nform#reviewForm textarea {\n  margin-bottom: 15px;\n  padding: 10px;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  font-size: 16px;\n  min-width: 44px;\n  min-height: 44px;\n}\n\nform#reviewForm button {\n  padding: 10px 20px;\n  font-size: 14px;\n  font-weight: bold;\n  color: #ffffff;\n  background-color: #FF0000;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  transition: background-color 0.3s ease;\n  min-width: 44px;\n  min-height: 44px;\n}\n\nform#reviewForm button:hover {\n  background-color: #AF0404;\n}\n\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #FF0000;\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n\n\n/* footer */\n\n.footer {\n  background-color: #212121;\n  color: #fff;\n  padding: 2em;\n  text-align: center;\n  width: 100%;\n}\n\n.footer__copyright {\n  font-size: 14px;\n}\n\n@media screen and (max-width: 499px) {\n  .app-bar__navigation {\n      z-index: 10;\n      background-color: #fff;\n      width: 300px;\n      position: absolute;\n\n      /* This trasform moves the drawer off canvas. */\n      -webkit-transform: translate(-300px, 0);\n      transform: translate(-600px, 0);\n\n      /* Optionally, we animate the drawer. */\n      transition: transform 0.3s ease;\n  }\n\n  #navigationDrawer{\n    width: max-content;\n  }\n\n  .open {\n      -webkit-transform: translate(0, 0);\n      transform: translate(0, 0);\n  }\n\n  .nav__item {\n      display: list-item;\n      width: 100%;\n      text-align: left;\n  }\n}\n\n@media screen and (min-width: 500px) {\n  .app-bar .app-bar__menu button {\n      display: none;\n  }\n}\n\n@media screen and (max-width: 650px) {\n  .hero {\n    background-image: url(${B});\n  }\n}\n\n@media screen and (min-width: 650px) {\n  .hero {\n    background-image: url(${g});\n  }\n\n  .restaurant-item {\n    padding: 16px 32px 32px 32px;\n  }\n\n  .restaurant-item__content h3 {\n    font-size: 18px;\n  }\n\n  .restaurant-item__content p {\n    font-size: 14px;\n  }\n}\n\n@media screen and (min-width: 700px) {\n  .restaurants {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-column-gap: 10px;\n    grid-row-gap: 16px;\n  }\n}\n\n@media screen and (min-width: 800px) {\n  .nav__list {\n      max-width: 800px;\n      margin: 0 auto;\n  }\n}\n\n@media screen and (min-width: 900px) {\n  .restaurants {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n}`,"",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"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",sourcesContent:['* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  font-family: \'Roboto\', sans-serif;\n  font-size: 12px;\n  color: #212121;\n}\n\n/* skip */\n\n.skip-link {\n  position: absolute;\n  top: -40px;\n  left: 0;\n  background-color: #bf1722;\n  color: white;\n  padding: 8px;\n  z-index: 100;\n}\n \n.skip-link:focus {\n   top: 0;\n}\n\n/* loading */\n\n.hidden {\n  display: none;\n}\n\n.loading {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 1.5em;\n  background: rgba(0, 0, 0, 0.7);\n  color: white;\n  padding: 1em;\n  border-radius: 10px;\n}\n\n/* header */\n\n.header {\n  min-height: 56px;\n  transition: min-height 0.3s;\n}\n\n.app-bar__brand {\n  width: 100%;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.app-bar__brand .logo {\n  font-weight: 700;\n  font-size: 4em;\n  margin: 0.5em 0.25em;\n  display: inline-block;\n  color: #212121;\n}\n\n.app-bar .app-bar__menu button {\n  font-size: 32px;\n  margin: 10px auto;\n  display: block;\n  min-width: 44px;\n  min-height: 44px;\n  border: none;\n  background: none;\n}\n\n.app-bar .app-bar__navigation {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n}\n\n.nav__list {\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}\n\n.nav__item {\n  box-sizing: border-box;\n  display: inline-block;\n  width: 24%;\n  text-align: center;\n  line-height: 24px;\n  text-transform: uppercase;\n}\n\n.app-bar__navigation a {\n  display: inline-block;\n  padding: 1.3em;\n  text-decoration: none;\n  color: #212121;\n  font-size: 15px;\n  font-weight:700;\n}\n\n.app-bar .app-bar__navigation a:hover {\n  text-decoration: underline;\n  color: #616161;\n}\n\n/* main */\nmain {\n  width: 100%;\n  margin: 0 auto;\n}\n\n.content .content__heading {\n  font-weight: bold;\n  margin-top: 40px;\n  text-align: center;\n  font-size: 24px;\n}\n\n.restaurants {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  grid-gap: 20px;\n  padding: 0 20px;\n  margin: 32px auto auto;\n}\n\n.restaurant-item {\n  padding: 16px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  width: 100%;\n  border-radius: 5px;\n  overflow: hidden;\n  margin-bottom: 20px;\n  padding: 0;\n}\n\n.restaurant-item__image {\n  width: 100%;\n  height: 300px;\n  object-fit: cover;\n  margin-bottom: 10px;\n  padding: 0 10px;\n  border-radius: 15px;\n}\n\n.restaurant-item__content h3,\n.restaurant-item__content p {\n  margin-bottom: 5px;\n}\n\n.restaurant-item__content h3 {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.restaurant-item__content p {\n  font-size: 12px;\n  padding: 0 10px;\n}\n\n.restaurant-item__content a {\n  color: #FF0000;\n  text-decoration: none;\n  padding: 10px 44px 44px 10px;\n}\n\n.restaurant-item__content a:hover {\n  text-decoration: underline;\n}\n\n/* hero */\n/* .hero {\n  background-image: url("/src/public/images/heros/hero-image_4.jpg");\n  background-size: cover;\n  background-position: center;\n  height: 50vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  color: white;\n  padding: 0;\n  margin: 0;\n} */\n\n.hero {\n  height: 50vh;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n.hero .kata {\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 20px;\n  border-radius: 20px;\n}\n\n.hero h1 {\n  margin-bottom: 10px;\n  font-size: 1.4rem;\n}\n\n.hero p {\n  font-size: 1.2rem;\n}\n\n/* detail */\n\n.restaurant-detail {\n  padding: 20px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n  background-color: #fff;\n  margin: 20px auto;\n  max-width: 800px;\n}\n\n.restaurant__poster {\n  width: 100%;\n  height: auto;\n  border-radius: 8px;\n  margin-bottom: 20px;\n}\n\n.restaurant-detail .restaurant__name {\n  font-size: 24px;\n  font-weight: 700;\n  margin-bottom: 10px;\n}\n\n.restaurant__info h4 {\n  font-size: 16px;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n\n.restaurant__info p {\n  font-size: 16px;\n  margin-bottom: 10px;\n}\n\n.restaurant__descriptionkedua h3 {\n  font-size: 24px;\n  font-weight: 600;\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n\n.restaurant__info button {\n  display: inline-block;\n  background-color: #FF0000;\n  color: white;\n  font-size: 14px;\n  min-width: 44px;\n  min-height: 44px;\n  padding: 12px 12px;\n  margin-top: 10px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  font-weight: bold;\n  text-align: center;\n}\n\n.restaurant__info button:hover {\n  background-color: #AF0404;\n}\n\n.restaurant__menu {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n\n.restaurant__menu > div {\n  width: 100%;\n}\n\n.restaurant__menu h4 {\n  font-size: 20px;\n  margin-bottom: 5px;\n}\n\n.restaurant__menu ul {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\n.restaurant__menu li {\n  font-size: 16px;\n  margin-bottom: 5px;\n}\n\n.reviews__item {\n  margin-top: 20px;\n}\n\n.review {\n  padding: 10px;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  margin-bottom: 10px;\n}\n\n.review p {\n  margin: 5px 0;\n  font-size: 14px;\n  color: #212121;\n}\n\n.review p strong {\n  color: #212121;\n}\n\nform#reviewForm {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n}\n\nform#reviewForm label {\n  margin-bottom: 10px;\n  font-weight: bold;\n  font-size: 16px;\n}\n\nform#reviewForm input,\nform#reviewForm textarea {\n  margin-bottom: 15px;\n  padding: 10px;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  font-size: 16px;\n  min-width: 44px;\n  min-height: 44px;\n}\n\nform#reviewForm button {\n  padding: 10px 20px;\n  font-size: 14px;\n  font-weight: bold;\n  color: #ffffff;\n  background-color: #FF0000;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  transition: background-color 0.3s ease;\n  min-width: 44px;\n  min-height: 44px;\n}\n\nform#reviewForm button:hover {\n  background-color: #AF0404;\n}\n\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #FF0000;\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n\n\n/* footer */\n\n.footer {\n  background-color: #212121;\n  color: #fff;\n  padding: 2em;\n  text-align: center;\n  width: 100%;\n}\n\n.footer__copyright {\n  font-size: 14px;\n}\n\n@media screen and (max-width: 499px) {\n  .app-bar__navigation {\n      z-index: 10;\n      background-color: #fff;\n      width: 300px;\n      position: absolute;\n\n      /* This trasform moves the drawer off canvas. */\n      -webkit-transform: translate(-300px, 0);\n      transform: translate(-600px, 0);\n\n      /* Optionally, we animate the drawer. */\n      transition: transform 0.3s ease;\n  }\n\n  #navigationDrawer{\n    width: max-content;\n  }\n\n  .open {\n      -webkit-transform: translate(0, 0);\n      transform: translate(0, 0);\n  }\n\n  .nav__item {\n      display: list-item;\n      width: 100%;\n      text-align: left;\n  }\n}\n\n@media screen and (min-width: 500px) {\n  .app-bar .app-bar__menu button {\n      display: none;\n  }\n}\n\n@media screen and (max-width: 650px) {\n  .hero {\n    background-image: url("/dist/images/heros/hero-image_4-small.jpg");\n  }\n}\n\n@media screen and (min-width: 650px) {\n  .hero {\n    background-image: url("/dist/images/heros/hero-image_4-large.jpg");\n  }\n\n  .restaurant-item {\n    padding: 16px 32px 32px 32px;\n  }\n\n  .restaurant-item__content h3 {\n    font-size: 18px;\n  }\n\n  .restaurant-item__content p {\n    font-size: 14px;\n  }\n}\n\n@media screen and (min-width: 700px) {\n  .restaurants {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-column-gap: 10px;\n    grid-row-gap: 16px;\n  }\n}\n\n@media screen and (min-width: 800px) {\n  .nav__list {\n      max-width: 800px;\n      margin: 0 auto;\n  }\n}\n\n@media screen and (min-width: 900px) {\n  .restaurants {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n}'],sourceRoot:""}]);const m=E},810:(n,A,e)=>{var t=e(72),r=e.n(t),i=e(825),o=e.n(i),a=e(659),p=e.n(a),d=e(56),s=e.n(d),E=e(540),B=e.n(E),g=e(113),m=e.n(g),C=e(249),l={};l.styleTagTransform=m(),l.setAttributes=s(),l.insert=p().bind(null,"head"),l.domAPI=o(),l.insertStyleElement=B(),r()(C.A,l),C.A&&C.A.locals&&C.A.locals}},e={};function t(n){var r=e[n];if(void 0!==r)return r.exports;var i=e[n]={id:n,exports:{}};return A[n](i,i.exports,t),i.exports}t.m=A,n=[],t.O=(A,e,r,i)=>{if(!e){var o=1/0;for(s=0;s<n.length;s++){for(var[e,r,i]=n[s],a=!0,p=0;p<e.length;p++)(!1&i||o>=i)&&Object.keys(t.O).every((n=>t.O[n](e[p])))?e.splice(p--,1):(a=!1,i<o&&(o=i));if(a){n.splice(s--,1);var d=r();void 0!==d&&(A=d)}}return A}i=i||0;for(var s=n.length;s>0&&n[s-1][2]>i;s--)n[s]=n[s-1];n[s]=[e,r,i]},t.n=n=>{var A=n&&n.__esModule?()=>n.default:()=>n;return t.d(A,{a:A}),A},t.d=(n,A)=>{for(var e in A)t.o(A,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:A[e]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,A)=>Object.prototype.hasOwnProperty.call(n,A),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var A=t.g.document;if(!n&&A&&(A.currentScript&&(n=A.currentScript.src),!n)){var e=A.getElementsByTagName("script");if(e.length)for(var r=e.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=e[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{t.b=document.baseURI||self.location.href;var n={446:0};t.O.j=A=>0===n[A];var A=(A,e)=>{var r,i,[o,a,p]=e,d=0;if(o.some((A=>0!==n[A]))){for(r in a)t.o(a,r)&&(t.m[r]=a[r]);if(p)var s=p(t)}for(A&&A(e);d<o.length;d++)i=o[d],t.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return t.O(s)},e=self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[];e.forEach(A.bind(null,0)),e.push=A.bind(null,e.push.bind(e))})(),t.nc=void 0;var r=t.O(void 0,[109,27,208,74,720],(()=>t(956)));r=t.O(r)})();
//# sourceMappingURL=app~04e4ec69.bundle.js.map