let generalKnowledgeQuesttions = [
    {question  : "One who makes and sells cushion and cover chairs is called a/an ?", option1 : "Taner" , option2 : "Miliner" , option3 : "Upholsterer" , option4 : "Janitor" , answer : "Upholsterer"} ,
    {question  : "The capital of Rwanda is ?" , option1 : "Kharotum" , option2 : "Kingston" , option3 : "Kigali" , option4 : "Kabul" , answer : "Kigali"},
    {question  : "What is the slogan of  Yobe State ?" , option1 : "The Power State" , option2 : "The young shall grow" , option3 : "State of equality" , option4 : "Home of Peace" , answer : "The young shall grow"},
    {question  : "A commander of a fleet is called a/an ?" , option1 : "Charwoman", option2 : "Granary", option3 : "Admiral", option4 : "Tinker", answer : "Admiral" } ,
    {question  : "Koffi Annan is well known for his role as ?" , option1 : "President of United Nations" , option2 : "Secetary of General Africa Nations" , option3 : "Secetary General of United Nations" , option4 : "President of Ghana" , answer : "Secetary General of United Nations"},
    {question  : "A place where insects are breeded and kept is called a/an ?" , option1 : "Lair" , option2 : "Insectarium" , option3 : "Depot" , option4 : "Byre", answer : "Insectarium"} ,
    {question  : "The time Zone operative in Nigeria is ?" , option1 : "+2 GMT" , option2 : "GMT" , option3 : "+1 GM " , option4 : "-1 GMT" ,answer : "+1 GMT"},
    {question  : "River Nile has its source from ?" , option1 : "Lake Tanganyika" , option2 : "Lake Victoria" , option3 : "Lake Chad" , option4 : "Lake Albert" , answer : "Lake Victoria"} ,
    {question  : "The instrument used to measure pressure is ?", option1 : " Guage" , option2 : "Thermometer" , option3 : "Barometer" , option4 : "Hygrometer" , answer : "Barometer"} ,
    {question  : "The Nigeria  currency used  before the change to the Naira was ?" , option1 : "Kobo" , option2 : "Dollar" , option3 : "Pound" , option4 : "Riyal",answer : "Pound"}
]
let container = document.getElementById('wholeContainer')
let genQ = document.getElementById('genQuestion');
let genOp  = document.getElementById('genOptionContainer');
let genNext = document.getElementById('genNext')
let genPrev = document.getElementById('genPrev')
let genSub = document.getElementById('genS')
let finalCont = document.getElementById('final')
let reCal = document.getElementById('reCal')



let number = 0;
let score = 0;
let count = 0



let interval = setInterval(function(){
    document.getElementById('count').innerHTML = `${count} seconds`;
    count++;
    if(count === 30){
        clearInterval(interval);
        document.getElementById('count').innerHTML = 'Done'
        container.style.display = 'none'
        // finalCont.innerHTML = `Your score is ${score}%`
        let total = (score/100) * 100
        reCal.style.alignContent = 'center'
        reCal.style.color = 'green'
        reCal.style.backgroundColor = 'navy'
        reCal.style.padding =' 10%'
        reCal.style.fontWeight = 'bold'
        reCal.style.fontStyle = 'italic'
        reCal.innerHTML = `
         <h1>Your score is ${total}% </h1>`
        
    }
},1000)


