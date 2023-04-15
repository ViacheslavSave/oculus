const tabs = document.querySelectorAll(".tabs__item");
const contentTabs = document.querySelectorAll(".content-tabs__item");
tabs.forEach((element) => {
	element.addEventListener("click", change);
});
function change(e) {
	console.log(e.target.dataset.button);
	tabs.forEach((element) => {
		element.classList.remove("tabs__item--active");
		e.target.classList.add("tabs__item--active");
	});
	contentTabs.forEach((element) => {
		element.classList.remove("content-tabs__item--active");
		document.querySelector(`#${e.target.dataset.button}`).classList.add("content-tabs__item--active");
	});
}
const menuInb =document.querySelector('.menu__inb')
const btnMenu = document.querySelectorAll(".btn-menu");
const menuList = document.querySelector(".menu__list");
btnMenu.forEach((element) => {
	element.addEventListener("click", (e) => {
		if (e.target.closest(".btn-menu--active")) {
			btnMenu.forEach((elem) => {
				elem.classList.remove("btn-menu--active");
				menuInb.classList.remove("menu__inb--active");
				// menuList.classList.toggle("menu__list--active");
			});
		} else if (e.target.closest(".btn-menu")) {

			btnMenu.forEach((elem) => {
				elem.classList.add("btn-menu--active");
				menuInb.classList.add("menu__inb--active");
				// menuList.classList.toggle("menu__list--active");
			});
		}
		menuList.classList.toggle("menu__list--active");
	});
});
const menuItem = document.querySelectorAll(".menu__link");

menuItem.forEach((element) => {
	element.addEventListener("click", (e) => {
		console.log(e);
		btnMenu.forEach((elem) => {
			elem.classList.remove("btn-menu--active");
			menuList.classList.remove("menu__list--active");
			menuInb.classList.remove("menu__inb--active");
		});
	});
});

// !
document.body.addEventListener("click", (e) => {
	console.log('body');
	if (!e.target.closest(".btn-menu--active") && !e.target.closest(".menu__list--active")) {
		console.log('body2');
		btnMenu.forEach((elem) => {
			elem.classList.remove("btn-menu--active");
			menuList.classList.remove("menu__list--active");
		});
	}
});

