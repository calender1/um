
const container = document.queryselector('.container');
const emoji = document.queryselector('.emoji');
const textarea = document.queryselector('textarea');
const btn =document.queryselector('.btn');

emoji.addEventListener('click',(e) =>{
       if(e.target.className.includes('emoji')) return;

       textarea.classlist.add('textarea--active');
       btn.classlist.add('btn--active');


	})

container.addEventListener('mouseleave',()=>{

	textarea.classlist.remove('textarea--active');
	btn.classlist.('btn--active');

})
