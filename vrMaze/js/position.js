
/* �f�o�C�X�̌X������p�̒l���ω������Ƃ� */
window.addEventListener('deviceorientation',function(event) {

	/* �J�����̈ʒu���擾 */
	var element = document.getElementById('camera'); 
	var position = element.getAttribute('position')
	
	/* x,y,z���̒l */
	var str;
	str = position.x + ", " + position.y + ", " + position.z ;
	
	/* ���L�R�����g���O���Ɖ�ʂɃ|�W�V�������\������܂��B */
	/* alert(str); */
	
});