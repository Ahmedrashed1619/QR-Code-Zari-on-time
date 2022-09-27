
// loading to init...........

$(document).ready(function(){
    $('#loading').fadeOut(2000, function(){
        $('body').css('overflow','visible')
    })
})


// content en.........

let rootEng = `
    <div class="totaly min-vh-50 py-3">
        <div class="img-logo text-center">
            <img src="./img/logo.png" alt="logo on time">
        </div>
        <div class="content text-center">
            <form>
                <input type="phone" class="form-control p-2 mx-auto mb-4" placeholder="Enter Your Phone.." required name="phone" id="phone"/>
                <input type="password" class="form-control p-2 mx-auto mb-4" placeholder="Enter Your Password.." required name="password" id="password"/>
                <!-- <div id="alertEmail" class="alert alert-danger py-1 text-center mx-auto my-2 w-50"></div> -->
                <button class="btn py-2 px-5 btn-warning fw-bold mt-2" type="submit">Activation <i class="fa-solid fa-paper-plane ms-2"></i></button>
            </form>
            <div class="py-3 mt-3">
                <h5 class="mb-4 text-black h4">Download Our App</h5>
                <div class="icons-footer d-flex align-items-center justify-content-center mx-auto">
                        <a target="_blank" rel='noreferrer' href="https://play.google.com/store/apps/details?id=com.zari.zari_manager"><i
                                class="fa-brands fa-google-play fs-2"></i></a>
                        <a target="_blank" rel='noreferrer' href="https://apps.apple.com/eg/app/zari-on-time-manager/id1637906978"><i
                                class="fa-brands fa-apple fs-2"></i></a>
                </div>
            </div>
        </div>
    </div>`;


// content ar......

let rootAra = `
    <div class="totaly min-vh-50 py-4">
        <div class="img-logo text-center">
            <img src="./img/logo.png" alt="لوجو Zari on time">
        </div>
        <div class="content text-center">
            <form>
                <input type="email" class="form-control p-2 mx-auto mb-4" placeholder="ادخل رقم هاتفك.." required name="email" id="email"/>
                <input type="password" class="form-control p-2 mx-auto mb-4" placeholder="ادخل كلمة الســر" required name="password" id="password"/>
                <!-- <div id="alertEmail" class="alert alert-danger py-1 text-center mx-auto my-2 w-50"></div> -->
                <button class="btn py-2 px-5 btn-warning fw-bold mt-2" type="submit">تنشيــط<i class="fa-solid fa-paper-plane me-2"></i></button>
            </form>
            <div class="py-3 mt-3">
                <h5 class="mb-4 text-black h4">قم بتحميل تطبيقنــا</h5>
                <div class="icons-footer d-flex align-items-center justify-content-center mx-auto">
                    <a target="_blank" rel='noreferrer' href="https://play.google.com/store/apps/details?id=com.zari.zari_manager"><i
                            class="fa-brands fa-google-play fs-2"></i></a>
                    <a target="_blank" rel='noreferrer' href="https://apps.apple.com/eg/app/zari-on-time-manager/id1637906978"><i
                            class="fa-brands fa-apple fs-2"></i></a>
                </div>
            </div>
        </div>
    </div>`;


let userLang = navigator.language ;

if(userLang.includes('en')){
    $('#root').html(rootEng);
}

else{
    $('#root').attr('dir' , 'rtl');
    $('#root').html(rootAra);
}





// when user press on send message button...

// $('#sendMessage').click(function(){
//     sendValidMessage();
// })

// validation message...

// function sendValidMessage(){
//     if(isInputEmpty() != true && validUserName() == true && validUserEmail() == true && validTextMessage() == true)
//     {
//         $('#alertSend').html('The message was sent Successfully');
//         $('#alertSend').css({'display':'block' , 'color':'green'});
//         resetForm();
//     }
//     else if (isInputEmpty())
//     {
//         $('#alertSend').html('all fields are important.. You should fill them correctly');
//         $('#alertSend').css({'display':'block' , 'color':'red'});
//         resetForm();
//     }
//     else if(validUserName() == false || validUserEmail() == false || validTextMessage() == false)
//     {
//         $('#alertSend').html('There are Invalid fields.. You should fill them correctly');
//         $('#alertSend').css({'display':'block' , 'color':'red'});
//         resetForm();
//     }
// }



