function getTransitionEvent(){
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
        'WebkitTransition':'webkitTransitionEnd',
        'transition':'transitionend'
    }
    for(t in transitions){
        if( el.style[t] !== undefined ){
            return transitions[t];
        }
    }
}
module.exports = getTransitionEvent()
