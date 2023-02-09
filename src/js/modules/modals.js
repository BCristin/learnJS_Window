import calcScroll from "./calcScroll";
import { validationCheckbox, validationInput } from "./validation";

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
				let val = true;
				if (item.classList.contains("popup_calc_button")) {
					val = validationInput();
				}
				if (item.classList.contains("popup_calc_profile_button")) {
					val = validationCheckbox();
				}
				if (val) {
					closeAllModal();
					modal.style.display = "block";
					document.body.style.overflow = "hidden";
					document.body.style.marginRight = `${calcScroll()}px`;
					// document.body.classList.add("modal-open");
				}
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
			document.querySelectorAll(selector)[1].style.display = "block";
			document.body.style.overflow = "hidden";
			document.body.style.marginRight = `${calcScroll()}px`;
		}, time);
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
