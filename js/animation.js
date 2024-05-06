async function runAnimations() {
    const animationsDomLoaded = document.addEventListener('DOMContentLoaded', () => {
        let sections = document.querySelectorAll('section');
        if (sections) {
            function getOffsetTop(element) {
                let offsetTop = 0;
                while (element) {
                    offsetTop += element.offsetTop;
                    element = element.offsetParent;
                }
                return offsetTop;
            }

            window.onscroll = () => {
                sections.forEach(sec => {
                    let top = window.scrollY;
                    let offset = sec.offsetTop - 300;
                    let height = sec.offsetHeight;

                    if (top >= offset && top < offset + height) {
                        sec.classList.add('show-animate');
                    }
                });
            }
        }


    })
} runAnimations()