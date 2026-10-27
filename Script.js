document.addEventListener('DOMContentLoaded', () => {
 
 // --- Dark/Light Theme Control ---
 const themeToggle = document.getElementById('theme-toggle');
 const currentTheme = localStorage.getItem('theme');
 // Initialize saved theme settings
 if (currentTheme) {
 document.documentElement.setAttribute('data-theme', currentTheme);
 themeToggle.textContent = currentTheme === 'dark' ? '🌙' : '🌙';
 }
 themeToggle.addEventListener('click', () => {
 let theme = document.documentElement.getAttribute('data-theme');
 
 if (theme === 'dark') {
 document.documentElement.removeAttribute('data-theme');
 localStorage.setItem('theme', 'light');
 themeToggle.textContent = '🌙';
 } else {
 document.documentElement.setAttribute('data-theme', 'dark');
 localStorage.setItem('theme', 'dark');
 themeToggle.textContent = '🌙';
 }
 });
 // --- Contact Form Client-Side Logic ---
 const contactForm = document.getElementById('contact-form');
 const formFeedback = document.getElementById('form-feedback');
 contactForm.addEventListener('submit', (e) => {
 e.preventDefault(); // Halt structural page reload // Capture user input data values
 const name = document.getElementById('name').value.trim();
 const email = document.getElementById('email').value.trim();
 if (name && email) {
 // Emulate backend processing lag/behavior
 formFeedback.textContent = `Thank you, ${name}! Your message has 
been simulated successfully.`;
 formFeedback.className = 'success';
 
 // Wipe forms clean post-success
 contactForm.reset();
 }
 });
});
