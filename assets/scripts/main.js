const elements = document.querySelectorAll(
    "form input[type='text'], form textarea"
);

elements.forEach((element) => {
    element.onfocus = function (e) {
        if (!e.target.value) {
            e.target.nextElementSibling.style.visibility = 'hidden';
        }
        e.target.parentNode.style.border = 'unset';
        e.target.parentNode.querySelector('span.error').textContent = '';
    };
    element.onblur = function (e) {
        if (!e.target.value) {
            e.target.nextElementSibling.style.visibility = 'visible';
        }
    };
    element.onchange = function (e) {
        if (e.target.value) {
            e.target.nextElementSibling.style.visibility = 'hidden';
        } else {
            e.target.nextElementSibling.style.visibility = 'visible';
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
    e.target.closest('ul').style.maxHeight = 'unset';
    e.target.closest('ul').style.overflow = 'visible';
    button.style.display = 'none';
    e.target.closest('ul').querySelector('.overlay').style.display = 'none';
};

// go to top
const goToTopBtn = document.querySelector('li.go-to-top');
goToTopBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

let prevScrollPosition = document.documentElement.scrollTop;
let myElement = document.querySelector('.header-wrapper');
goToTopBtn.style.display = 'none';
window.addEventListener('scroll', function () {
    let currentScrollPosition = document.documentElement.scrollTop;

    if (currentScrollPosition < prevScrollPosition) {
        // Người dùng đang cuộn lên trên
        myElement.style.transform = 'translateY(0)';
    } else {
        // Người dùng đang cuộn xuống dưới
        myElement.style.transform = 'translateY(-100%)';
    }
    if (currentScrollPosition < 1000) {
        goToTopBtn.style.display = 'none';
    } else {
        goToTopBtn.style.display = 'flex';
    }

    // Cập nhật lại vị trí cuộn trước
    prevScrollPosition = currentScrollPosition;
});

//responsive
let mm = gsap.matchMedia();

// gsap
gsap.registerPlugin(ScrollTrigger);
mm.add('(min-width: 768px)', () => {
    gsap.to('.fourth-section', {
        scrollTrigger: {
            trigger: '.fourth-section',
            pin: true, // pin the trigger element while active
            start: 'top top', // when the top of the trigger hits the top of the viewport
            end: '+=500', // end after scrolling 500px beyond the start
            scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            snap: {
                snapTo: 'labels', // snap to the closest label in the timeline
                duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
                delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
                ease: 'power1.inOut' // the ease of the snap animation ("power3" by default)
            }
        }
    });
});

var box1 = document.querySelector('.fourth-section .overlay');
let targets = gsap.utils.toArray('.scroll-with-effect li');

// validate input required
const orderBtn = document.querySelector('#order-btn');
orderBtn.onclick = function (e) {
    e.preventDefault();
    const inputs = Array.from(
        e.target.closest('form').querySelectorAll('input,textarea')
    );

    const requiredInputName = ['name', 'phone'];
    for (let i = 0; i < inputs.length; i++) {
        if (requiredInputName.includes(inputs[i].name) && !inputs[i].value) {
            inputs[i].parentNode.querySelector('.error').textContent =
                'Vui lòng điền đủ thông tin cần thiết';
            inputs[i].closest('.input-group').style.border = '1px solid red';
            break;
        }
    }
};