function checkGenQ (general){
    
    genQ.innerHTML =generalKnowledgeQuesttions[general].question;
    genOp.innerHTML=`
        <span>  <input name = "option" value ="${generalKnowledgeQuesttions[general].option1}" type = "radio"> ${generalKnowledgeQuesttions[general].option1}</span> <br>
        <span>  <input name = "option" value = "${generalKnowledgeQuesttions[general].option2}" type = "radio"> ${generalKnowledgeQuesttions[general].option2}</span>  <br>
        <span>  <input name = "option"  value = "${generalKnowledgeQuesttions[general].option3}" type = "radio"> ${generalKnowledgeQuesttions[general].option3}</span>  <br>
        <span> <input name = "option"  value = " ${generalKnowledgeQuesttions[general].option4}" type = "radio"> ${generalKnowledgeQuesttions[general].option4}</span> 
            `
genNext.addEventListener('click',()=>{
    let myRadio = document.querySelector('input[type="radio"]:checked');
    let selectedValue = "";

        

    
        if(myRadio){
            selectedValue = myRadio.value 
                generalKnowledgeQuesttions[general].selected = selectedValue
            if(selectedValue == generalKnowledgeQuesttions[general].answer){
                score += 10
                // alert(score)
            }
            else if(!myRadio){
                alert('no option selected')
            }
    
            else{
                number++
            }
        }
        


        if(number == generalKnowledgeQuesttions['length']-2){
            genSub.style.display = 'block'
            genNext .style.display = 'none'
            genSub.style.marginLeft = '37%'
            genSub.style.position = 'absolute'
        }

        if(number == generalKnowledgeQuesttions['length']-10){
            genPrev.style.display = 'block'
            genPrev.style.position = 'absolute'
            genPrev
        }

        ++number
        checkGenQ(number)
})



genPrev.addEventListener('click',()=>{
let myRadio = document.querySelector('input[type="radio"]:checked');
let selectedValue = "";
    
    if(myRadio){
        selectedValue = myRadio.value 
            generalKnowledgeQuesttions[number].selected = selectedValue
        if(selectedValue == generalKnowledgeQuesttions[number].answer){
            score += 10
            // alert(score)
        }
        
    }
    --number
      checkGenQ(number)
    
})    
   


let span = document.querySelectorAll('span')
                    for(items of span){
                        let items=document.getElementById('genOptionContainer')
                        items.style.columns = '2'
}
        span[0].style.backgroundColor = 'tomato';span[0].style.display = 'block'; span[0].style.width = '300px';span[0].style.padding ='10px'; span[0].style.borderRadius ='20px'
        span[1].style.backgroundColor = 'tomato';span[1].style.display = 'block';span[1].style.width = '300px';span[1].style.padding ='10px'; span[1].style.borderRadius ='20px'
        span[2].style.backgroundColor = 'tomato';span[2].style.display = 'block';span[2].style.width = '300px';span[2].style.padding ='10px'; span[2].style.borderRadius ='20px'
        span[3].style.backgroundColor = 'tomato'; span[3].style.display = 'block';span[3].style.width = '300px';span[3].style.padding ='10px'; span[3].style.borderRadius ='20px'
        
        
}
checkGenQ(number)



        




                
genNext.style.backgroundColor = 'mediumaquamarine';
genNext.style.padding = '15px';
genNext.style.borderRadius ='20px'; 
genNext .style.width = '150px' 
genNext.style.position = 'absolute'
genNext.style.marginLeft = '15%'
                


genPrev.style.backgroundColor = 'aqua';
genPrev.style.padding = '15px';
genPrev.style.borderRadius ='20px';
genPrev.style.width = '150px'
genPrev.style.display = 'none'
                   
                            
                            
                        
genSub.style.backgroundColor = 'green';
genSub.style.padding = '15px';
genSub.style.borderRadius ='20px';
genSub .style.width = '150px'
genSub .style.display = 'none'
                

                    



                
                
            let body = document.querySelector('body')    
            body.style.backgroundColor = 'teal'
            body.style.backgroundRepeat= 'no-repeat'
            body.style.backgroundSize = 'cover';
            

    


            let div =document.querySelector('div')
                div.style.backgroundColor = 'powderblue'
                div .style.textAlign = 'center'
                div.style.padding = '6%'
                div.style.width = '50%'
                div.style.borderRadius = '50px'
                div.style.marginLeft = '400px'
                div.style.marginTop = '200px'


            let h4 = document.getElementById('genQuestion')
                h4.style.width = "50%"
                h4.style.backgroundColor = 'darkturquoise'
                h4.style.padding = '3%'
                h4.style.borderRadius = '20px'
                h4 .style. marginLeft = '120px'






          








        

            

            
            
            
       




            
        


        
            


