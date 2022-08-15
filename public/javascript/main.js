function checkConnectivityStatus(){

    var status = document.querySelector('#status');

    if(navigator.onLine){
        status.style.background = 'lawngreen';
        status.innerHTML = 'İnternete Baglısınız';
    }
    else {
        status.style.background = 'red';
        status.innerHTML = 'İnternete Baglantısını Kontol ediniz..';
    }

}