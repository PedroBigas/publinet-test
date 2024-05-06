async function runLgpdCheck() {
    const loadLgpdCheck = await window.addEventListener('load', function () {
        if (!localStorage.lgpd && !sessionStorage.lgpd) {
            const btnLGPD = document.querySelector('.accept');
            const boxLGPD = document.querySelector('.lgpd');
            boxLGPD.style.display = 'block';

            btnLGPD.addEventListener('click', function () {
                localStorage.setItem("lgpd", 'ok');
                sessionStorage.setItem("lgpd", 'ok');
                boxLGPD.style.display = 'none';
            })
        }
    })
}runLgpdCheck()