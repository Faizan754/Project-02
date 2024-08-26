// slider();

// function slider() {
//   const sliders = document.getElementsByClassName("slider-content");
//   let slider1 = sliders[0];
//   let slider2 = sliders[1];
//   slider2.style.backgroundColor = "#f5f6f8";

//   let i = 1;
//   setInterval(() => {
//     let transformValue = 0;
//     switch (i) {
//       case 1:
//         transformValue = -10;
//         break;

//       case 2:
//         transformValue = -23;
//         break;

//       case 3:
//         transformValue = -35;
//         break;

//       case 4:
//         transformValue = -47;
//         break;

//       case 5:
//         transformValue = -60;
//         break;

//       case 6:
//         transformValue = -73;
//         break;

//       case 7:
//         transformValue = -85;
//         break;

//       case 8:
//         transformValue = -100;
//         break;

//       default:
//         break;
//     }
//     if (i === 1) {
//       slider1.style.opacity = "1";
//       slider2.style.display = "none";
//     } else slider2.style.display = "flex";
//     slider1.style.transform = `translateX(${transformValue}%)`;
//     slider2.style.transform = `translateX(${transformValue}%)`;
//     if (i === 8) {
//       setTimeout(() => {
//         slider1.style.opacity = "0";
//         slider1.style.transform = `translateX(${0}%)`;
//       }, 2100);
//     }

//     if (i < 8) i++;
//     else i = 1;
//   }, 5000);
// }

let boolean = [true, true, true, true, true];
const listItems = document.querySelectorAll(".portfolio-section-list-item");

function scroll() {
  let scrollY = window.scrollY;
  let onScroll = document.getElementsByClassName("container")[0];

  if (scrollY === 0) onScroll.style.backgroundColor = "transparent";
  else {
    onScroll.style.backgroundColor = "rgba(40, 58, 90, 0.9)";
  }
}

let toggle = [true, true, true];

function middleContent(index) {
  let element = document.getElementsByClassName(
    "middle-content-flex-container-left-side-paragraph"
  )[index];
  let chevron = document.getElementsByClassName("fa-chevron-right")[index];
  let question = document.getElementsByClassName(
    "middle-content-sub-div-heading"
  )[index];

  if (toggle[index]) {
    element.style.height = "50px";
    element.style.color = "#444";
    chevron.style.color = "#47b2e4";
    chevron.style.transform = "rotate(90deg)";
    question.style.color = "#47b2e4";
  } else {
    element.style.height = "";
    element.style.color = "";
    chevron.style.color = "";
    chevron.style.transform = "";
    question.style.color = "";
  }
  toggle[index] = !toggle[index];
}

function frequentQues(index) {
  let element = document.getElementsByClassName(
    "frequently-asked-questions-content"
  )[index];
  let chevron = document.getElementsByClassName("question-chevron")[index];
  let question = document.getElementsByClassName(
    "frequently-asked-questions-title-heading"
  )[index];

  element.style.height = boolean[index] ? "70px" : "";
  element.style.color = boolean[index] ? "#444" : "";
  chevron.style.color = boolean[index] ? "#47b2e4" : "";
  chevron.style.transform = boolean[index] ? "rotate(90deg)" : "";
  question.style.color = boolean[index] ? "#47b2e4" : "";

  boolean[index] = !boolean[index];
}

const gridItemsParent = document.getElementsByClassName(
  "portfolio-section-flex-container"
)[0];

