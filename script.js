function scrollToo(section) {
  let gap = 0;
  if (window.screen.availWidth > 900) {
    gap = -180;
  }
  else {
    gap = -130;
  }
  closeMenu();
  let childElement = document.getElementById(section).children[0];
  if (childElement.tagName = 'hr')
    childElement = document.getElementById(section).children[1];
  window.scrollTo(0, gap + window.scrollY + childElement.getBoundingClientRect().y);
}

// Hamburger Menu
var menu = document.getElementById("header-menu2");
var logo = document.getElementById("header-logo");
var hamburger = document.getElementById("header-hamburger-icon");
var header = document.getElementsByTagName("header")[0];
var updated_header_color = document.getElementsByTagName("header").color;
function toggleMenu() {
  if (menu.style.display === "flex") {
    closeMenu();
  } else {
    openMenu();
  }
}
function closeMenu() {
  menu.style.display = "none";
  logo.src = "img/icon-irc-white.png";
  hamburger.src = "img/icon-hamburger.png"
  header.style.backgroundColor = updated_header_color;
  document.getElementsByTagName("html")[0].style.overflowY = "scroll"
}
function openMenu() {
  menu.style.display = "flex";
  logo.src = "img/icon-irc.png";
  hamburger.src = "img/icon-close-button.png"
  header.style.backgroundColor = "white";
  document.getElementsByTagName("html")[0].style.overflowY = "hidden"
}
window.addEventListener('resize', closeMenu);

// Popup

function showPopup(popupId) {
  document.getElementsByTagName("html")[0].style.overflowY = "hidden"
  document.getElementById(popupId).style.display = "flex";

  // document.getElementById(popupId).style.opacity = 0;
  // setTimeout(function () {
  //   document.getElementById(popupId).style.opacity = 1;
  // }, 100);
}
function closePopup(popupId) {
  document.getElementsByTagName("html")[0].style.overflowY = "scroll"
  document.getElementById(popupId).style.display = "none";

  // setTimeout(function () {
  //   document.getElementById(popupId).style.opacity = 0;
  // }, 100);
  // setInterval(function () {
  //   document.getElementById(popupId).style.display = "none";
  // }, 100);
}

// Projects

