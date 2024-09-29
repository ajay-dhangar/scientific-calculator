
const display2 = document.querySelector('.screen2');
const buttons2 = document.querySelectorAll('.btn2');
let prev2 = null;
buttons2.forEach((item) => {
    item.onclick = () => {
        try {
            if (item.dataset.buttont === 'C') {
                display2.value = '';
            } else if (item.dataset.buttont === 'CE') {
                let string = display2.value;
                display2.value = string.substr(0, string.length - 1);
            } else if (item.dataset.buttont === '=') {
                if (display2.value !== '') {
                    display2.value = eval(display2.value);
                    prev2 = '=';
                }
                else {
                    display2.value = 'Enter some value first';
                    setTimeout(() => (display2.value = ''), 1000)
                }
            } else {
                if (prev2 === '=' && (!isNaN(item.dataset.buttont))) {
                    display2.value = '';
                }
                display2.value += item.dataset.buttont;
                prev2 = item.dataset.buttont;
            }
        } catch (err) {
            display2.value = 'Invalid Entry';
            setTimeout(() => (display2.value = ''), 1000)
        }
    }
})
function sin() {
    display2.value = Math.sin(display2.value);
}
function cos(){
    display2.value=Math.cos(display2.value);
}
function tan(){
    display2.value=Math.tan(display2.value);
}
function e(){
    display2.value=Math.exp(display2.value);
}
function fact(){
    let n=display2.value;
    if(n===1 || n===0)
        display2.value=n;
    let p=1;
    for(let i=2;i<=n;i++)
    {
        p*=i;
    }
    display2.value=p;
}
function pi()
{
    display2.value+=Math.PI;
}
function log()
{
    display2.value=Math.log(display2.value);
}
function sup()
{
    display2.value=Math.pow(10,display2.value);
}
function rnd()
{
    display2.value+=Math.random();
}
function sq()
{
    display2.value=Math.pow(display2.value,2);
}
function cube()
{
    display2.value=Math.pow(display2.value,3);
}
function sqrt()
{
    display2.value=Math.sqrt(display2.value);
}