const gridItemsFormats = [
  `
  <div class="portfolio-section-flex-container-column">
              <div class="grid-item grid-item-1">
                <img src="/images/masonry-portfolio-1.jpg" alt="" />
                <div class="grid-item-info grid-item-info-1">
                  <div class="grid-item-info-text">
                    <h4 class="items">App 1</h4>
                    <p>Lorem ipsum, dolor sit</p>
                  </div>
                  <div class="grid-item-info-links">
                    <a href=""
                      ><i class="fa-solid fa-magnifying-glass-plus"></i
                    ></a>
                    <a href=""><i class="fa-solid fa-paperclip"></i></a>
                  </div>
                </div>
              </div>
              <div class="grid-item grid-item-6">
                <img src="/images/masonry-portfolio-6.jpg" alt="" />
                <div class="grid-item-info grid-item-info-6">
                  <div class="grid-item-info-text">
                    <h4 class="items">Branding 2</h4>
                    <p>Lorem ipsum, dolor sit</p>
                  </div>
                  <div class="grid-item-info-links">
                    <a href=""
                      ><i class="fa-solid fa-magnifying-glass-plus"></i
                    ></a>
                    <a href=""><i class="fa-solid fa-paperclip"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="portfolio-section-flex-container-column">
              <div class="grid-item grid-item-2">
                <img src="/images/masonry-portfolio-2.jpg" alt="" />
                <div class="grid-item-info grid-item-info-2">
                  <div class="grid-item-info-text">
                    <h4 class="items">Product 1</h4>
                    <p>Lorem ipsum, dolor sit</p>
                  </div>
                  <div class="grid-item-info-links">
                    <a href=""
                      ><i class="fa-solid fa-magnifying-glass-plus"></i
                    ></a>
                    <a href=""><i class="fa-solid fa-paperclip"></i></a>
                  </div>
                </div>
              </div>
              <div class="grid-item grid-item-5">
                <img src="/images/masonry-portfolio-5.jpg" alt="" />
                <div class="grid-item-info grid-item-info-5">
                  <div class="grid-item-info-text">
                    <h4 class="items">Product 2</h4>
                    <p>Lorem ipsum, dolor sit</p>
                  </div>
                  <div class="grid-item-info-links">
                    <a href=""
                      ><i class="fa-solid fa-magnifying-glass-plus"></i
                    ></a>
                    <a href=""><i class="fa-solid fa-paperclip"></i></a>
                  </div>
                </div>
              </div>
              <div class="grid-item grid-item-9">
                <img src="/images/masonry-portfolio-9.jpg" alt="" />
                <div class="grid-item-info grid-item-info-9">
                  <div class="grid-item-info-text">
                    <h4 class="items">Branding 3</h4>
                    <p>Lorem ipsum, dolor sit</p>
                  </div>
                  <div class="grid-item-info-links">
                    <a href=""
                      ><i class="fa-solid fa-magnifying-glass-plus"></i
                    ></a>
                    <a href=""><i class="fa-solid fa-paperclip"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="portfolio-section-flex-container-column portfolio-section-flex-container-column-3"
            >
              <div class="grid-item grid-item-3">
                <img src="/images/masonry-portfolio-3.jpg" alt="" />
                <div class="grid-item-info grid-item-info-3">
                  <div class="grid-item-info-text">
                    <h4 class="items">Branding 1</h4>
                    <p>Lorem ipsum, dolor sit</p>
                  </div>
                  <div class="grid-item-info-links">
                    <a href=""
                      ><i class="fa-solid fa-magnifying-glass-plus"></i
                    ></a>
                    <a href=""><i class="fa-solid fa-paperclip"></i></a>
                  </div>
                </div>
              </div>
              <div class="grid-item grid-item-4">
                <img src="/images/masonry-portfolio-4.jpg" alt="" />
                <div class="grid-item-info grid-item-info-4">
                  <div class="grid-item-info-text">
                    <h4 class="items">App 2</h4>
                    <p>Lorem ipsum, dolor sit</p>
                  </div>
                  <div class="grid-item-info-links">
                    <a href=""
                      ><i class="fa-solid fa-magnifying-glass-plus"></i
                    ></a>
                    <a href=""><i class="fa-solid fa-paperclip"></i></a>
                  </div>
                </div>
              </div>
              <div class="grid-item grid-item-7">
                <img src="/images/masonry-portfolio-7.jpg" alt="" />
                <div class="grid-item-info grid-item-info-7">
                  <div class="grid-item-info-text">
                    <h4 class="items">App 3</h4>
                    <p>Lorem ipsum, dolor sit</p>
                  </div>
                  <div class="grid-item-info-links">
                    <a href=""
                      ><i class="fa-solid fa-magnifying-glass-plus"></i
                    ></a>
                    <a href=""><i class="fa-solid fa-paperclip"></i></a>
                  </div>
                </div>
              </div>
              <div class="grid-item grid-item-8">
                <img src="/images/masonry-portfolio-8.jpg" alt="" />
                <div class="grid-item-info grid-item-info-8">
                  <div class="grid-item-info-text">
                    <h4 class="items">Product 3</h4>
                    <p>Lorem ipsum, dolor sit</p>
                  </div>
                  <div class="grid-item-info-links">
                    <a href=""
                      ><i class="fa-solid fa-magnifying-glass-plus"></i
                    ></a>
                    <a href=""><i class="fa-solid fa-paperclip"></i></a>
                  </div>
                </div>
              </div>
            </div>
  `,
  `
  <div class="portfolio-section-flex-container-column">
              <div class="grid-item grid-item-1">
                <img src="/images/masonry-portfolio-1.jpg" alt="" />
                <div class="grid-item-info grid-item-info-1">
                  <div class="grid-item-info-text">
                    <h4 class="items">App 1</h4>
                    <p>Lorem ipsum, dolor sit</p>
                  </div>
                  <div class="grid-item-info-links">
                    <a href=""
                      ><i class="fa-solid fa-magnifying-glass-plus"></i
                    ></a>
                    <a href=""><i class="fa-solid fa-paperclip"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="portfolio-section-flex-container-column">
              <div class="grid-item grid-item-4">
                <img src="/images/masonry-portfolio-4.jpg" alt="" />
                <div class="grid-item-info grid-item-info-4">
                  <div class="grid-item-info-text">
                    <h4 class="items">App 2</h4>
                    <p>Lorem ipsum, dolor sit</p>
                  </div>
                  <div class="grid-item-info-links">
                    <a href=""
                      ><i class="fa-solid fa-magnifying-glass-plus"></i
                    ></a>
                    <a href=""><i class="fa-solid fa-paperclip"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="portfolio-section-flex-container-column portfolio-section-flex-container-column-3"
            >
              <div class="grid-item grid-item-7">
                <img src="/images/masonry-portfolio-7.jpg" alt="" />
                <div class="grid-item-info grid-item-info-7">
                  <div class="grid-item-info-text">
                    <h4 class="items">App 3</h4>
                    <p>Lorem ipsum, dolor sit</p>
                  </div>
                  <div class="grid-item-info-links">
                    <a href=""
                      ><i class="fa-solid fa-magnifying-glass-plus"></i
                    ></a>
                    <a href=""><i class="fa-solid fa-paperclip"></i></a>
                  </div>
                </div>
              </div>
            </div>
  `,
  `
            <div class="portfolio-section-flex-container-column">
              <div class="grid-item grid-item-2">
                <img src="/images/masonry-portfolio-2.jpg" alt="" />
                <div class="grid-item-info grid-item-info-2">
                  <div class="grid-item-info-text">
                    <h4 class="items">Product 1</h4>
                    <p>Lorem ipsum, dolor sit</p>
                  </div>
                  <div class="grid-item-info-links">
                    <a href=""
                      ><i class="fa-solid fa-magnifying-glass-plus"></i
                    ></a>
                    <a href=""><i class="fa-solid fa-paperclip"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="portfolio-section-flex-container-column"> 
              <div class="grid-item grid-item-5">
                <img src="/images/masonry-portfolio-5.jpg" alt="" />
                <div class="grid-item-info grid-item-info-5">
                  <div class="grid-item-info-text">
                    <h4 class="items">Product 2</h4>
                    <p>Lorem ipsum, dolor sit</p>
                  </div>
                  <div class="grid-item-info-links">
                    <a href=""
                      ><i class="fa-solid fa-magnifying-glass-plus"></i
                    ></a>
                    <a href=""><i class="fa-solid fa-paperclip"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="portfolio-section-flex-container-column">
              <div class="grid-item grid-item-8">
                <img src="/images/masonry-portfolio-8.jpg" alt="" />
                <div class="grid-item-info grid-item-info-8">
                  <div class="grid-item-info-text">
                    <h4 class="items">Product 3</h4>
                    <p>Lorem ipsum, dolor sit</p>
                  </div>
                  <div class="grid-item-info-links">
                    <a href=""
                      ><i class="fa-solid fa-magnifying-glass-plus"></i
                    ></a>
                    <a href=""><i class="fa-solid fa-paperclip"></i></a>
                  </div>
                </div>
              </div>
            </div>
  `,
  `
            <div class="portfolio-section-flex-container-column">
              <div class="grid-item grid-item-3">
                <img src="/images/masonry-portfolio-3.jpg" alt="" />
                <div class="grid-item-info grid-item-info-3">
                  <div class="grid-item-info-text">
                    <h4 class="items">Branding 1</h4>
                    <p>Lorem ipsum, dolor sit</p>
                  </div>
                  <div class="grid-item-info-links">
                    <a href=""
                      ><i class="fa-solid fa-magnifying-glass-plus"></i
                    ></a>
                    <a href=""><i class="fa-solid fa-paperclip"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="portfolio-section-flex-container-column">
              <div class="grid-item grid-item-6">
                <img src="/images/masonry-portfolio-6.jpg" alt="" />
                <div class="grid-item-info grid-item-info-6">
                  <div class="grid-item-info-text">
                    <h4 class="items">Branding 2</h4>
                    <p>Lorem ipsum, dolor sit</p>
                  </div>
                  <div class="grid-item-info-links">
                    <a href=""
                      ><i class="fa-solid fa-magnifying-glass-plus"></i
                    ></a>
                    <a href=""><i class="fa-solid fa-paperclip"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="portfolio-section-flex-container-column">
              <div class="grid-item grid-item-9">
                <img src="/images/masonry-portfolio-9.jpg" alt="" />
                <div class="grid-item-info grid-item-info-9">
                  <div class="grid-item-info-text">
                    <h4 class="items">Branding 3</h4>
                    <p>Lorem ipsum, dolor sit</p>
                  </div>
                  <div class="grid-item-info-links">
                    <a href=""
                      ><i class="fa-solid fa-magnifying-glass-plus"></i
                    ></a>
                    <a href=""><i class="fa-solid fa-paperclip"></i></a>
                  </div>
                </div>
              </div>
            </div>
  `,
];

