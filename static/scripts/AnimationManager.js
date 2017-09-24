"use strict";

export default class AnimationManager{
    startAnimation(){
        $("#myBox").animate({marginLeft: "+=500"}, 6000);
    }
}