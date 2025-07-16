let count =0;
const value=document.getElementById("counter");
const buttons = document.querySelectorAll('.btn button');

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList;

    if (styles.contains('increase')) {
      count++;
    } else if (styles.contains('decrease')) {
      count--;
    } else {
      count = 0;
    }

    value.textContent = count;

    if (count > 0) {
      value.style.color = 'green';
    } else if (count < 0) {
      value.style.color = 'red';
    } else {
      value.style.color = 'black';
    }
  });
});
