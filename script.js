
// create snow
const bodyElement = document.querySelector('body');

function delay(t) {
    return new Promise(resolve => setTimeout(resolve, t));
}

async function createSnowflake (){
    while(true) {
        await delay(100);
        const snowflakeElement = document.createElement('div');
        snowflakeElement.setAttribute('class', 'snowflake');
    
        // different the position
        snowflakeElement.style.left = Math.floor(Math.random()*1250).toString()+'px';
        // different size
        let snowflakeSize = Math.floor(Math.random()*10+5).toString()+'px';
        snowflakeElement.style.width = snowflakeSize;
        snowflakeElement.style.height = snowflakeSize;
        // different opacity
        snowflakeElement.style.opacity = Math.random();
        bodyElement.appendChild(snowflakeElement); 

        // takes 10 seconds to fall, then remove this snowflake element
        setTimeout(()=>{
            snowflakeElement.remove();
        }, 10000)
    }
}

createSnowflake();

// click tree
const tree = document.querySelector('.tree');

function clickTree(){
    tree.style.filter = "brightness(100%)";
    // play song
    document.querySelector('audio').play();
}


function clickPresent(letter, present){
    letter='#'+letter;
    document.querySelector(letter).style.display='inline-block';
    document.querySelector('#'+present).style.filter = "brightness(100%)";
}