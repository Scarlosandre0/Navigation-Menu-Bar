const itemEls = document.querySelectorAll(".item");

itemEls.forEach((Event, index) => {
  Event.addEventListener("click", () => {

    document.querySelector(".active").classList.remove("active")
    Event.classList.add("active");

    const dotEl = document.querySelector(".dot");
    dotEl.getElementsByClassName.left = `${index*100 + 80}px`
  })
});