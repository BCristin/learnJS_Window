export function validationInput() {
	const windowWidth = document.querySelector("#width");
	const windowHeight = document.querySelector("#height");

	if (windowWidth.value != "" && windowHeight.value != "") {
		return true;
	} else {
		alert("completaza toate campurile din formular");
		return false;
	}
}

export function validationCheckbox() {
	const windowProfile = document.querySelectorAll(".checkbox");
	if (windowProfile[0].checked || windowProfile[1].checked) {
		return true;
	} else {
		alert("ai uitat sa bifezi ceva");
		return false;
	}
}
