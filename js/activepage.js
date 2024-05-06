async function runActivePage() {
    const activeDomLoaded = await document.addEventListener('DOMContentLoaded', () => {
        const navLinks = document.querySelectorAll('.nav-link');
        if (navLinks) {
            const activePage = window.location.pathname;

            navLinks.forEach(navLink => {
                const navLinkPathname = new URL(navLink.href).pathname;                

                if ((activePage === navLinkPathname) || (activePage === '/' && navLinkPathname === './')) {
                    navLink.classList.add('active-nav');
                }
                if(navLink.nextElementSibling && navLink.nextElementSibling.classList.contains('sub-menu')){
                    const subNavLinks = navLink.nextElementSibling.querySelectorAll('.menu-item a')
                    subNavLinks.forEach((sub) => {
                        const subNavLinkPathname = new URL(sub.href).pathname; 
                        if(subNavLinkPathname === activePage) {
                            const subNavParent = sub.closest('.sub-menu').previousElementSibling;
                            if(subNavParent){
                                subNavParent.classList.add('active-nav');
                            }
                            sub.classList.add('active-nav');
                        }
                    })
                }
            });
        }
    })
} runActivePage()