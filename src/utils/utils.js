export const mobileNavigationControl = () => {
  var jsCloneNavs = document.querySelectorAll(".js-clone-nav");
  var siteMobileMenuBody = document.querySelector(".site-mobile-menu-body");

  jsCloneNavs.forEach((nav) => {
    var navCloned = nav.cloneNode(true);
    navCloned.setAttribute("class", "site-nav-wrap");
    siteMobileMenuBody.appendChild(navCloned);
  });

  var hasChildrens = document
    .querySelector(".site-mobile-menu")
    .querySelectorAll(" .has-children");

  hasChildrens.forEach((hasChild) => {
    var refEl = hasChild.querySelector("a");
    var newElSpan = document.createElement("span");
    newElSpan.setAttribute("class", "arrow-collapse collapsed");

    hasChild.insertBefore(newElSpan, refEl);
    var arrowCollapse = hasChild.querySelector(".arrow-collapse");

    arrowCollapse.setAttribute("data-bs-toggle", "collapse");
    arrowCollapse.setAttribute("data-bs-target", "#collapseItem");

    var dropdown = hasChild.querySelector(".dropdown");

    dropdown.style.display = "none";
    arrowCollapse.addEventListener("click", () => {
      dropdown.style.display === "none"
        ? (dropdown.style.display = "block")
        : (dropdown.style.display = "none");
    });
  });

  var menuToggle = document.querySelectorAll(".js-menu-toggle");
  var mTog;

  menuToggle.forEach((mtoggle) => {
    mTog = mtoggle;
    mtoggle.addEventListener("click", () => {
      if (document.body.classList.contains("offcanvas-menu")) {
        document.body.classList.remove("offcanvas-menu");

        mtoggle.classList.remove("active");
        mTog.classList.remove("active");
      } else {
        document.body.classList.add("offcanvas-menu");

        mtoggle.classList.add("active");
        mTog.classList.add("active");
      }
    });
  });

  var specifiedElement = document.querySelector(".site-mobile-menu");
  var mt, mtoggleTemp;

  document.addEventListener("click", function (event) {
    var isClickInside = specifiedElement.contains(event.target);

    menuToggle.forEach((mtoggle) => {
      mtoggleTemp = mtoggle;
      mt = mtoggle.contains(event.target);
    });

    if (!isClickInside && !mt) {
      if (document.body.classList.contains("offcanvas-menu")) {
        document.body.classList.remove("offcanvas-menu");
        mtoggleTemp.classList.remove("active");
      }
    }
  });
};

export const categories = ["all", "science", "cooking", "ideas"];
