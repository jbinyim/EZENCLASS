const cityOption = document.querySelector("#city");
const stateOption = document.querySelector("#state");
const tableBody = document.querySelector(".shopinfo_table tbody");
const pageNationContainer = document.querySelector(".shopinfo_pager ul");
const searchButton = document.querySelector(".shopsearch_filter span");
const searchBar = document.querySelector(
  ".shopsearch_filter input[type='text']"
);
const checkBoxs = document.querySelectorAll(
  ".shopsearch_filter input[type='checkbox']"
);
const searchForm = document.querySelector(".shopsearch_filter form");

// table data making
const createRow = (data) => {
  const row = document.createElement("tr");
  row.id = data.store;
  row.innerHTML = `
    <td>${data.store}</td>
    <td>${data.main_area}</td>
    <td>${data.address}</td>
    <td>${data.tel}</td>
    <td>${data.service
      .map((service) => `<i class="${service}"></i>`)
      .join("")}</td>
  `;

  return row;
};

// data rendering
const itemPerPage = 5;
let currentPage = 1;

const renderData = (data) => {
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const currentPageData = data.slice(startIndex, endIndex);
  tableBody.innerHTML = "";
  currentPageData.forEach((item) => {
    const row = createRow(item);
    tableBody.appendChild(row);
  });
};

// page nation
const renderPageination = (data) => {
  pageNationContainer.innerHTML = "";
  const toatalDataLength = data.length;
  if (toatalDataLength <= itemPerPage) {
    return;
  }
  const totalPages = Math.ceil(toatalDataLength / itemPerPage);
  const currentPageGroup = Math.ceil(currentPage / itemPerPage);

  if (currentPageGroup > 1) {
    const prevGroupButton = document.createElement("li");
    prevGroupButton.innerText = "◀";
    prevGroupButton.addEventListener("click", () => {
      currentPage = (currentPageGroup - 1) * 5;
      renderData(data);
      renderPageination(data);
    });
    pageNationContainer.appendChild(prevGroupButton);
  }
  for (
    let i = (currentPageGroup - 1) * 5 + 1;
    i <= Math.min(currentPageGroup * 5, totalPages);
    i++
  ) {
    const pageLink = document.createElement("li");
    pageLink.innerText = i;
    pageLink.addEventListener("click", () => {
      currentPage = i;
      renderData(data);
    });
    if (i === currentPage) {
      pageLink.classList.add("active");
    }
    pageNationContainer.appendChild(pageLink);
  }

  if (currentPageGroup < Math.ceil(totalPages / 5)) {
    const nextGroupButton = document.createElement("li");
    nextGroupButton.innerText = "▶";
    nextGroupButton.addEventListener("click", () => {
      currentPage = currentPage * 5 + 1;
      renderData(data);
      renderPageination(data);
    });
    pageNationContainer.appendChild(nextGroupButton);
  }

  const li = document.querySelectorAll("li");
  li.forEach((item) => {
    item.addEventListener("click", () => {
      li.forEach((item) => item.classList.remove("active"));
      item.classList.add("active");
    });
  });
  const lastPageButton = document.createElement("li");
  lastPageButton.style.width = 50 + "px";
  lastPageButton.innerText = "마지막";
  lastPageButton.addEventListener("click", () => {
    currentPage = totalPages;
    renderData(data);
    renderPageination(data);
  });
  pageNationContainer.appendChild(lastPageButton);
};

// json data
const cityList = "./cityInfo.json";
const storeList = "./storeInfo.json";

let cityInfo;
let storeInfo;

fetch(cityList)
  .then((response) => response.json())
  .then((data) => {
    cityInfo = data;
    for (let city in cityInfo) {
      const option = document.createElement("option");
      option.value = city;
      option.id = city;
      option.innerText = city;
      cityOption.appendChild(option);
    }
  });

fetch(storeList)
  .then((response) => response.json())
  .then((data) => {
    storeInfo = data;
    renderData(storeInfo);
    renderPageination(storeInfo);
  });

// cursor movie
const cursor = document.querySelector("#cursor");
// cusror pagex, y
let x = 0;
let y = 0;
// cursor original
let targetX = 0;
let targetY = 0;
let speed = 0.1;

window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;
  cursor.style.top = targetY + "px";
  cursor.style.left = targetX + "px";
  window.requestAnimationFrame(loop);
};

loop();

const showCursorRotate = () => {
  cursor.classList.add("active");
};
const hideCursorRotate = () => {
  cursor.classList.remove("active");
};

