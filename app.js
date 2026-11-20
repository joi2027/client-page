document.querySelectorAll(".rental-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const property = form.dataset.property;
    const rent = form.dataset.rent;
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = `Rental inquiry: ${property}`;
    const body = [
      `Hello Rian and Russia,`,
      ``,
      `I'm interested in ${property}.`,
      `Monthly rent: ${rent}`,
      `My name: ${name}`,
      `My email: ${email}`,
      ``,
      `Please let me know about availability and viewing times.`
    ].join("\n");

    form.querySelector(".form-note").textContent =
      "Your email app will open with your inquiry ready to send.";
    window.location.href =
      `mailto:hello@dazzlingdynamicduo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
});
