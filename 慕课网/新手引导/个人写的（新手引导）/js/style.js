
//����һ����
window.onload=function(){
//  ��ȡ��ɫͼ��
    var omask = document.getElementById('mask');

    //��ȡ��Ԫ��div
    var osearchTip = document.getElementById('searchTip');
    // ��ȡ������Ԫ��divץ����
    var asetp = osearchTip.getElementsByTagName('div');
    //��ȡ���е���Ԫ������� a��ǩ
    var aA = osearchTip.getElementsByTagName('a');
    //��ȡ���еĹرհ�ť
    var aClose = osearchTip.getElementsByTagName('span');

//  �����岽���׶Σ�  ��ȡcookie  ��ȡ���ǵ�60��  www.�ҵ���ַ.com ����
    var res = document.cookie.substring(5);
    alert('��ʮ��ֻ�ܲ��ᵯ����ʾ��');


//�ж��Ƿ����������վ��������Ͳ���ʾ��ʾ��Ϣ
    //��ҳ�治����   "www.bbb.com.cn  ִ�����´���
    if (res != "www.bbb.com.cn") {
// ���ڶ�������ɫ������ʾ       ������                  ��һ�� ��Ԫ��            ��ʾ
        omask.style.display = osearchTip.style.display = asetp[0].style.display = 'block';

//(������)��ѭ��   ����
        for (var i = 0; i < asetp.length; i++) {
            aA[i].index = i; //Ϊÿһ����ť����һ��index���ԣ� a��ǩ��û��������ԣ� Ϊ����������
            aA[i].onclick = function () {
                //�ñ������a��ǩ�ĸ��ף�����
                this.parentNode.style.display = "none";

                //     asetp.length�����а�ť�ĸ�����ȥ1���������һ����ť      this.index�ǵ�ǰ��ť            ���ͣ���ǰ��ť�������һ����ť����ִ�����´���            if��Ϊ�˽������
                if (this.index < asetp.length - 1) {
                    // ��ǰ�Ĳ���+ 1 ��ʾ����
                    asetp[this.index + 1].style.display = "block"
                }
                //else �������������벻ִ�У���ִ��else����Ĵ���
                else if (this.index == asetp.length - 1) {
                    //����   ��   ��Ԫ�� ������
                    omask.style.display = osearchTip.style.display = "none"

                }
            }
        }

// �����Ĳ���   �رհ�ť
        for (var i = 0; i < aClose.length; i++) {
            aClose[i].onclick = function () {
                omask.style.display = osearchTip.style.display = "none";
            }
        }

//�����岽1�׶Σ�  �����Ƿ��ǵ�һ�ε�½����cookie����   ���

        //��ȡ��ǰ����
        var oDate = new Date();

        // oDate.setDate��ǰ����  ������д���Ǽ�30��֮��             ���ͣ���oData�����ڵ���30��֮�������
        oDate.setDate(oDate.getDate() + 30);

        //               ���֣��Լ���  ��վ��ַ        ʧЧʱ��(30��)
        document.cookie = "name=www.bbb.com.cn;expires=" + oDate;

    }
};