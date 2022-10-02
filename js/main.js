
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
                <div class="cont-phone w-35 mx-auto position-relative d-flex justify-content-center align-items-center">
                    <div class="cont-select position-absolute start-0 d-flex justify-content-end align-items-center">
                        <img id="img-select" src="../img/flag of egy.png">
                        <select class="py-2" id="phoneNum">
                            <option selected value="1">(+02)</option>
                            <option value="2">(+966)</option>
                        </select>
                    </div>
                    <input type="tel" class="form-control p-2" placeholder="Enter Your Phone.." required name="phone" id="phone"/>
                </div>
                    <p id="alertPhone" class="alert-danger py-2 mb-0 my-2 text-center w-35 mx-auto">The field must contain numbers only (8 : 15) of numbers..</p>
                <div class="w-35 mx-auto pass mt-3">
                    <input type="password" class="form-control p-2 mx-auto mb-4 w-100" placeholder="Enter Your Password.." required name="password" id="password"/>
                </div>
                <div id="alertActive" class="alert py-1 text-center mx-auto my-2 w-50"></div>
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
    <div class="totaly min-vh-50 py-3">
        <div class="img-logo text-center">
            <img src="./img/logo.png" alt="لوجو Zari on time">
        </div>
        <div class="content text-center">
            <form>
                <div class="cont-phone w-35 mx-auto position-relative d-flex justify-content-center align-items-center">
                    <div class="cont-select position-absolute start-0 d-flex justify-content-end align-items-center">
                        <img id="img-select" src="../img/flag of egy.png">
                        <select class="py-2" id="phoneNum">
                            <option selected value="1">(+02)</option>
                            <option value="2">(+966)</option>
                        </select>
                    </div>
                    <input type="tel" class="form-control p-2" placeholder="ادخل رقم هاتفك.." required name="phone" id="phone"/>
                </div>
                    <p id="alertPhone" class="alert-danger py-2 mb-0 my-2 text-center w-35 mx-auto">يجب ان يحتوي الحقل علي أرقام فقط (8 : 15) رقم..</p>
                <div class="w-35 mx-auto pass mt-3">
                    <input type="password" class="form-control p-2 mx-auto mb-4 w-100" placeholder="ادخل كلمة الســر" required name="password" id="password"/>
                </div>
                <div id="alertActive" class="alert py-1 text-center mx-auto my-2 w-50"></div>
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

if(!userLang.includes('en')){
    $('#root').html(rootEng);
}

else{
    $('#root').attr('dir' , 'rtl');
    $('#root').html(rootAra);
}

// change flag for currency when click 

let phoneNum = document.getElementById('phoneNum');
let cont = document.querySelector('.cont-select')
let img = document.getElementById('img-select');
cont.addEventListener('change' , function(){
    if(phoneNum.value == '1'){
        img.removeAttribute('src');
        img.setAttribute('src' , '../img/flag of egy.png');
    }
    else if(phoneNum.value == '2'){
        img.removeAttribute('src');
        img.setAttribute('src' , '../img/flag of sau.png');
    }
})


let checkName;
function validUserPhone(){
    let regexPhone = /^[0-9]{8,15}$/;
    checkPhone = regexPhone.test($('#phone').val());
    if(checkPhone == true)
    {
        $('#alertPhone').css('display' , 'none');
    }
    else
    {
        $('#alertPhone').css('display' , 'block');
    }
}

$('#phone').on('input' , validUserPhone)


$('form').on('submit' , function(e){
    e.preventDefault();
    let val = $('#phone').val();
    if(checkPhone == true && $('#password').val() != ''){
        if(userLang.includes('en')){
            if(phoneNum.value == '1'){
                val = '02'+$('#phone').val();
            }
            else{
                val = '966'+$('#phone').val();
            }
            $('#alertActive').text('Success..');
        }
        else {
            if(phoneNum.value == '1'){
                val = '02'+$('#phone').val();
            }
            else{
                val = '966'+$('#phone').val();
            }
            $('#alertActive').text('تم التنشيط بنجاح..');
        }
        $('#alertActive').addClass('alert-success');
        $('#alertActive').removeClass('alert-danger');
    }
    else if(checkPhone != true || $('#password').val() == ''){
        $('#alertActive').addClass('alert-danger');
        $('#alertActive').removeClass('alert-success');
        if(userLang.includes('en')){
            $('#alertActive').text('All fields must be filled in correctly..');
        }
        else {
            $('#alertActive').text('يجب ملئ كل الحقول بطريقة صحيحة..');
        }
    }
})



