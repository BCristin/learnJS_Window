import checkNumInputs from "./checkNumInputs";
export default function forms(state) {
	const form = document.querySelectorAll("form");
	// const input = document.querySelectorAll("input");
	checkNumInputs("input[name='user_phone']");
	// const phoneInputs = document.querySelectorAll("input[name='user_phone']");
	// phoneInputs.forEach((item) => {
	// 	item.addEventListener("input", () => {
	// 		item.value = item.value.replace(/\D/, "");
	// 	});
	// });
	const message = {
		loading: "Se trimite",
		success: " Multumim, forma a fost trimisa",
		failure: "ceva nu a mers bine",
	};

	const postData = async (url, data) => {
		document.querySelector(".status").textContent = message.loading;
		let res = await fetch(url, {
			method: "POST",
			body: data,
		});
		return await res.text();
	};

	// const clearInputs = () => {
	// 	input.forEach((item) => {
	// 		item.value = "";
	// 	});
	// };
	form.forEach((item) => {
		item.addEventListener("submit", (e) => {
			e.preventDefault();

			let statusMessage = document.createElement("div");
			statusMessage.classList.add("status");
			item.appendChild(statusMessage);

			const formData = new FormData(item);
			if (item.getAttribute("data-calc") === "end") {
				for (let key in state) {
					formData.append(key, state[key]);
				}
			}
			console.log(formData);

			postData("assets/server.php", formData)
				.then((res) => {
					console.log(res);
					statusMessage.textContent = message.success;
				})
				.catch(() => {
					statusMessage.textContent = message.failure;
				})
				.finally(() => {
					// clearInputs();
					item.reset();
					setTimeout(() => {
						statusMessage.remove();
					}, 10000);
				});
		});
	});
}
