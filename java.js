document.addEventListener('DOMContentLoaded',(event) => {
    const checbox = document.getElementById('checbox');
    const body = document.body;

    checbox.addEventListener('change', ()   => {
        if (checbox.checked) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            
        }
    });

    // Set default theme
    body.classList.add('litgh-mode');
});