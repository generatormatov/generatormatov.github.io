var randnumOne, randnumTwo;

let matOne = ["Гнида", "Хуйня", "Конча", "Шалава", "Девочка", "Говноедка"];
let matTwo = ["Ебаная", "Обтраханая", "Выебаная", "Обоссаная", "Конченная", "Тупая"];

function generate()
{
	getRandOne();
}

function getRandOne(min = 0, max = 5)
{
   randnumOne = Math.floor(Math.random() * (max - min)) + min;
   Math.round(randnumOne/5)*5;
   //alert(randnumOne);
   getRandTwo();
}

function getRandTwo(min = 0, max = 5)
{
   randnumTwo = Math.floor(Math.random() * (max - min)) + min;
   //alert (randnumTwo);
   getString();
}

function getString()
{
	 document.getElementById('mat').innerHTML = matOne[randnumOne] + " " + matTwo[randnumTwo];
}
