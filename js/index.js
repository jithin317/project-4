const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);
const signInBtn = document.getElementById("signInBtn");
const formID = document.getElementById("formID");

formID.addEventListener("submit", (e) => {
  e.preventDefault();
});

signInBtn.addEventListener("click", () => {
  window.location.href = "https://willowy-dasik-c4d0b7.netlify.app/main/movies";
});

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    const currentlyActiveAccordionItemHeader = document.querySelector(
      ".accordion-item-header.active"
    );
    if (
      currentlyActiveAccordionItemHeader &&
      currentlyActiveAccordionItemHeader !== accordionItemHeader
    ) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});
