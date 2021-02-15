const form = document.querySelector('#formData');

form.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch('http://localhost/12344', {
      method: 'POST',
      body: new FormData(form),
    });

    let result = await response.json();

    alert(result.message);
  };
