let counter = 0;
const getData = () => {
  //calls an API and gets the Data
  console.log("Fetching the data ..", counter++);
};

const doSomeMagic = function (func, delay) {
  let timer;
  return function () {
    let context = this,
      args = arguments;

    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };

};

const betterFunction = doSomeMagic(getData, 300);


function handleClick(){
    console.log("I was Clicked")
}





function debounceClick (func , delay){
    let timeID;
    return function(...args){


        if(timeID){
            clearTimeout(timeID)
        }


        timeID  = setTimeout(() => {
            func(...args)
        }, delay);


    }
}



const betterClickFunction = debounceClick(handleClick,500)



function throttleClick(func,delay){
    let last = 0
    return function(...args){
        const now = new Date().getTime()

        if (now - last < delay){
            return
        }
        last = now
        return func(...args)
    }


}


const betterClickThrottleFunction = throttleClick(handleClick,5000)