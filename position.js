
/* �f�o�C�X�̌X������p�̒l���ω������Ƃ� */
window.addEventListener('deviceorientation',function(event) {

	/* �J�����̈ʒu���擾 */
	var element = document.getElementById('camera'); 
	var position = element.getAttribute('position')
	
	/* x,y,z���̒l */
	var str;
	str = position.x + ", " + position.y + ", " + position.z ;
	alert(str);
	
	/*
	alert(position.x);
	alert(position.y);
	alert(position.z);
	*/
	
});