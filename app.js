// const viloyat = document.getElementById("viloyat");
// const tuman = document.getElementById("tuman");
let classViloyat = document.querySelectorAll(".viloyat")[1];
let classTuman = document.querySelectorAll(".tuman")[1];
let fisrtId = document.getElementById("filtrOne");
let secondId = document.getElementById("filtrTwo");
const regData = [
  { name: "Kokand", rayon: "" },
  { name: "Kokand", rayon: "Фуркатский" },
  { name: "Kokand", rayon: "Узбекистанский" },
  { name: "Kokand", rayon: "Бешарикский" },
  { name: "Kokand", rayon: "Учкуприкский" },
  { name: "Kokand", rayon: "Бувайдинский" },
  { name: "Kokand", rayon: "Дангаринский" },
  { name: "Kokand", rayon: "Багдадский" },
  { name: "Kokand", rayon: "г. Коканд" },
  { name: "Fergana", rayon: "" },
  { name: "Fergana", rayon: "Риштанский" },
  { name: "Fergana", rayon: "Кувинский" },
  { name: "Fergana", rayon: "Куштепинский" },
  { name: "Fergana", rayon: "Язъяванский" },
  { name: "Fergana", rayon: "Ташлакский" },
  { name: "Fergana", rayon: "Ферганский" },
  { name: "Fergana", rayon: "г. Кувасай" },
  { name: "Fergana", rayon: "г. Фергана" },
  { name: "Fergana", rayon: "г. Маргилан" },
  { name: "Fergana", rayon: "Алтарикский" },
  { name: "Fergana", rayon: "Сохский" },
  { name: "Andijan", rayon: "" },
  { name: "Andijan", rayon: "г. Андижан" },
  { name: "Andijan", rayon: "Андижанский" },
  { name: "Andijan", rayon: "Асакинский" },
  { name: "Andijan", rayon: "Алтынкулский" },
  { name: "Andijan", rayon: "Балыкчинский" },
  { name: "Andijan", rayon: "Бустанский" },
  { name: "Andijan", rayon: "Булакбашинский" },
  { name: "Andijan", rayon: "Кургантепинский" },
  { name: "Andijan", rayon: "Мархаматский" },
  { name: "Andijan", rayon: "Избасканский" },
  { name: "Andijan", rayon: "г. Ханабад" },
  { name: "Andijan", rayon: "Хаджаабадский" },
  { name: "Andijan", rayon: "Шахриханский" },
  { name: "Andijan", rayon: "Жалакудукский" },
  { name: "Andijan", rayon: "Пахтаабадский" },
  { name: "Andijan", rayon: "Улугнарский" },
  { name: "Namangan", rayon: "" },
  { name: "Namangan", rayon: "г.Наманган" },
  { name: "Namangan", rayon: "Наманганский" },
  { name: "Namangan", rayon: "Касансайский " },
  { name: "Namangan", rayon: "Мингбулакский" },
  { name: "Namangan", rayon: "Давлатабадский" },
  { name: "Namangan", rayon: "Нарынский район" },
  { name: "Namangan", rayon: "Папский район" },
  { name: "Namangan", rayon: "Туракурганский " },
  { name: "Namangan", rayon: "Уйчинский" },
  { name: "Namangan", rayon: "Учкурганский" },
  { name: "Namangan", rayon: "Чартакский" },
  { name: "Namangan", rayon: "Чустский" },
  { name: "Namangan", rayon: "Янгикурганский" }
];

function selectRegion(params) {
  tuman.innerHTML = "";
  secondId.innerHTML = "";
  params.forEach((element) => {
    if (classViloyat.value == element.name) {
      classTuman.innerHTML += `<option> ${element.rayon} </option>`;
    }
    if (fisrtId.value == element.name) {
      secondId.innerHTML += `<option> ${element.rayon} </option>`;
    }
  });
}


const showBtn = document.getElementById('show-btn')
const modal = document.getElementById('modal')
const overlay = document.getElementById('overlay')
const cancel = document.getElementById('cancel')

const remove = () => (
  modal.classList.remove('hidden'),
  overlay.classList.remove('hidden')
)
const add = () => (
  modal.classList.add('hidden'),
  overlay.classList.add('hidden')
)
showBtn.addEventListener("click", remove);
cancel.addEventListener('click', add)
overlay.addEventListener('click', add)

document.addEventListener('keydown', (e) => {
  if (e.key == 'Escape') add()
})

function cislo() {
  if (event.keyCode < 48 || event.keyCode > 57 || event.keyCode == 190)
    event.returnValue = false;
}

function check(Sender, e) {
  var key = e.which ? e.which : e.keyCode;
  if (key == 44) {
    Sender.value += '.';
    return false;
  }
}