// load spinner
const spinner = document.querySelector(".spiner");
const showSpinner = () => {
  spinner.classList.remove("hiddenspiner");
};
const hiddenspiner = () => {
  spinner.classList.add("hiddenspiner");
};

showSpinner();
setTimeout(() => {
  hiddenspiner();
}, 1000);

// map click event
const mapAreas = document.querySelectorAll(".shopsearch_map > div");
mapAreas.forEach((area) => {
  area.addEventListener("click", (e) => {
    showCursorRotate();
    setTimeout(() => {
      hideCursorRotate();
    }, 1000);

    showSpinner();
    setTimeout(() => {
      hiddenspiner();
    }, 1000);

    mapAreas.forEach((area) => area.classList.remove("active"));
    area.classList.add("active");

    const clickedCtity = e.target.id;
    const matchedCityInfo = storeInfo.filter(
      (city) => city.main_area === clickedCtity
    );

    tableBody.innerHTML = "";
    if (matchedCityInfo.length > 0) {
      renderData(matchedCityInfo);
      if (matchedCityInfo.length >= 5) {
        renderPageination(matchedCityInfo);
      } else {
        pageNationContainer.innerHTML = "";
      }
    }

    cityOption.value = clickedCtity;
    cityOption.dispatchEvent(new Event("change"));
  });
});

// city option change event
cityOption.addEventListener("change", () => {
  currentPage = 1;

  showCursorRotate();
  setTimeout(() => {
    hideCursorRotate();
  }, 1000);

  showSpinner();
  setTimeout(() => {
    hiddenspiner();
  }, 1000);

  const selectedCity = cityOption.value;
  if (selectedCity !== "none") {
    stateOption.innerHTML = `<option>구/군 선택</option>`;
    if (cityInfo[selectedCity]) {
      cityInfo[selectedCity].forEach((cityitem) => {
        const option = document.createElement("option");
        option.innerText = cityitem;
        stateOption.appendChild(option);
      });
    }
  }

  mapAreas.forEach((area) => {
    if (area.id === selectedCity) {
      area.classList.add("active");
    } else {
      area.classList.remove("active");
    }
  });

  const matchedcityInfo = storeInfo.filter(
    (city) => city.main_area === selectedCity
  );

  tableBody.innerHTML = "";
  if (matchedcityInfo.length > 0) {
    renderData(matchedcityInfo);
    if (matchedcityInfo.length >= 5) {
      renderPageination(matchedcityInfo);
    } else {
      pageNationContainer.innerHTML = "";
    }
  } else {
    renderData(storeInfo);
    renderPageination(storeInfo);
  }
});

// checkbox option
const filterData = (data) => {
  const selectedCategories = [
    ...document.querySelectorAll(".filter-checkbox:checked"),
  ].map((checkbox) => checkbox.value);

  const filterdData = data.filter((item) =>
    selectedCategories.every((service) => item.service.includes(service))
  );
  renderData(filterdData);
  renderPageination(filterdData);
};

const optionMode = () => {
  showCursorRotate();
  setTimeout(() => {
    hideCursorRotate();
  }, 1000);

  showSpinner();
  setTimeout(() => {
    hiddenspiner();
  }, 1000);

  filterData(storeInfo);
};

checkBoxs.forEach((checkbox) => {
  checkbox.addEventListener("change", optionMode);
});

// search event
searchButton.addEventListener("click", () => {
  showCursorRotate();
  setTimeout(() => {
    hideCursorRotate();
  }, 1000);

  showSpinner();
  setTimeout(() => {
    hiddenspiner();
  }, 1000);

  tableBody.innerHTML = "";

  const cityValue = cityOption.value;
  const stateValue = stateOption.value;
  const searchValue = searchBar.value;

  let searchResults = storeInfo.filter((data) => data.store === searchValue);
  let arlertShown = false;
  if (!searchValue) {
    storeInfo.forEach((data) => {
      const mainAreaMathed = data.main_area === cityValue;
      const subAreaMathed = data.sub_area === stateValue;

      if (cityValue === "도/시 선택") {
        searchResults.push(data);
      } else if (mainAreaMathed && subAreaMathed) {
        searchResults.push(data);
      }
      if (stateValue === "구/군 선택" && !arlertShown) {
        alert("구/군 선택해주세요");
        arlertShown = true;
      }
    });
  }

  renderData(searchResults);

  if (searchResults.length >= 5) {
    renderPageination(searchResults);
  } else {
    pageNationContainer.innerHTML = "";
  }
  searchBar.value = "";
});

// enter event
searchForm.addEventListener((e) => {
  e.preventDefault();
});
