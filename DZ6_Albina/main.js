const counters = document.querySelectorAll('.counter');
const speed = 1000;

counters.forEach(counter =>{
    const updateCount =() => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;

        console.log(count);

        if(count < target){
            counter.innerText = count + inc;
            setTimeout(updateCount, 1)
        } else {
            counter.innerText = target;
        }


    }
            updateCount()

});

let count = 1000000;

const Count = () => {
    const countTag = document.getElementById('count');
    countTag.innerText = count;
}

Count()

const plusCount = () => {
    count++;
    Count();
}
plusCount()


