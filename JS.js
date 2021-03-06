
let adjetive = prompt('please type an adjetive');
let animal = prompt('please type an animal you like');
let place = prompt('please type a place you like');
let sentence = `<h1> there was a ${adjetive} ${animal} who wanted to travel to 
${place} so he saved money for a year and he could go!
</h1>`
document.querySelector('main').innerHTML = sentence;