projects = [
  {},
  // 1
  {
    title: 'RiseUp! razvojni program',
    subtitle: 'okt 2022 - jun 2023',
    description: 'Zvaničan razvojni program IRC-a namenjen studentima osnovih i master studija. Program ima za cilj unapređenje znanja studenata, sticanje veština i iskustva u 11 različitih menadžment i IT oblasti, kao i razvoj studentskih tech i biznis ideja. Aktivnosti u okviru RiseUp! razvojnog programa organizovane su kroz tri nivoa: Enrolment, Capacity Building i Ready to Go! nivo.',
    metric: ['281', '17'],
    matricDescription: ['Broj učesnika', 'Broj predavača'],
    partners: [],
    buttonLink: 'http://www.fon.bg.ac.rs/2022/10/28319/',
    color: "84d4fc",
    filter: "brightness(0) saturate(100%) invert(69%) sepia(47%) saturate(404%) hue-rotate(165deg) brightness(105%) contrast(98%)"
  },
  // 2
  {
    title: 'Endava Training Program',
    subtitle: 'mart 2023',
    description: 'Endava Project Management Training Program je program namenjen studentima starijih godina i master studija radi edukacije o osnovnim principima upravljanja IT projekata sa fokusom na Agilni pristup u razvoju softverskih proizvoda, Biznis analizu kao posebnu disciplinu i DevOps principe i metodologije rada.',
    metric: ['26'],
    matricDescription: ['Broj učesnika'],
    partners: ['Endava'],
    buttonLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7046861377067442179',
    color: "e46414",
    filter: "brightness(0) saturate(100%) invert(61%) sepia(55%) saturate(6382%) hue-rotate(357deg) brightness(96%) contrast(87%)"
  },
  // 3
  {
    title: 'Route2Launch program',
    subtitle: 'prvi ciklus jul-dec 2022, drugi ciklus mart-jul 2023',
    description: 'Startap mentorski program koji omogućava kontinuirano mentorstvo s ciljem testiranja startup ideje, razvoj skalabilnog biznis modela, podršku u izradi MVP verzije proizvoda, priliku za networking i prve investicije, kao i prostor za zajednički rad i druženje. Mentori na programu su obučeni nastavnici i saradnici FON-a u saradnji sa ekspertima iz startap ekosistema, a dodatnu podršku u razvoju prve verzije proizvoda obezbedila je partnerska kompanija FON-a, 30 Hills. “Route2Launch” program deo je projekta Preduzmi ideju koji FON realizuje sa Inicijativom Digitalna Srbija i partnerskim organizacijama iz startap ekosistema, a uz podršku USAID-a.',
    metric: ['7', '42', '93,3'],
    matricDescription: ['Broj fakulteta', 'Broj učesnika', 'Net promoter score'],
    partners: ['Inicijativa Digitalna Srbija', 'USAID', '30Hills'],
    buttonLink: 'http://www.fon.bg.ac.rs/2023/03/otvorene-prijave-za-route2launch2-startap-mentorski-program/',
    color: "d41c4c",
    filter: "brightness(0) saturate(100%) invert(19%) sepia(58%) saturate(4023%) hue-rotate(327deg) brightness(93%) contrast(101%)"
  },
  // 4
  {
    title: 'Inicijativa FON Ideje',
    subtitle: 'maj-dec 2023',
    description: '„FON Ideje – podrška projektima zaposlenih FON-a“ je inicijativa koja ima za cilj motivaciju i podsticanje zaposlenih na davanje doprinosa pozitivnim promenama u okviru određene od oblasti ili procesa rada na Fakultetu. Timovi zaposlenih nastavnika i saradnika na FON-u prezentovali su rukovodstvu i predstavnicima eksternih partnera predloge projekata za unapređenje rada Fakulteta.',
    metric: ['12'],
    matricDescription: ['Broj timova'],
    partners: [],
    buttonLink: 'https://www.instagram.com/p/Crioh7OMgNW/',
    color: "795a45",
    filter: "brightness(0) saturate(100%) invert(37%) sepia(32%) saturate(472%) hue-rotate(341deg) brightness(93%) contrast(92%)"
  },
  // 5
  {
    title: 'Skyrocket Account Management Academy',
    subtitle: 'mart-april 2023',
    description: 'Account Management Akademija namenjena studentima osnovnih i master studija radi edukacije u oblastima account management-a, project panagement-a, marketinga i finansija. Kroz niz interaktivnih radionica i zadataka, polaznici su pripremani za poziciju Account Manager-a.',
    metric: ['15', '100'],
    matricDescription: ['Broj učesnika', 'Net promoter score'],
    partners: ['CodeIT', 'GrowIt Agile'],
    buttonLink: 'https://www.sama.edu.rs',
    color: "5c54fc",
    filter: "brightness(0) saturate(100%) invert(38%) sepia(73%) saturate(5770%) hue-rotate(235deg) brightness(101%) contrast(98%)"
  },
  // 6
  {
    title: 'ERP Akademija',
    subtitle: 'april-jun 2023',
    description: 'ERP Akademija je program namenjen studentima završnih godina i master studija za edukaciju o najsavremenijim tehnologijama u primeni ERP sistema. Akademija obuhvata obuku o ulozi F&O konsultanta, procesima migracije podataka i projektnom menadžmentu, pružajući studentima praktične veštine i znanja neophodna za uspešnu karijeru u ovoj oblasti.',
    metric: ['27', '80'],
    matricDescription: ['Broj učesnika', 'Net promoter score'],
    partners: ['Sa.Global'],
    buttonLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7071934116937539584/',
    color: "e46414",
    filter: "brightness(0) saturate(100%) invert(61%) sepia(55%) saturate(6382%) hue-rotate(357deg) brightness(96%) contrast(87%)"
  },
  // 7
  {
    title: 'Expert2Mentors trening program',
    subtitle: 'maj-jun 2023',
    description: 'Trening program za nastavnike i saradnike fakulteta Univerziteta u Beogradu koji ima za cilj unapređenje mentorskih veština za rad sa studentskim startap timovima. Sa polaznicima programa su kroz ekspertske sesije radili eksperti iz domaćeg i stranih startup ekosistema. Trening program deo je projekta Preduzmi ideju koji FON realizuje sa Inicijativom Digitalna Srbija i partnerskim organizacijama iz startap ekosistema, a uz podršku USAID-a.',
    metric: ['6', '26', '8'],
    matricDescription: ['Broj fakulteta', 'Broj polaznika', 'Broj predavača'],
    partners: ['Inicijativa Digitalna Srbija', 'USAID'],
    buttonLink: 'http://www.fon.bg.ac.rs/2023/06/uspesno-zavrsen-drugi-ciklus-expert2mentors-trening-programa-za-unapredjenja-startap-mentorskih-vestina-nastavnika/',
    color: "dc1c4c",
    filter: "brightness(0) saturate(100%) invert(18%) sepia(99%) saturate(4527%) hue-rotate(337deg) brightness(90%) contrast(90%)"
  },
  // 8
  {
    title: 'Florence Days',
    subtitle: 'maj 2023',
    description: 'Niz radionica u saradnji sa kompanijom Florence podeljenih na dve tematske celine: “Kompanijska kultura” i “Priprema za tehnički deo intervjua za poziciju Software Developer-a”.',
    metric: ['14'],
    matricDescription: ['Broj učesnika'],
    partners: ['Florence'],
    buttonLink: 'https://www.instagram.com/p/Cs3hnmqMF1p/?utm_source=ig_web_copy_link&igshid=MmJiY2I4NDBkZg==',
    color: "5c54fc",
    filter: "brightness(0) saturate(100%) invert(38%) sepia(73%) saturate(5770%) hue-rotate(235deg) brightness(101%) contrast(98%)"
  },
  // 9
  {
    title: 'Open Data takmičenje',
    subtitle: 'okt-dec 2022',
    description: 'Studentsko takmičenje u oblasti otvorenih podataka organizovano u saradnji sa konsultantskom kompanijom Egzakta Advisory. Kroz dva kruga takmičenja, timovi su, uz podršku mentora, dali rešenje na definisane zadatke od strane kompanije, a za tri najbolja tima su obezbeđene nagrade.',
    metric: ['6', '64'],
    matricDescription: ['Broj fakulteta', 'Broj učesnika'],
    partners: ['Egzakta Advisory'],
    buttonLink: 'http://www.fon.bg.ac.rs/2022/10/otvoreni-podaci-info-dan-i-studentsko-takmicenje-u-saradanji-sa-kompanijom-egzakta-advisory/',
    color: "bb9d64",
    filter: "brightness(0) saturate(100%) invert(60%) sepia(64%) saturate(272%) hue-rotate(1deg) brightness(94%) contrast(83%)"
  },
  // 10
  {
    title: 'Rénovation Retail Case Challenge',
    subtitle: 'maj 2023',
    description: 'Takmičenje na kome su studentski timovi dali rešenje na izazove u retail industriji nastalih usled promene šoping kulture. Pored takmičarskog dela je organizovan i jednodnevni trening na kome su prijavljeni timovi dobili znanja i veštine potrebne za rešavanje studije slučaja. Za najbolje timove i prezentera su obezbeđene nagrade. Prvi “rénovation” case challenge organizovan je u saradnji sa kompanijom MPC Properties, u okviru projekta “Preduzmi ideju”.',
    metric: ['4', '28'],
    matricDescription: ['Broj fakulteta', 'Broj učesnika'],
    partners: ['MPC Properties'],
    buttonLink: 'http://www.fon.bg.ac.rs/2023/05/studenti-predlozili-unapredjenje-soping-iskustva-u-mpc-properties-trznim-centrima-na-prvom-renovation-case-challenge-u/',
    color: "e46414",
    filter: "brightness(0) saturate(100%) invert(61%) sepia(55%) saturate(6382%) hue-rotate(357deg) brightness(96%) contrast(87%)"
  },
  // 11
  {
    title: 'OTP Youth Hub',
    subtitle: 'mart-april 2023',
    description: 'OTP Youth Hub je niz radionica na kojima su studenti imali priliku da ovladaju metodologijom Design Thinking-a, osnovama Data Science-a, veštinama kreiranja digitalnih proizvoda, osnovama digitalnog marketinga i načinom na koji se danas ove metodologije koriste za kreiranje finansijskih proizvoda u bankarstvu.',
    metric: ['46'],
    matricDescription: ['Broj učesnika'],
    partners: ['OTP Banka'],
    buttonLink: 'http://www.fon.bg.ac.rs/2023/02/prijavi-se-za-otp-youth-hub-trening-program-koji-organizuje-otp-banka/',
    color: "045434",
    filter: "brightness(0) saturate(100%) invert(22%) sepia(14%) saturate(6102%) hue-rotate(128deg) brightness(93%) contrast(97%)"
  },
  // 12
  {
    title: 'Humanitarni projekat: EmpowerIT',
    subtitle: 'sept 2022 - jan 2023',
    description: 'Empower IT izazov je takmičenje studentskih timova u kreiranju rešenja koja mogu unaprediti i pomoći rad Centra za integraciju mladih (Svratište za decu, Beograd). Studentski timovi su imali priliku da kreiraju inovativno idejno IT rešenje na zadati izazov, uz učenje i rad sa mentorima partnera projekta u oblasti IT, finansija i pravnih aspekata.',
    metric: ['9'],
    matricDescription: ['Broj učesnika'],
    partners: ['Manpower Srbija'],
    buttonLink: 'http://www.fon.bg.ac.rs/2022/09/empower-it-humanitarni-it-izazov-za-studente-uz-nagradu-za-najbolji-tim/',
    color: "fc9404",
    filter: "brightness(0) saturate(100%) invert(73%) sepia(40%) saturate(6182%) hue-rotate(360deg) brightness(103%) contrast(98%)"
  },
  // 13
  {
    title: 'Predavanje: Gde žive podaci',
    subtitle: 'novembar 2022',
    description: 'Radionica “Gde žive podaci” je organizovana na temu tvorenih podataka u saradnji sa Kancelarijom za IT i E-upravu, a uz podršku Programa Ujedinjenih nacija za razvoj. Studenti su imali priliku da se upoznaju sa konceptom open data-e i saznaju gde sve mogu da ih pronađu i kako da ih iskoriste.',
    metric: ['83'],
    matricDescription: ['Broj učesnika'],
    partners: ['Kancelarija za IT i eUPRAVU', 'UNDP'],
    buttonLink: 'https://www.instagram.com/p/CkyDt2jqPk2/?utm_source=ig_web_copy_link&igshid=MmJiY2I4NDBkZg==',
    color: "0d2c44",
    filter: "brightness(0) saturate(100%) invert(13%) sepia(9%) saturate(6597%) hue-rotate(174deg) brightness(94%) contrast(94%)"
  },
  // 14
  {
    title: 'International Programming Contest',
    subtitle: 'novembar 2022',
    description: 'Proggy-Buggy internacionalno takmičenje u programiranju okupilo je studente koji su se prijavili kako individualno, tako i u timovima, kako bi testirali svoje veštine i takmičili se u programiranju. Cilj takmičenja bio je rešiti 13 različitih zadataka za 42 minuta, a učesnici su imali priliku da pokažu svoje programerske veštine i kreativnost u rešavanju složenih problema.',
    metric: ['6'],
    matricDescription: ['Broj učesnika'],
    partners: ['Data Art'],
    buttonLink: 'https://www.instagram.com/p/Ckf60xdKiEF/',
    color: "74549c",
    filter: "brightness(0) saturate(100%) invert(37%) sepia(7%) saturate(4253%) hue-rotate(224deg) brightness(92%) contrast(81%)"
  },
  // 15
  {
    title: 'Interni razvoj i deljenje znanja',
    subtitle: 'maj-jun 2023',
    description: 'Predavanja i diskusije za zaposlene FON-a.',
    metric: ['10', '28'],
    matricDescription: ['Broj nastavnika i saradnika', 'Broj učesnika'],
    partners: ['Aleksandar Bjelić (MVP Workshop)', 'prof. dr Dragan Vukmirović (redovni profesor FON-a)'],
    buttonLink: '',
    color: "15446c",
    filter: "brightness(0) saturate(100%) invert(18%) sepia(75%) saturate(970%) hue-rotate(177deg) brightness(96%) contrast(91%)"
  },
  // 16
  {
    title: 'Specijalni Startup Pitch Rehearsals',
    subtitle: 'feb-jun 2023',
    description: 'Probne prezentacije timova i timskih rešenja kao priprema za apliciranje na programe i projekte podrške, poput Circle U, FON Fazon Eko-challenge. Pored studenata FON-a, svoje probne prezentacije su izneli i preporučeni eksterni timovi.',
    metric: ['48'],
    matricDescription: ['Broj učesnika'],
    partners: ['Inicijativa Digitalna Srbija', 'prof. dr Nataša Petrović'],
    buttonLink: '',
    color: "d40c0c",
    filter: "brightness(0) saturate(100%) invert(11%) sepia(71%) saturate(7239%) hue-rotate(358deg) brightness(95%) contrast(96%)"
  },
  // 17
  {
    title: 'Nedelja studentskih ideja',
    subtitle: 'decembar 2022',
    description: 'Trodnevni događaj namenjen popularizaciji preduzetništva i razvoja studentskih startap ideja. Nedelja studentskih ideja održava se u okviru projekta “Preduzmi ideju” koji FON realizuje sa Inicijativom Digitalna Srbija i partnerima, a uz podršku USAID-a.',
    metric: ['17', '112'],
    matricDescription: ['Broj kolaboratora i predavača', 'Broj učesnika'],
    partners: [],
    buttonLink: 'https://www.linkedin.com/posts/faculty-of-organizational-sciences_nsi22-nedeljastudenstkihideja-preduzmiideju-activity-7010923555089461248--xg5/?utm_source=share&utm_medium=member_desktop',
    color: "dc1c4c",
    filter: "brightness(0) saturate(100%) invert(18%) sepia(99%) saturate(4527%) hue-rotate(337deg) brightness(90%) contrast(90%)"
  },
]