for (let index = 0; index < listItems.length; index++) {
  const el = listItems[index];
  el.addEventListener("click", (event) => {
    event.target.classList.add("newActive");
    if (event.target.dataset.value === "All") {
      gridItemsParent.innerHTML = gridItemsFormats[0];
    } else if (event.target.dataset.value === "App") {
      gridItemsParent.innerHTML = gridItemsFormats[1];
    } else if (event.target.dataset.value === "Card") {
      gridItemsParent.innerHTML = gridItemsFormats[2];
    } else if (event.target.dataset.value === "Web") {
      gridItemsParent.innerHTML = gridItemsFormats[3];
    }
    for (let i = 0; i < listItems.length; i++)
      if (i !== index) {
        listItems[i].classList.remove("newActive");
      }
  });
}

const serviceCardsData = [
  {
    iconClasses: "fa-solid fa-wave-square",
    heading: "Lorem Ipsum",
    content:
      "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
  },
  {
    iconClasses: "fa-solid fa-vector-square",
    heading: "Sed ut perspici",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
  },
  {
    iconClasses: "fa-solid fa-calendar-days",
    heading: "Magni Dolores",
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
  },
  {
    iconClasses: "fa-solid fa-tower-broadcast",
    heading: "Nemo Enim",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
  },
];

