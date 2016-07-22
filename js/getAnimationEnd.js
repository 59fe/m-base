function getAnimationEvent(){
    var t;
    var el = document.createElement('fakeelement');
    var events = {
        'animation':'animationend',
        'WebkitAnimation':'webkitAnimationEnd' 
    }
    for(t in events){
        if( el.style[t] !== undefined ){
            return events[t];
        }
    }
}
module.exports = getAnimationEvent()