function returnPartnerString(i) {
  let finalPartnerString = ''

  if (projects[i].partners && projects[i].partners.length > 0) {
    finalPartnerString =
      `
        <div class="popup-container-partneri">
          <div class="popup-title-partneri">Partneri:</div>\n
          <div class="popup-partneri-container">
      `
    for (let j = 0; j < projects[i].partners.length; j++) {
      finalPartnerString = finalPartnerString + '<div class="popup-partner"><b style="color: #' + projects[i].color + ';">•</b> ' + projects[i].partners[j] + '</div>\n'
    }
    
    finalPartnerString = finalPartnerString + '\n</div></div>'
  }
  return finalPartnerString
}

function returnCorrectMetricString(i) {
  let finalMetricString = ''
  let imageLink = ''
  for (let j = 0; j < projects[i].metric.length; j++) {

    switch (projects[i].matricDescription[j]) {
      case 'Broj učesnika':
        imageLink = 'img/metric/ucesnik.svg'
        break;
      case 'Broj polaznika':
        imageLink = 'img/metric/ucesnik.svg'
        break;
      case 'Broj timova':
        imageLink = 'img/metric/ucesnik.svg'
        break;
      case 'Broj predavača':
        imageLink = 'img/metric/predavac.svg'
        break;
      case 'Broj kolaboratora i predavača':
        imageLink = 'img/metric/predavac.svg'
        break;
      case 'Broj nastavnika i saradnika':
        imageLink = 'img/metric/predavac.svg'
        break;
      case 'Broj fakulteta':
        imageLink = 'img/metric/fakultet.svg'
        break;
      case 'Net promoter score':
        if (parseFloat(projects[i].metric[j]) > 75)
          imageLink = 'img/metric/ocena80.svg'
        if (parseFloat(projects[i].metric[j]) > 90)
          imageLink = 'img/metric/ocena93.svg'
        if (parseFloat(projects[i].metric[j]) > 95)
          imageLink = 'img/metric/ocena100.svg'
        break;
      default:
        break;
    }

    let metricString =
      `
        <div class="popup-metric-item" style=" border-color: #`+ projects[i].color + `aa; ">
          <div class="popup-metric-title">`+ projects[i].matricDescription[j] + `</div>
          <img class="popup-metric-image" style=" filter: `+ projects[i].filter + `; " src="` + imageLink + `" alt="">
            <div class="popup-metric-value">`+ projects[i].metric[j] + `</div>
        </div>
      `
    finalMetricString = finalMetricString + metricString
  }
  return finalMetricString
}

