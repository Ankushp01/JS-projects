
const input = document.querySelector('.input')
const keyword = document.querySelector('.keyword')
const reset = document.querySelector('.reset-img')
const generate = document.querySelector('.generate')
const output = document.querySelector('.result')
const copy = document.querySelector('.copy')

generate.addEventListener('click', () => {
    let password = random();
    output.textContent = password;
})

reset.addEventListener('click', resetInput)

copy.addEventListener('click', () => {
    navigator.clipboard.writeText(output.textContent)
        .then(() => {
            alert('Text copied successfully!');
        })
        .catch(err => {
            alert('Failed to copy text:', err);
        });
})

function random() {
    const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let pass = `${keyword.value}`;
    let len = input.value;
    let pass_length = pass.length;
    for (let i = 0; i < len; i++) {
        if (len > pass_length) {
            let randomIndex = Math.floor(Math.random() * char.length);
            pass += char[randomIndex];
            pass_length++;
        }
    }
    return pass
}

function resetInput() {
    input.value = ''
    output.textContent = ''
    keyword.value = ''
}
