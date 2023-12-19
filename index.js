const arr=["red","green","yellow","orange","blue","purple","pink"]
const index=()=>
{
    let num=Math.floor(Math.random()*7);
    console.log(num);
    return num;
}
const on=document.getElementById('on');
const off=document.getElementById('off');
on.addEventListener('click',()=>
{
    const idx=index();
    document.getElementById('img').src=`${arr[idx]}.jpeg`;
    console.log(`${arr[idx]}.jpeg`)
})
off.addEventListener('click',()=>
{
    const idx=index();
    document.getElementById('img').src=`white.jpeg`;
})