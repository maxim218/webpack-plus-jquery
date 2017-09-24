"use strict";

import AnimationManager from "./AnimationManager.js";

class MainClass {
    constructor(){
        const animObj = new AnimationManager();
        animObj.startAnimation();
    }
}


window.addEventListener("load", function(){
    const mainObj = new MainClass();
});