document.addEventListener('DOMContentLoaded', () => {

	//гамбургер
	const menu = document.querySelector('.header__ul');
    const menuItem = document.querySelectorAll('.header__li');
    const hamburger = document.querySelector('.header__burger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__burger_active');
        menu.classList.toggle('header__ul_active');
    });
	//при клике на любую из ссылок гамбургер скроется
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header__burger_active');
            menu.classList.toggle('header__ul_active');
        });
	});});