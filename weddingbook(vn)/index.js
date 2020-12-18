/* slide */

/* about */

let about_pos = 0;

/* about_event_text */

let about_text_div = document.querySelector('.photo_event_content'); // div 선택
let about_text_ul = about_text_div.children[0]; // div > ul 선택
let about_text_li = about_text_ul.children.length; // div > ul > li 갯수
let about_text_height = about_text_ul.clientHeight;

// div ul의 너비 조정
about_text_ul.style.cssText = `height:calc(52px * ${about_text_li}); transition:1s`;

// div li의 너비 조정
Array.from(about_text_ul.children).forEach(
    (ele) => (ele.style.cssText = `height:calc(100% / ${about_text_li});`)
);

/* about_event_text */

function aboutSlide() {
    let div = document.querySelector('.photo_event_div'); // div 선택
    let ul = div.children[0]; // div > ul 선택
    let li = ul.children.length; // div > ul > li 갯수
    let height = ul.clientHeight;

    // div ul의 너비 조정
    ul.style.cssText = `height:calc(450px * ${li}); transition:1s`;

    // div li의 너비 조정
    Array.from(ul.children).forEach(
        (ele) => (ele.style.cssText = `height:calc(100% / ${li});`)
    );
    
    // 화면 전환
    setInterval(() => {
        about_pos = (about_pos + 1) % li; // 장면 선택
        ul.style.marginTop = `${-about_pos * height}px`;
        about_text_ul.style.marginTop = `${-about_pos * about_text_height}px`;
    }, 2000);
}

function aboutEventUpBtn() {
    let div = document.querySelector('.photo_event_div'); // div 선택
    let ul = div.children[0]; // div > ul 선택
    let li = ul.children.length; // div > ul > li 갯수
    
    // // 화면 전환
    about_pos = (about_pos - 1) % li; // 장면 선택
    if(about_pos < 0) {
        about_pos = 4;
        ul.style.marginTop = `${-about_pos * 450}px`;
        about_text_ul.style.marginTop = `${-about_pos * about_text_height}px`;
    } else {
        ul.style.marginTop = `${-about_pos * 450}px`;
        about_text_ul.style.marginTop = `${-about_pos * about_text_height}px`;
    }
}

function aboutEventDownBtn() {
    let div = document.querySelector('.photo_event_div'); // div 선택
    let ul = div.children[0]; // div > ul 선택
    let li = ul.children.length; // div > ul > li 갯수
    
    // // 화면 전환
    about_pos = (about_pos + 1) % li; // 장면 선택
    ul.style.marginTop = `${-about_pos * 450}px`;
    about_text_ul.style.marginTop = `${-about_pos * about_text_height}px`;
}

/* about */

/* consulting */

let consulting_pos = 0;

/* consulting_event_text */

let consulting_text_div = document.querySelector('.consulting_event_content'); // div 선택
let consulting_text_ul = consulting_text_div.children[0]; // div > ul 선택
let consulting_text_li = consulting_text_ul.children.length; // div > ul > li 갯수
let consulting_text_height = consulting_text_ul.clientHeight;

// div ul의 너비 조정
consulting_text_ul.style.cssText = `height:calc(52px * ${consulting_text_li}); transition:1s`;

// div li의 너비 조정
Array.from(consulting_text_ul.children).forEach(
    (ele) => (ele.style.cssText = `height:calc(100% / ${consulting_text_li});`)
);

/* consulting_event_text */

function consultingSlide() {
    let div = document.querySelector('.consulting_event_div'); // div 선택
    let ul = div.children[0]; // div > ul 선택
    let li = ul.children.length; // div > ul > li 갯수
    let height = ul.clientHeight;

    // div ul의 너비 조정
    ul.style.cssText = `height:calc(450px * ${li}); transition:1s`;

    // div li의 너비 조정
    Array.from(ul.children).forEach(
        (ele) => (ele.style.cssText = `height:calc(100% / ${li});`)
    );

    // 화면 전환
    setInterval(() => {
        consulting_pos = (consulting_pos + 1) % li; // 장면 선택
        ul.style.marginTop = `${-consulting_pos * height}px`;
        consulting_text_ul.style.marginTop = `${-consulting_pos * consulting_text_height}px`;
    }, 2000);
}

function consultingEventUpBtn() {
    let div = document.querySelector('.consulting_event_div'); // div 선택
    let ul = div.children[0]; // div > ul 선택
    let li = ul.children.length; // div > ul > li 갯수
    
    // // 화면 전환
    consulting_pos = (consulting_pos - 1) % li; // 장면 선택
    if(consulting_pos < 0) {
        consulting_pos = 4;
        ul.style.marginTop = `${-consulting_pos * 450}px`;
        consulting_text_ul.style.marginTop = `${-consulting_pos * consulting_text_height}px`;
    } else {
        ul.style.marginTop = `${-consulting_pos * 450}px`;
        consulting_text_ul.style.marginTop = `${-consulting_pos * consulting_text_height}px`;
    }
}