for (let element of serviceCardsData) {
  appendServicesCard(element);
}

function appendServicesCard({ iconClasses, heading, content }) {
  const parentDiv = document.getElementById("services-cards-sect");
  const div = document.createElement("div");
  div.className = "services-section-flex-container-box";
  div.innerHTML = `
  <div class="services-section-box-flex">
  <i class="${iconClasses}"></i>
  <h4>${heading}</h4>
  <p>
  ${content}
  </p>
  </div>
  `;
  parentDiv.appendChild(div);
}

const teamCardsData = [
  {
    employImages: "/images/team-1.jpg",
    employNames: "Walter White",
    employStatus: "Chief Executive Officer",
    employInfo: "Explicabo voluptatem mollitia et repellat qui dolorum quasi",
  },
  {
    employImages: "/images/team-2.jpg",
    employNames: "Sarah Jhonson",
    employStatus: "Product Manager",
    employInfo:
      "Aut maiores voluptates amet et quis praesentium qui senda para",
  },
  {
    employImages: "/images/team-3.jpg",
    employNames: "William Anderson",
    employStatus: "CTO",
    employInfo: "Quisquam facilis cum velit laborum corrupti fuga rerum quia",
  },
  {
    employImages: "/images/team-4.jpg",
    employNames: "Amanda Jepson",
    employStatus: "Accountant",
    employInfo:
      "Dolorum tempora officiis odit laborum officiis et et accusamus ",
  },
];

