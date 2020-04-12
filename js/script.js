// start square animation
anime({
  targets:'.square',
  translateX:anime.stagger(10,{grid:[15,4],from:'center',axis:'x'}),
  translateY:anime.stagger(10,{grid:[15,4],from:'center',axis:'y'}),
  rotateZ:anime.stagger([0,90],{grid:[15,4],from:'center',axis:'x'}),
  delay:anime.stagger(200,{grid:[15,4],from:'center'}),
  loop:true,
  direction:'alternate',
  easing:'easeInOutQuad'
});
// square animation end


//start imaginanry gift

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
    const arr=['a bird','a sunflower','a teddy','a cat','candis','a wallclock','a hug','a kiss','a cake','a dinner set'];
    const randomarr = arr[Math.floor(Math.random() * arr.length)];   
    output.textContent= randomarr ;   
 }
// end imaginary gift


$(document).ready(function(){  
  
  new WOW().init();

  $('.toast').toast('show');

  var typed = new Typed(".typed", {
		strings: ["♪Everything under the sun is in tune <br> but the sun is eclipsed by the moon♪","_Brain damage(Pink Floyd)"],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});

	$("#navigation li a").click(function(e) {
		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

	});

	const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation() {

		var body = $("body");

		if($(window).scrollTop() >= navTop) {
			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");
		}
		else {
			body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}
    }

    // sins start
    $('.owl-carousel').owlCarousel({
	    loop:true,
	    items: 4,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	            items:4
	        }
	    }
	});

	var sinsTopOffset = $(".sinsSection").offset().top;
	var countUpFinished = false;
	$(window).scroll(function() {
		if(window.pageYOffset > sinsTopOffset - $(window).height() + 200) {
			$('.chart').easyPieChart({
		        easing: 'easeInOut',
		        barColor: '#fff',
		        trackColor: false,
		        scaleColor: false,
		        lineWidth: 4,
		        size: 152,
		        onStep: function(from, to, percent) {
		        	$(this.el).find('.percent').text(Math.round(percent));
		        }
		    });

		}

	});

});