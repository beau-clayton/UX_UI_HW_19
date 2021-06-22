
   
let preload = () => {
    const blocks = document.querySelectorAll('.preloader .blocks .block');
    
    let interval = 0;
    blocks.forEach((block, i) => {
        setTimeout(() => {
            animate(block, i);
            }, interval);
            interval += 500;
    });

    function animate(block, index) {
        let position = index;
        setInterval(() => {
            switch (position){
            case 0:
            block.style.top = "40px";
            position = 3;
            break;

            case 1:
                block.style.left= "40px";
                position = 0;
                break;

            case 2:
                block.style.top= "0px";
                position = 1;
                break;

            case 3:
                block.style.left = "0px";
                position = 2;
                break;
        }

    }, 1500);
}
}

preload();

function fade() {
    $('.preloader').fadeOut("slow");
    }
    setTimeout(fade, 3500);


    