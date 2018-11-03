let wrapper = document.querySelector('.wrapper');

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        wrapper.classList.toggle('wrapper--active')
    }, 3200)
  });