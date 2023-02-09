export default function closeModalByTime(
	btnCloseModal,
	modalClose,
	time = 10000
) {
	const close = document.querySelector(btnCloseModal);
	const modal = document.querySelector(modalClose);
	close.addEventListener("click", function (e) {
		setTimeout(() => {
			modal.style.display = "none";
			document.body.style.overflow = "";
			document.body.style.marginRight = `0px`;
		}, time);
	});
}
