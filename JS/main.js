const form = document.querySelector('#formData');

form.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch('http://localhost', {
      method: 'POST',
      body: new FormData(form),
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    let result = await response.json();

    alert(result.message);
  };
