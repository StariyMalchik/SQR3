/* Tabs */
let tabs = document.querySelector('.tabs');
let btns = tabs?.querySelectorAll('.tabs_btn');
let items = document.querySelectorAll('.tabs_item');

function change(arr, i) {
  arr.forEach(item => {
    item.forEach(i => {i.classList.remove('active')});
    item[i].classList.add('active');
  });
}

for(let i = 0; i < btns?.length; i++) {
  btns[i].addEventListener('click', () => {
    change([btns, items], i);
  })
}