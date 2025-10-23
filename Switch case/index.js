/*let day=22;

switch(day){
    
    case 1:
        console.log("It is Monday");
        break;


     case 2:
        console.log("It is Tuesday");
        break;
        
        
    case 3:
        console.log("It is Wednesday");
        break;

    case 4:
        console.log("It is Thursday");
        break;
        
        
    case 5:
        console.log("It is Friday");
        break;


    case 6:
        console.log("It is Saturday");
        break;

    case 7:
        console.log("It is Sunday");
        break;

        default:
            console.log(`${day} is not valid`);
}*/

let grade = 90;
let Letter;

switch(true){
    case grade >= 90:
       Letter="A";
       break;

    case grade >= 80:
       Letter="B";   
       break;

    case grade >= 70:
       Letter="C";   
       break;  
       
    case grade >= 70:
       Letter="D";   
       break;   

    case grade >= 60:
       Letter="E";   
       break;   

       default:
        Letter= "F";
        
}

console.log(`You have got ${Letter}`);