function returnButtonStrign(i) {
  if (projects[i].buttonLink == '')
    return ''
  else
    return `<button onclick=" window.open('` + projects[i].buttonLink + `','_blank')" class="popup-button-procitaj-vise" style="background-color: #` + projects[i].color + `;">Više o projektu</button>`
}

function createPopupItem(i) {
  document.getElementById("popup-section").insertAdjacentHTML(
    "beforeend",
    `
      <div class="popup" id="popup`+ i + `">
        <div class="popup-container">
        <div class="popup-header">
        <div class="popup-title">`+ projects[i].title + `</div>
        <img class="popup-close-button-image" src="img/icon-close-button.png" alt="" onclick="closePopup('popup`+ i + `')">
        </div>
        <br>
          <div class="popup-subtitle">Period održavanja: <d style="color: #`+ projects[i].color + `;">` + projects[i].subtitle + `</d></div>
          <div class="popup-paragraph">`+ projects[i].description + `</div>
          <div class="popup-metrics-container">
          `+ returnCorrectMetricString(i) + `
          </div>
          `+ returnPartnerString(i) + returnButtonStrign(i) + `
        </div>
        <div class="popup-dim" onclick="closePopup('popup` + i + `')"></div>
      </div>
    `
  )
}

function createProjectItem(i) {
  document.getElementsByClassName("project-container")[0].insertAdjacentHTML(
    "beforeend",
    `
        <div class="project-item" onclick="     showPopup('popup` + i + `')">
            <img class="project-info-image" src="img/info.svg">
            <img class="project-image" src="img/projects/`+ i + `.jpg">
            <p class="project-title pop">` + projects[i].title + `</p>
        </div>
    `
  )
}

for (let i = 1; i <= 17; i++) {
  createPopupItem(i)
  createProjectItem(i)
}

window.addEventListener('scroll', function () {
  var header = document.getElementsByTagName('header')[0];

  var opacity = Math.min(window.scrollY / 10, 1); /* Change 300 to the scroll amount where you want the transition to be complete */
  var color = `rgba(29, 161, 255, ${opacity})`; /* Same color as #1da1ff, but with variable opacity */

  if (window.scrollY > 100) {
    updated_header_color = color;
    header.style.backgroundColor = color;
    this.document.getElementById("header-menu2").style.height = "auto";
    header.classList.add('transparent-header');
  } else {
    updated_header_color = 'transparent';
    header.style.backgroundColor = 'transparent';
    header.classList.remove('transparent-header');
  }
});



