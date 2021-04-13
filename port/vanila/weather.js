const COORDS = 'coords';


function handleGeoSucces(position){
    console.log(position);
};

function hadleGeoErr(){
     console.log('위치 정보를 읽을 수 없습니다.');
};

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, hadleGeoErr)
};

function loadCoords(){
    const loadedCords = localStrage.getItem(COORDS);
    if(loadedCords === null){
        askForCoords();
    }else{
        //날씨를 얻을 수 있다.
    }
}

function init(){
    loadCoords();
};
init();