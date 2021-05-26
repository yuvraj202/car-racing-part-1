canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");


car1_width = 270;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 270;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadbackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_image;

}


function uploadbackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);

}

function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);

}
window.addEventListener("keydown", my_keydown); /*keydown is a event not an id*/





function my_keydown(e) {

    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == "65") {
        car1_a();
        console.log("key A");
    }
    if (keyPressed == "66") {
        car1_b();
        console.log("key B");
    }
    if (keyPressed == "67") {
        car1_c();
        console.log("key C");
    }
    if (keyPressed == "68") {
        car1_d();
        console.log("key D");
    }
    if (keyPressed == "69") {
        car1_e();
        console.log("key E");
    }
    if (keyPressed == "70") {
        car1_f();
        console.log("key F");
    }
    if (keyPressed == "71") {
        car1_g();
        console.log("key G");
    }
    if (keyPressed == "72") {
        car1_h();
        console.log("key H");
    }
    if (keyPressed == "73") {
        car1_i();
        console.log("key I");
    }
    if (keyPressed == "74") {
        car1_j();
        console.log("key J");
    }
    if (keyPressed == "75") {
        car1_k();
        console.log("key K");
    }
    if (keyPressed == "76") {
        car1_l();
        console.log("key L");
    }
    if (keyPressed == "77") {
        car1_m();
        console.log("key M");
    }
    if (keyPressed == "78") {
        car1_n();
        console.log("key N");
    }
    if (keyPressed == "79") {
        car1_o();
        console.log("key O");
    }
    if (keyPressed == "80") {
        car1_p();
        console.log("key P");
    }
    if (keyPressed == "81") {
        car1_q();
        console.log("key Q");
    }
    if (keyPressed == "82") {
        car1_r();
        console.log("key R");
    }
    if (keyPressed == "83") {
        car1_s();
        console.log("key S");
    }
    if (keyPressed == "84") {
        car1_t();
        console.log("key T");
    }
    if (keyPressed == "85") {
        car1_u();
        console.log("key U");
    }
    if (keyPressed == "86") {
        car1_v();
        console.log("key V");
    }
    if (keyPressed == "87") {
        car1_w();
        console.log("key W");
    }
    if (keyPressed == "88") {
        car1_x();
        console.log("key X");
    }
    if (keyPressed == "89") {
        car1_y();
        console.log("key Y");
    }
    if (keyPressed == "90") {
        car1_z();
        console.log("key Z");
    }

    if (keyPressed == "38") {
        car1_up();
        console.log("up arrow key");
    }
    if (keyPressed == "40") {
        car1_down();
        console.log("down arrow key");
    }
    if (keyPressed == "37") {
        car1_left();
        console.log("left arrow key");
    }
    if (keyPressed == "39") {
        car1_right();
        console.log("right arrow key");
    }
    if (keyPressed == "18") {
        car1_Alt();
        cansole.log("key Alt");
    }
    if (keyPressed == "91") {
        car1_Ctl();
        cansole.log("key Ctl");
    }
    if (keyPressed == "27") {
        car1_Esc();
        cansole.log("key Esc");
    }

}
