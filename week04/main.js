const form = document.forms['search'];
const input = form.elements.searchInput;

input.addEventListener('focus', () => alert('focused'), false);
input.addEventListener('blur', () => alert('blurred'), false);
input.addEventListener('change', () => alert('changed'), false);

const form = document.forms['search'];
form.addEventListener ('submit', search, false);

function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
}

input.value = 'Search Here';