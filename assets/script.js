console.log('xxx')

let yourName = "Tony Patino" 


    

// We'll use these variables to track the counts of each cookie type
 let gb = 0     // Gingerbread
 let cc = 0      // Chocolate Chip
 let sugar = 0   // Sugar Sprinkle

document.getElementById('credit').textContent = `Created by ${yourName}`

//Ginger Bread
document.getElementById('add-gb').addEventListener('click', function (e) {
    console.log('clicked');
    gb += 1;
    document.getElementById('qty-gb').textContent = gb; })
    
// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Gingerbread + button was clicked!')

    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})
document.getElementById('minus-gb').addEventListener('click', function (e) {
    console.log('clicked');
    gb -= 1;
    document.getElementById('qty-gb').textContent = gb; })
    
document.getElementById('add-gb').addEventListener('click', function() {
        console.log('Gingerbread + button was clicked!')

    })

//chocolate chip 
    document.getElementById('add-cc').addEventListener('click', function (e) {
        console.log('clicked');
        cc += 1;
        document.getElementById('qty-cc').textContent = cc; })
        
    document.getElementById('add-cc').addEventListener('click', function() {
            console.log('Chocolatechip + button was clicked!')
    
        })

    document.getElementById('minus-cc').addEventListener('click', function (e) {
            console.log('clicked');
            cc -= 1;
            document.getElementById('qty-cc').textContent = cc; })
            
    document.getElementById('add-cc').addEventListener('click', function() {
                console.log('Chocolatechip + button was clicked!')
        
            })

//Sugar Sprinkle 
document.getElementById('add-sugar').addEventListener('click', function (e) {
    console.log('clicked');
    sugar += 1;
    document.getElementById('qty-sugar').textContent = sugar; })
    
document.getElementById('add-cc').addEventListener('click', function() {
        console.log('Sugar Sprinkle + button was clicked!')

    })

document.getElementById('minus-sugar').addEventListener('click', function (e) {
        console.log('clicked');
        sugar -= 1;
        document.getElementById('qty-sugar').textContent = sugar; })
        
document.getElementById('add-sugar').addEventListener('click', function() {
            console.log('Sugar Sprinkle + button was clicked!')
    
        })

        