for (let element of teamCardsData) {
  displayTeamCards(element);
}

function displayTeamCards({
  employImages,
  employNames,
  employStatus,
  employInfo,
}) {
  const parentDiv = document.getElementsByClassName(
    "team-section-flex-container"
  )[0];
  const div = document.createElement("div");
  div.className = "team-section-flex-container-div";
  div.innerHTML = `<div class="team-section-flex-container-div-img">
  <img src="${employImages}" alt="" />
  </div>
  <div class="team-section-flex-container-div-content">
    <h4>${employNames}</h4>
    <p>${employStatus}</p>
    <span class="team-section-flex-container-div-content-span"></span>
    <p>${employInfo}</p>
    <div class="team-section-flex-container-div-content-icons">
      <a><i class="fa-brands fa-x-twitter"></i></a>
      <a
        ><i class="fa-brands fa-facebook"></i
      ></a>
      <a
        ><i class="fa-brands fa-instagram"
        ></i
      ></a>
      <a
        ><i class="fa-brands fa-linkedin"></i
      ></a>
    </div>
  </div>`;
  parentDiv.appendChild(div);
}

const pricingSectionData = [
  {
    planType: "Free Plan",
    planPrice: "0",
    isFreePlan: true,
  },
  {
    planType: "Business Plan",
    planPrice: "29",
    isBusinessPlan: true,
  },
  {
    planType: "Developer Plan",
    planPrice: "49",
  },
];

for (elements of pricingSectionData) pricingSection(elements);

function pricingSection({
  planType,
  planPrice,
  isFreePlan = false,
  isBusinessPlan = false,
}) {
  const parentDiv = document.getElementsByClassName(
    "pricing-section-flex-container"
  )[0];
  const div = document.createElement("div");
  div.className =
    "pricing-section-plans" + " " + (isBusinessPlan ? "business-plan" : "");
  div.innerHTML = `<div class="pricing-section-plan">
              <h3>${planType}</h3>
              <h4>
                <sup>$</sup>${planPrice}
                <p>/ month</p>
              </h4>
              <ul class="pricing-section-plans-list">
                <li>
                  <i class="fa-solid fa-check"></i
                  ><span>Quam adipiscing vitae proin</span>
                </li>
                <li>
                  <i class="fa-solid fa-check"></i
                  ><span>Nec feugiat nisl pretium</span>
                </li>
                <li>
                  <i class="fa-solid fa-check"></i
                  ><span>Nulla at volutpat diam uteera</span>
                </li>
                <li>
                  <i class="fa-solid ${
                    isFreePlan ? "fa-xmark" : "fa-check"
                  }"></i
                  ><span ${
                    isFreePlan && 'style="text-decoration: line-through"'
                  }
                    >Pharetra massa massa ultricies</span
                  >
                </li>
                <li>
                  <i class="fa-solid ${
                    isFreePlan ? "fa-xmark" : "fa-check"
                  }"></i
                  ><span ${
                    isFreePlan && 'style="text-decoration: line-through"'
                  }
                    >Massa ultricies mi quis hendrerit</span
                  >
                </li>
              </ul>
              <div class="pricing-section-plans-link">
                <a href="">Buy Now</a>
              </div>
            </div>`;
  parentDiv.appendChild(div);
}

const carousel = document.getElementById("testimonials-carousel-container");
const swiper = document.getElementsByClassName("swiper");
for (let i = 0; i < swiper.length; i++) {
  swiper[i].addEventListener("click", (event) => {
    carousel.style.transform = `translate(-${100 * i}%)`;
    event.target.classList.add("current");
    for (let j = 0; j < swiper.length; j++)
      if (j !== i) {
        swiper[j].classList.remove("current");
      }
  });
}

const messageForm = document.getElementById("message-form");
const messageButton = document.getElementById("message-button");

