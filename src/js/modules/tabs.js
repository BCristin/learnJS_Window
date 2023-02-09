export default function tabs(
	headerSelector,
	tabSelector,
	contentSelector,
	activeClass,
	display = "block"
) {
	const header = document.querySelector(headerSelector);
	const tab = document.querySelectorAll(tabSelector);
	const content = document.querySelectorAll(contentSelector);

	function hideTabContent() {
		content.forEach((item) => {
			item.style.display = "none";
		});
		tab.forEach((item) => {
			item.classList.remove(activeClass);
		});
	}
	function showTabContent(i = 0) {
		content[i].style.display = display;
		tab[i].classList.add(activeClass);
	}

	hideTabContent();
	showTabContent();

	header.addEventListener("click", (e) => {
		const target = e.target;
		const tabSND = tabSelector.replace(/\./, ""); //tab selectot not dot

		if (
			target &&
			// (target.classList.contains(tabSND) ||
			// 	target.parentNode.classList.contains(tabSND)) //sau
			target.closest(tabSelector)
		) {
			tab.forEach((item, i) => {
				if (target == item || target.parentNode == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});
}
