
// client-side js
// run by the browser each time your view template is loaded

console.log('hello world :o');

// Builds the proper event handler for the Santa Form
const buildFormEvent =  (form) => (event) => {
  let view = document.getElementById('view');
  event.preventDefault();
  // Check the text isn't more than 100chars before submitting
  if(form.wish.value.length > 100) {
    alert("Please write your wish within 100 characters");
  } else {
    axios.post('/api/sendWish', {
      username: form.userid.value,
      wish: form.wish.value
    }).then(response => {
      console.log(response);
      view.innerHTML = successComponent;
    }).catch(err => {
      console.log(err.response);
      view.innerHTML = errorComponent('[ERROR ' + err.response.status + '] ' + err.response.data.message);
    });
  }
};

const formComponent = `<p class="bold">Ho ho ho, what do you want for Christmas?</p>
  <form>
    who are you?
    <input name="userid" placeholder="charlie.brown" />
    what do you want for Christmas?
    <textarea name="wish" rows="10" cols="45" maxlength="100" placeholder="Gifts!"></textarea>
    <br/>
    <button type="submit" id="submit-letter">Send</button>
  </form>`;

const successComponent = `<div id="main">
  <div class="fof">
    <h1>Your request has been delivered to Santa! :)</h1>
  </div>
</div>`;

const errorComponent = (err) => {
  return `<div id="main">
    <div class="fof">
      <h1>${err}</h1>
    </div>
  </div>`;
};

onload = () => {
  let currentPath = location.pathname;
  let view = document.getElementById('view');

  if (currentPath === '/') {
    view.innerHTML = formComponent;
    // define variables that reference elements on our page
    const santaForm = document.forms[0];
    // listen for the form to be submitted and add a new dream when it is
    santaForm.onsubmit = buildFormEvent(santaForm);
  } else {
    view.innerHTML = errorComponent("[ERROR 404] PAGE NOT FOUND");
  }
}
