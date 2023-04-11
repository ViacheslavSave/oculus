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
