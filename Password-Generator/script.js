
const input = document.querySelector('.input')
const keyword = document.querySelector('.keyword')
const reset = document.querySelector('.reset-img')
const generate = document.querySelector('.generate')
const output = document.querySelector('.result')
const copy = document.querySelector('.copy')

generate.addEventListener('click', () => {
    let password = random();
    output.textContent = password;
    input.value = ''
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
    let len = input.value
    if (pass.length > len){
        for (let i = 0; i < len; i++) {
            let randomIndex = Math.floor(Math.random() * char.length);
            pass += char[randomIndex];
            console.log(keyword.value.length);
        }
        return pass
    }
}
console.log(keyword.value.length);

function resetInput() {
    input.value = ''
    output.textContent = ''
}
