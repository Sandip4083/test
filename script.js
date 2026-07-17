document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    alert(`Submitted: ${name} ${email}`);
});


document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('myForm').reset();
});