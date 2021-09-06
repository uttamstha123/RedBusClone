const dropDown = document.querySelectorAll(".drop-down");
const dropDownList = document.querySelectorAll(".drop-down-list");
dropDown.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.getAttribute("id") === dropDownList[0].getAttribute("id")) {
      dropDownList[0].classList.toggle("hide");
      dropDownList[1].classList.add("hide");
      dropDownList[2].classList.add("hide");
    }
    if (item.getAttribute("id") === dropDownList[1].getAttribute("id")) {
      dropDownList[1].classList.toggle("hide");
      dropDownList[0].classList.add("hide");
      dropDownList[2].classList.add("hide");
    }
    if (item.getAttribute("id") === dropDownList[2].getAttribute("id")) {
      dropDownList[2].classList.toggle("hide");
      dropDownList[0].classList.add("hide");
      dropDownList[1].classList.add("hide");
    }
  });
});
