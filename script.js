// Mobile navigation toggle
const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the mobile menu after a navigation link is selected.
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    menuToggle.textContent = "☰";
  });
});

// Keep the footer year current.
document.querySelector("#year").textContent = new Date().getFullYear();

// Copy the email address shown in the contact section.
const copyEmailButton = document.querySelector("#copyEmail");
const copyMessage = document.querySelector("#copyMessage");
const emailAddress = "salanoemmanuel341@gmail.com"; 

copyEmailButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(emailAddress);
    copyMessage.textContent = "Email address copied.";
  } catch (error) {
    copyMessage.textContent = "Copy was blocked by your browser. Select the email address above instead.";
  }
});