function consultingEventDownBtn() {
    let div = document.querySelector('.consulting_event_div'); // div 선택
    let ul = div.children[0]; // div > ul 선택
    let li = ul.children.length; // div > ul > li 갯수
    
    // // 화면 전환
    consulting_pos = (consulting_pos + 1) % li; // 장면 선택
    ul.style.marginTop = `${-consulting_pos * 450}px`;
    consulting_text_ul.style.marginTop = `${-consulting_pos * consulting_text_height}px`;
}

/* consulting */

window.onload = function () {
    aboutSlide();
    consultingSlide();
};

/* slide */

/* fair */

function fairBtnColor() {
    let btn = document.getElementById('fair_btn'),
        fair_input_name = document.getElementById('fair_input_name').value,
        fair_input_number = document.getElementById('fair_input_number').value;

    if (fair_input_name.trim().length > 0 && fair_input_number.trim().length > 0) {
        btn.style.backgroundColor = '#191919';
        btn.style.borderColor = '#191919';
        btn.style.cursor = "pointer";
    } else {
        btn.style.backgroundColor = "#f2f2f2";
        btn.style.borderColor = '#f2f2f2';
    }
}

function fairCheck() {
    let fair_input_name = document.getElementById('fair_input_name').value,
        fair_input_number = document.getElementById('fair_input_number').value,
        input_name_label = document.getElementById('input_name_label'),
        input_number_label = document.getElementById('input_number_label');

    if (fair_input_name.trim().length <= 0) {
        input_name_label.innerText = 'Please check the name again';
        input_name_label.style.color = 'red';
    }

    if (fair_input_number.trim().length <= 0) {
        input_number_label.innerText = 'Please check the phone-number again';
        input_number_label.style.color = 'red';
    }   
}
/* fair */

/* special */
let slide_count = 0;

let special_logo_image = document.querySelector(".special_logo_image");
let special_content_div = document.querySelector(".special_content");
let special_content_image_div = document.querySelector(".special_content_image_div");

let ul = special_content_div.children[0]; // div > ul 선택
let li = ul.children.length; // div > ul > li 갯수
let height = ul.clientHeight;

// div ul의 너비 조정
ul.style.cssText = `height:calc(900px * ${li}); transition:1.5s`;

// div li의 너비 조정
Array.from(ul.children).forEach(
        (ele) => (ele.style.cssText = `height:calc(100% / ${li});`)
);

window.addEventListener('scroll', () => {
    let position = window.scrollY;

    if(position > 2250) {
        special_logo_image.style.position = "fixed";
        special_logo_image.style.top = "0";
        special_content_div.style.position = "fixed";
        special_content_div.style.top = "0";
        special_content_div.style.zIndex = "4"
        special_content_div.style.marginTop = "240px";
        special_content_image_div.style.right = "0";
        special_content_image_div.style.position = "absolute";
    } else {
        special_logo_image.style.position = "static";     
        special_content_div.style.position = "static";
    }

    if(position > 3800 && slide_count === 0) {
        ++slide_count;
        
        // 화면 전환
        ul.style.marginTop = `${-1 * height}px`;
    } else if (position < 3800 && slide_count === 1) {
        slide_count = 0;
        ul.style.marginTop = `${-0 * height}px`;
    }

    if(position > 6350 && slide_count === 1) {
        ++slide_count;
        ul.style.marginTop = `${-2 * height}px`;
    } else if (position < 6350 && slide_count === 2) {
        --slide_count;
        ul.style.marginTop = `${-1 * height}px`;
    }

    if(position > 9300 && slide_count === 2) {
        special_content_div.style.top = "9300px";
        special_content_div.style.position = "absolute";
        special_logo_image.style.top = "9300px";     
        special_logo_image.style.position = "absolute";  
    }
});

/* special */


/* modal */
let modal = document.getElementById('modal');

function singUpModal() {
    modalInputClear();
    modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

function modalColorBtn() {
    let modal_btn = document.getElementById('modal_fair_btn'),
        modal_input_name = document.getElementById('modal_input_name').value,
        modal_input_number = document.getElementById('modal_input_number').value;

    if (modal_input_name.trim().length > 0 && modal_input_number.trim().length > 0) {
        modal_btn.style.backgroundColor = '#191919';
        modal_btn.style.borderColor = '#191919';
        modal_btn.style.cursor = "pointer";
    } else {
        modal_btn.style.backgroundColor = "#f2f2f2";
        modal_btn.style.borderColor = '#f2f2f2';
    }
}

function modalCheck() {
    let modal_input_name = document.getElementById('modal_input_name').value,
        modal_input_number = document.getElementById('modal_input_number').value,
        modal_name_label = document.getElementById('modal_name_label'),
        modal_number_label = document.getElementById('modal_number_label');

    if (modal_input_name.trim().length <= 0) {
        modal_name_label.innerText = 'Please check the name again';
        modal_name_label.style.color = 'red';
    }

    if (modal_input_number.trim().length <= 0) {
        modal_number_label.innerText = 'Please check the phone-number again';
        modal_number_label.style.color = 'red';
    }   
}

function modalInputClear() {
    let modal_input_name = document.getElementById('modal_input_name'),
    modal_input_number = document.getElementById('modal_input_number');
    
    modal_input_name.value = "";
    modal_input_number.value = "";
}

function modalCancel() {
    
    modal.style.display = "none";
}

/* modal */