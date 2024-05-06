//============================================Go to the top==============================================
async function runGoTop() {
    var goTopDomLoaded = await document.addEventListener('DOMContentLoaded', () => {
        const goTopBtn = document.querySelector('.go-top-btn');

        if (goTopBtn) {

            function checkHeight() {
                if (window.scrollY > 200) {
                    goTopBtn.style.display = "block";
                } else {
                    goTopBtn.style.display = "none";
                }
            }

            window.addEventListener('scroll', checkHeight);

            goTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            })
        }
    })
} runGoTop()

//====================================== Buttons Effect ==========================================
const allButtons = document.querySelectorAll('.btn');

allButtons.forEach(button => {
  button.addEventListener('mouseenter', function(e) {

    let mousePosition = e.target.getBoundingClientRect();

    let x = e.clientX - mousePosition.left;
    let y = e.clientY - mousePosition.top;

    let effect = document.createElement('span');

    effect.style.left = x + 'px';
    effect.style.top = y + 'px';
    this.appendChild(effect)

    setTimeout(() => {
      effect.remove()
    }, 1000)
  });
});