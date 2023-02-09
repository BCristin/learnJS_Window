import calcScroll from "./calcScroll";

export default function images() {
	const workSection = document.querySelector(".works");

	const imgPopup = document.createElement("div");
	imgPopup.classList.add("popup");
	imgPopup.style.justifyContent = "center";
	imgPopup.style.alignItems = "center";
	imgPopup.style.display = "none";
	workSection.appendChild(imgPopup);
	const bigImage = document.createElement("img");
	bigImage.style.maxHeight = "90%";
	bigImage.style.maxWidth = "90%";

	imgPopup.appendChild(bigImage);

	workSection.addEventListener("click", function (e) {
		e.preventDefault();
		let target = e.target;
		if (target && target.classList.contains("preview")) {
			imgPopup.style.display = "flex";
			const path = target.parentNode.getAttribute("href");
			bigImage.setAttribute("src", path);
			document.body.style.overflow = "hidden";
			document.body.style.marginRight = `${calcScroll()}px`;
		}
		if (target && target.matches("div.popup")) {
			imgPopup.style.display = "none";
			document.body.style.overflow = "";
			document.body.style.marginRight = `0px`;
		}
	});
}
