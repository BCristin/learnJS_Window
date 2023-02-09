const modals = () => {
	function bindModal(
		triggerSelector,
		modalSelector,
		closeSelector,
		closeClickOverlay = true
	) {
		const trigger = document.querySelectorAll(triggerSelector);
		const modal = document.querySelector(modalSelector);
		const close = document.querySelector(closeSelector);
		const window = document.querySelectorAll("[data-modal]");
		const scroll = calcScroll();

		function closeAllModal() {
			window.forEach((item) => {
				item.style.display = "none";
			});
		}
		trigger.forEach((item) => {
			item.addEventListener("click", (e) => {
				if (e.target) {
					e.preventDefault();
				}

				closeAllModal();
				modal.style.display = "block";
				document.body.style.overflow = "hidden";
				document.body.style.marginRight = `${scroll}px`;
				// document.body.classList.add("modal-open");
			});
		});

		close.addEventListener("click", function () {
			closeAllModal();

			modal.style.display = "none";
			document.body.style.overflow = "";
			document.body.style.marginRight = `0px`;

			// document.body.classList.remove("modal-open");
		});
		modal.addEventListener("click", function (e) {
			if (e.target === modal && closeClickOverlay) {
				closeAllModal();
				modal.style.display = "none";
				document.body.style.overflow = "";
				document.body.style.marginRight = `0px`;

				// document.body.classList.remove("modal-open");
			}
		});
	}
	function showModalbyTime(selector, time) {
		setTimeout(function () {
			document.querySelector(selector).style.display = "block";
			document.body.style.overflow = "hidden";
		}, time);
	}

	function calcScroll() {
		let div = document.createElement("div");
		div.style.width = "50px";
		div.style.height = "50px";
		div.style.overflow = "scroll";
		div.style.visibility = "hidden";
		document.body.appendChild(div);

		let scrollWidth = div.offsetWidth - div.clientWidth;
		div.remove();
		return scrollWidth;
	}
	bindModal(
		".popup_engineer_btn",
		".popup_engineer",
		".popup_engineer .popup_close"
	);
	bindModal(".phone_link", ".popup", ".popup .popup_close");
	bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close");
	bindModal(
		".popup_calc_button",
		".popup_calc_profile",
		".popup_calc_profile_close",
		false
	);
	bindModal(
		".popup_calc_profile_button",
		".popup_calc_end",
		".popup_calc_end_close",
		false
	);
	showModalbyTime(".popup", 60000);
};

export default modals;