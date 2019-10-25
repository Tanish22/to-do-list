//  METHOD 1

// let toDoList = [];

// function addItem(arr)
// {   
//     let userAns = prompt('What will you do today ?');

//     let formatted = userAns.toUpperCase();

//     if(checkDuplicates(arr, formatted))
//     {
//         arr.push(formatted);
//     }

//     else
//     {
//         prompt('Item already exists');
//     }              
// }

// function checkDuplicates(arr1, arrElem)
// {
//     let elemExists = false;

//     let index = arr1.indexOf(arrElem);

//     if(index !== -1)
//     {
//         elemExists = false;
//     }
    
//     else
//     {
//         elemExists = true;
//     }

//     return elemExists;
// }

// addItem(toDoList);

// addItem(toDoList);

// addItem(toDoList);

// addItem(toDoList);

// console.log(toDoList);


//  METHOD 2


// let toDoList = [];

// function addItem(arr)
// {   
//         let userAns = console.log('What will you do today ?').toUpperCase();
//         !arr.includes(userAns) ? arr.push(userAns) : prompt('Item already exists')
// }
//         for(let i = 0;i<4;i++) addItem(toDoList);

// function removeItem(arr1)
// {
//     console.log(`You deleted ${arr1[arr1.length-4]}`);
//     arr1.shift();   
// }

// removeItem(toDoList);

// console.log(toDoList);



//    METHOD 3 (IDEAL)


let toDoList = [];

function addItem(arr)
{
    let userAns = prompt('What will you do today?');
    !arr.includes(userAns) ? arr.push(userAns) : prompt('Item already exists!!') 
}

for(let i = 0; i < 4; i++)
{
    addItem(toDoList);
}

console.log(toDoList);
    