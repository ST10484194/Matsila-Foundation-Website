// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Volunteer form validation
const volunteerForm = document.getElementById("volunteerForm");
volunteerForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const availability = document.getElementById("availability").value;

  let feedback = document.getElementById("volunteerFeedback");

  if (name === "" || email === "" || message === "" || availability === "") {
    feedback.textContent = "Please fill in all fields.";
    feedback.style.color = "red";
    return;
  }

  // Simple email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    feedback.textContent = "Please enter a valid email address.";
    feedback.style.color = "red";
    return;
  }

  feedback.textContent = `Thank you, ${name}! Your volunteer application has been received.`;
  feedback.style.color = "green";
  volunteerForm.reset();
});

// Contact form validation
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("contactName").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const type = document.getElementById("contactType").value;
  const message = document.getElementById("contactMessage").value.trim();

  let feedback = document.getElementById("contactFeedback");

  if (name === "" || email === "" || type === "" || message === "") {
    feedback.textContent = "Please fill in all fields.";
    feedback.style.color = "red";
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    feedback.textContent = "Please enter a valid email address.";
    feedback.style.color = "red";
    return;
  }

  feedback.textContent = `Thank you, ${name}! Your message has been sent.`;
  feedback.style.color = "green";
  contactForm.reset();
});

// Lightbox gallery functionality
const galleryImages = document.querySelectorAll(".home-gallery img");
galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.style.position = "fixed";
    lightbox.style.top = "0";
    lightbox.style.left = "0";
    lightbox.style.width = "100%";
    lightbox.style.height = "100%";
    lightbox.style.background = "rgba(0,0,0,0.8)";
    lightbox.style.display = "flex";
    lightbox.style.justifyContent = "center";
    lightbox.style.alignItems = "center";
    lightbox.style.zIndex = "1000";

    const imgElement = document.createElement("img");
    imgElement.src = img.src;
    imgElement.style.maxWidth = "90%";
    imgElement.style.maxHeight = "90%";
    lightbox.appendChild(imgElement);

    lightbox.addEventListener("click", () => {
      document.body.removeChild(lightbox);
    });

    document.body.appendChild(lightbox);
  });
});
