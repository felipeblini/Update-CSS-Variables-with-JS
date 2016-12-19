'use strict';

const inputs = document.querySelectorAll('.controls input');

function handleChange(e) {
    const property = this.id;
    const value = this.value;
    const suffix = this.dataset.sizing || '';

    document.documentElement.style.setProperty(`--${property}`, value + suffix);
}

inputs.forEach(el => {
    el.addEventListener('change', handleChange);
    el.addEventListener('mousemove', handleChange);
});