messageButton.addEventListener("click", (event) => {
  event.preventDefault();
  // console.log(messageForm);
  const formData = new FormData(messageForm);
  const obj = {};
  for (let keyValues of formData.entries()) {
    obj[keyValues[0]] = keyValues[1];
  }
  localStorage.setItem("userForm", JSON.stringify(obj));
  console.log(formData);
});

const navButtons = document.getElementsByClassName("nav-button");

for (let i = 0; i < navButtons.length; i++) {
  navButtons[i].addEventListener("click", (event) => {
    event.target.classList.add("nav-bar-active");
    for (let j = 0; j < navButtons.length; j++) {
      if (j !== i) navButtons[j].classList.remove("nav-bar-active");
    }
  });
}

const navBarAnchors = document.getElementsByClassName("nav-button");
const mainSections = document.getElementsByClassName("main-sections");
const mainSectionsHeights = [];
// const mainSectionsHeights = mainSections.map((e) => e.clientHeight);
const positionArrTop = [0, 90, -20, 10, -200, -300, -400];
const positionArrBottom = [1, 80, 10, 0, 0, -280, -435];
for (let i = 0; i < mainSections.length; i++) {
  mainSectionsHeights.push(mainSections[i].clientHeight);
}

document.addEventListener("scroll", animate);

function inView(element, elementAnchorHeight, positionTop, positionBottom) {
  const windowHeight = window.innerHeight;
  const scrollY = window.scrollY;
  const scrollPosition = scrollY + windowHeight;

  const elementPositionTop =
    element.getBoundingClientRect().top + scrollY + elementAnchorHeight;
  const elementPositionBottom =
    element.getBoundingClientRect().bottom + scrollY + elementAnchorHeight;
  if (
    scrollPosition > elementPositionTop + positionTop &&
    scrollPosition <= elementPositionBottom + positionBottom
  )
    return true;
  else return false;
}

function animate() {
  for (let i = 0; i < mainSections.length; i++) {
    if (
      inView(
        mainSections[i],
        mainSectionsHeights[i],
        positionArrTop[i],
        positionArrBottom[i]
      )
    ) {
      navBarAnchors[i].classList.add("nav-bar-active");
      for (let j = 0; j < mainSections.length; j++) {
        if (j !== i) navBarAnchors[j].classList.remove("nav-bar-active");
      }
    } else {
      navBarAnchors[i].classList.remove("nav-bar-active");
    }
  }
}

let toggleDropdown = [true, true];

function burgerMenu(index) {
  const dropdownParent = document.getElementById("dropdown-parent");
  const chevronDown = document.getElementsByClassName("chevron-down")[0];
  const chevronDownChild = document.getElementsByClassName("chevron-down")[1];
  const navDropdownParent = document.getElementsByClassName(
    "nav-dropdown-parent"
  )[0];
  const tripleDropdownParent = document.getElementsByClassName(
    "triple-dropdown-parent"
  )[0];
  const body = document.getElementsByTagName("body")[0];
  if (index === 0) {
    dropdownParent.style.display = "flex";
    body.style.overflow = "hidden";
  } else if (index === 1) {
    dropdownParent.style.display = "none";
    body.style.overflow = "";
  } else if (index === 2) {
    if (toggleDropdown[0]) {
      chevronDown.style.backgroundColor = "#47b2e4";
      chevronDown.style.color = "white";
      chevronDown.style.transform = "rotate(180deg)";
      navDropdownParent.style.display = "flex";
    } else {
      chevronDown.style.backgroundColor = "";
      chevronDown.style.color = "";
      chevronDown.style.transform = "";
      navDropdownParent.style.display = "";
    }
    toggleDropdown[0] = !toggleDropdown[0];
  } else if (index === 3) {
    if (toggleDropdown[1]) {
      tripleDropdownParent.style.display = "flex";
      chevronDownChild.style.backgroundColor = "#47b2e4";
      chevronDownChild.style.color = "white";
      chevronDownChild.style.transform = "rotate(180deg)";
    } else {
      tripleDropdownParent.style.display = "";
      chevronDownChild.style.backgroundColor = "";
      chevronDownChild.style.color = "";
      chevronDownChild.style.transform = "";
    }

    toggleDropdown[1] = !toggleDropdown[1];
  }
}
