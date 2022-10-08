var div=document.createElement('div');
div.style.textAlign='center';
var input=document.createElement('input');
input.setAttribute('type','text');
input.setAttribute('id','id');
input.setAttribute('placeholder','Enter the Id Number eg..Maximum 500')

var button=document.createElement('button');
button.setAttribute('type','button');
button.innerHTML='Get Movie Data';
button.addEventListener('click',getCharacter);
let Name=document.createElement('div');
Name.setAttribute('id','name');
let gender=document.createElement('div');
gender.setAttribute('id','gender');
let occupation=document.createElement('div');
occupation.setAttribute('id','occupation');
let firstepisode=document.createElement('div');
firstepisode.setAttribute('id','firstepisode');
div.append(input,button,Name,gender,occupation,firstepisode);
document.body.append(div);

async function getCharacter(){
    try{
    let res=document.getElementById('id').value;   
    let result=`https://bobsburgers-api.herokuapp.com/characters/${res}`;   

    let data=await fetch(result);  
    let data1=await data.json();     

    console.log(data1.name);   
    Name.innerHTML=`Character Name:  ${data1.name}`;
    console.log(data1.gender);   
    gender.innerHTML=`Gender:  ${data1.gender}`;
    console.log(data1.occupation);   
    occupation.innerHTML=`Occupation:  ${data1.occupation}`;
    console.log(data1.firstEpisode);   
    firstepisode.innerHTML=`First Episode:  ${data1.firstEpisode}`;
    }
    catch(error){
        console.log('Character not found!!!');
    }
}