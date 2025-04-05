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

  dropdown.addEventListener("click", () => {
    options.style.display = options.style.display === "block" ? "none" : "block";
  });

  options.querySelectorAll("li").forEach(option => {
    option.addEventListener("click", () => {
      selected.textContent = option.textContent;
      input.value = option.dataset.value;
      options.style.display = "none";
    });
  });

  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      options.style.display = "none";
    }
  });

  dropdown.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      options.style.display = options.style.display === "block" ? "none" : "block";
    }
  });
});

