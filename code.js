const slider = document.getElementById("sliderWrapper");
const slides = slider.querySelectorAll("img");
let currentIndex = 0;
const totalSlides = slides.length;

function slide() {
  currentIndex++;
  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}
setInterval(slide, 3000); // Slide every 3 seconds

const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const arrow = header.querySelector('.arrow');

    // Toggle active class for current item
    header.classList.toggle('active');

    if (content.style.maxHeight) {
      // Close accordion
      content.style.maxHeight = null;
    } else {
      // Open accordion
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});

/*for FAQ*/
document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                const icon = question.querySelector('.faq-icon');
                const isOpen = answer.style.display === 'block';

                // Close all open answers and reset icons
                document.querySelectorAll('.faq-answer').forEach(answer => answer.style.display = 'none');
                document.querySelectorAll('.faq-icon').forEach(icon => icon.style.transform = 'rotate(0deg)');
                document.querySelectorAll('.faq-question').forEach(btn => btn.classList.remove('active'));

                // Toggle the current answer
                answer.style.display = isOpen ? 'none' : 'block';
                icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(90deg)';
                if (!isOpen) question.classList.add('active');
            });
        });


document.querySelectorAll(".dropdown").forEach(dropdown => {
  const selected = dropdown.querySelector(".selected");
  const options = dropdown.querySelector(".dropdown-options");
  const input = dropdown.querySelector("input[type='hidden']");

  // Show the options when dropdown is clicked
  dropdown.addEventListener("click", (event) => {
    event.stopPropagation();  // Prevent closing when clicking inside the dropdown
    options.style.display = options.style.display === "block" ? "none" : "block";
  });

  // When an option is clicked, close the dropdown and set the value
  options.querySelectorAll("li").forEach(option => {
    option.addEventListener("click", (event) => {
      selected.textContent = option.textContent;  // Set the selected option text
      input.value = option.dataset.value;  // Set the hidden input value

      // Close the dropdown after selection
      options.style.display = "none";
    });
  });

  // Close the dropdown if clicked outside
  document.addEventListener("click", () => {
    options.style.display = "none";
  });
});