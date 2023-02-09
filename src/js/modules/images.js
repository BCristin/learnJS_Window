export default function images() {
	const workSection = document.querySelector(".works");

	const imgPopup = document.createElement("div");
	imgPopup.classList.add("popup");
	imgPopup.style.justifyContent = "center";
	imgPopup.style.alignItems = "center";
	imgPopup.style.display = "none";
	workSection.appendChild(imgPopup);
	const bigImage = document.createElement("img");
	imgPopup.appendChild(bigImage);

	workSection.addEventListener("click", function (e) {
		e.preventDefault();
		let target = e.target;
		if (target && target.classList.contains("preview")) {
			imgPopup.style.display = "flex";
			const path = target.parentNode.getAttribute("href");
			bigImage.setAttribute("src", path);
		}
		if (target && target.matches("div.popup")) {
			imgPopup.style.display = "none";
		}
	});
}
