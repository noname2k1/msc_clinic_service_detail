const elements = document.querySelectorAll(
    "form input[type='text'], form textarea"
);

elements.forEach((element) => {
    element.onfocus = function (e) {
        if (!e.target.value) {
            e.target.nextElementSibling.style.display = 'none';
        }
    };
    element.onblur = function (e) {
        if (!e.target.value) {
            e.target.nextElementSibling.style.display = 'block';
        }
    };
    element.onchange = function (e) {
        if (e.target.value) {
            e.target.nextElementSibling.style.display = 'none';
        } else {
            e.target.nextElementSibling.style.display = 'block';
        }
    };
});

const customSelects = document.querySelectorAll('.custom-select');
customSelects.forEach(
    (select) =>
        (select.onclick = function () {
            const ul = select.querySelector('ul.list');
            ul.style.display = 'block';
        })
);

const options = document.querySelectorAll('.custom-select ul li');
options.forEach(
    (option) =>
        (option.onclick = function (e) {
            e.stopPropagation();
            const parent = option.closest('.custom-select');
            const span = parent.querySelector('span');
            span.textContent = option.textContent;
            parent.dataset.value = option.textContent;
            const parentUl = option.closest('ul.list');
            parentUl.style.display = 'none';
        })
);

const button = document.getElementById('view-more');
button.onclick = function (e) {
    e.target.closest('ul').style.height = 'unset';
    e.target.closest('ul').style.overflow = 'visible';
    button.style.display = 'none';
    e.target.closest('ul').querySelector('.overlay').style.display = 'none';
};

// go to top
document.querySelector('li.go-to-top').onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
