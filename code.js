const slider = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
let currentIndex = 0;

// Set slider to loop through images
function slideShow() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  const offset = -currentIndex * 100; // Calculate offset based on index
  slider.style.transform = `translateX(${offset}%)`;
}

// Change image every 3 seconds
setInterval(slideShow, 3000);

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