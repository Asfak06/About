let blinky;
const output=document.querySelector('#header');
const btns=document.querySelector('#btnC');
const row=document.querySelector('#this');
btns.addEventListener('click',stopChanger);
blinky=setInterval(changer,100);
function stopChanger(e) {
	e.preventDefault();
	clearInterval(blinky);
	btns.style.display = 'none';
	h=document.createElement('span');
	h.style.fontSize = '30px';
	h.className='col-6';
	h.style.fontWeight = 'bold';
	h.textContent='You got  ';
	row.prepend(h);
}
function changer () {
    const arr=['bird','flower','teddy','cat','candy','clock','hug','kiss','cake','dinner set'];
    const randomarr = arr[Math.floor(Math.random() * arr.length)];   
    output.textContent= randomarr ;   
 }