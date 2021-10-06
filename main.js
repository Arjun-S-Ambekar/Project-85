canvas = document.getElementById("myCanvas"); 
ctx = canvas.getContext("2d"); 

car_width = 90; 
car_height = 100;
car_image = "car2.png";
car_x = 450;
car_y = 20;

function add() { 
    
    car_imgTag = new Image(); 
    car_imgTag.onload = uploadcar; 
    car_imgTag.src = crar_image; 

    function uploadcar() {
        ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
    }

    window.addEventListener("keydown", my_keydown); 

    function my_keydown(e) { 
       keyPressed = e.keyCode; 
       console.log(keyPressed); 
       
       if(keyPressed == '37') { 
           left(); 
           console.log("left");
        } 
        
        if(keyPressed == '38') {
             up(); 
             console.log("up");
            } 
            
            if(keyPressed == '39') { 
                right(); 
                console.log("right"); 
               } 
               
               if(keyPressed == '40') {
                down();
                    console.log("down");
                    } 
                   
                   }
   
       function up() {
           if (car_y >= 20) {
               car_y = car_y - 10;
               console.log(car_y);
               uploadcar();
           }
       }
   
       function down() {
           if (car_y <= 580) {
               car_y = car_y + 10;
               console.log(car_y);
               uploadcar();
           }
       }
       function right() {
           if (car_x <= 780) {
               car_x = car_x + 10;
               console.log(car_x);
               uploadcar();
           }
       }
       function left() {
           if (car_x >= 20) {
               car_x = car_x - 10;
               console.log(car_x);
               uploadcar();
           }
       }
       
