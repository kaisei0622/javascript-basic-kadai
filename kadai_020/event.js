const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
	setTimeout(function () {
		text.textContent = "ボタンをクリックしました";
	}, 2000);
});
