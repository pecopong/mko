

var init = function(){
    var pageNow = 1;
    var nextOk = 1;
    var obj = {
        'name' : 'shin',
        'sex' : 1, //1:female, 2:male
        'how' : 4, //1:yellow, 2:blue, 3:red, 4:green
        'born' : 1, //0:normal, 1:brand
        'bag' : 0 //0:normal, 1:brand
    };
    var textborn = {
        'blue' : ['한번에 뛰어내리라고 거의 없는 마찰력과 나쁘지않은 순간 점프력을 제공하는 국가가 인증하고 공기업에서 생산하는 가장 일반적인 투신용 신발. 성공률은 90퍼센트 이상이지만 미끄러짐으로 인해 투신 폼은 장담할 수 없다.', '최고급 명품 브랜드 “아디오스"의 장인의 신발. 성공률 99%. 얼음판 처럼 미끄러운 밑창과 중력을 배로 받게 해주는 소재를 사용했다.뛰어내리는 순간 마찰력을 미세하게 작용하여 아름다운 투신 폼을 구사할 수 있다.'],
        'yellow' : ['끈 묶는 수고를 덜라고 국가가 인증하고 공기업에서 생산하는 가장 일반적인 질식도구. 성공률은 90퍼센트 이상이지만 머리가 크면 불가능한 경우도 있다.', '최고급 명품 브랜드 “샤넼"의 장인의 밧줄. 성공률 99%. 부드러운 촉감과 향긋한 향으로유명하다. 숨은 막히지만 코로 들어오는 향기가 산뜻하다. 목에 자국이 남지 않는다.'],
        'red' : ['확실히 컷을 못해 실려가지 말라고 국가가 인증하고 공기업에서 생산하는 가장 일반적인 도검. 성공률은 90퍼센트 이상이지만 간혹 불량품이 있기도 하다.', '최고급 명품 브랜드 “저스트두잍"의 장인의 도검. 성공률 99%. 순식간에 끝난다. 손목에 ‘저스트두잍’의 명품 로고가 각인된다.'],
        'green' : ['엉뚱한 약 먹고 실려가지 말라고 국가가 인증하고 공기업에서 생산하는 가장 일반적인 약물. 성공률은 90퍼센트 이상이지만 효과가 나오는데 까지 한시간 이상 걸린다.','최고급 명품 브랜드 “처음으로"의 장인의 수면제. 성공률 99%. 취하듯 꿈꾸듯이 갈 수 있다. 태초로 돌아가는 듯한 황홀경을 맛 본다고 한다']
    };

    var arrRight = document.querySelector('#arrRight');
    var background = document.querySelector('#background');
    var wrap = document.querySelector('#wrap');

    var page1 = function(){
        background.src = './data/background1.png';
        var name = document.querySelector('#name');

        
        arrRight.onclick = function(){
            if(name.value == '이름을 입력하세요.'){
                nextOk = 0;
            }

            if(name.value == ''){
                nextOk = 0;
            }

            if(nextOk == 1){
                obj.name = name.value;
                page2();
            }
        }
    }

    var page2 = function(){
        var sex = 0;
        wrap.innerHTML = '<img src="./data/background2.png"><div id="p2box" style="width:1536px; top:0px; position:absolute;"><img id="p2bg" src="./data/p2bg1.png" style="width:100%; top:0px;"><img id="p2male" src="./data/p2male.png" style="position:absolute; top:250px; left:150px; opacity:0.2; transition:1s;"><img id="p2female" src="./data/p2female.png" style="position:absolute; top:250px; left:850px;opacity:0.2; transition:1s;"></div><div style="position:absolute; top:1500px; left:470px; font-size:80px; font-family:sans-serif; width:1000px">성별을 선택하세요.</div><img src="./data/arrRight.png" id="arrRight">';
        
        var p2male = document.querySelector('#p2male');
        var p2female = document.querySelector('#p2female');
        var arrRight = document.querySelector('#arrRight');

        p2male.onclick = function(){
            p2female.style['opacity'] = 0.2;
            p2male.style['opacity'] = 1;
            sex = 2;
        }

        p2female.onclick = function(){
            p2female.style['opacity'] = 1;
            p2male.style['opacity'] = 0.2;
            sex = 1;
        }

        arrRight.onclick = function(){
            if(sex != 0){
                obj.sex = sex;
                page3();
            }
        }
    }

    var page3 = function(){
        wrap.innerHTML = '<img src="./data/background2.png"><div id="p3box" style="width:1536px; top:0px; position:absolute;"><img id="p3bg" src="./data/p2bg1.png" style="width:100%; top:0px;"><img id="p3p" src="./data/p2male.png" style="position:absolute; top:250px; left:500px; "><img id="p3btny" src="./data/3_btn_yellow.png"><img id="p3btnb" src="./data/3_btn_blue.png"><img id="p3btnr" src="./data/3_btn_red.png"><img id="p3btng" src="./data/3_btn_green.png"></div><div style="position:absolute; top:1500px; left:470px; font-size:80px; font-family:sans-serif; width:1536px; height:10px;text-align:center; left:0px;">자살 방법을 선택해주세요.</div><img src="./data/arrRight.png" id="arrRight"><img src="./data/arrLeft.png" id="arrLeft">';
        
        var p3p = document.querySelector('#p3p');
        var p3bg = document.querySelector('#p3bg');
        var p3btny = document.querySelector('#p3btny');
        var p3btnb = document.querySelector('#p3btnb');
        var p3btnr = document.querySelector('#p3btnr');
        var p3btng = document.querySelector('#p3btng');

        if(obj.sex == 2){
            p3p.src = './data/my.png';
            p3bg.src = './data/p3bgy.png';

            p3btny.onclick = function(){
                p3p.src = './data/my.png';
                p3bg.src = './data/p3bgy.png';
                obj.how = 1;
            }

            p3btnb.onclick = function(){
                p3p.src = './data/mb.png';
                p3bg.src = './data/p3bgb.png';
                obj.how = 2;
            }

            p3btnr.onclick = function(){
                p3p.src = './data/mr.png';
                p3bg.src = './data/p3bgr.png';
                obj.how = 3;
            }

            p3btng.onclick = function(){
                p3p.src = './data/mg.png';
                p3bg.src = './data/p3bgg.png';
                obj.how = 4;
            }
        }
        if(obj.sex == 1){
            p3p.src = './data/fey.png';
            p3bg.src = './data/p3bgy.png';

            p3btny.onclick = function(){
                p3p.src = './data/fey.png';
                p3bg.src = './data/p3bgy.png';
                obj.how = 1;
            }

            p3btnb.onclick = function(){
                p3p.src = './data/feb.png';
                p3bg.src = './data/p3bgb.png';
                obj.how = 2;
            }

            p3btnr.onclick = function(){
                p3p.src = './data/fer.png';
                p3bg.src = './data/p3bgr.png';
                obj.how = 3;
            }

            p3btng.onclick = function(){
                p3p.src = './data/feg.png';
                p3bg.src = './data/p3bgg.png';
                obj.how = 4;
            }
        }

        var arrRight = document.querySelector('#arrRight');
        var arrLeft = document.querySelector('#arrLeft');

        arrLeft.onclick = function(){
            page2();
        };
        arrRight.onclick = function(){
            page4();
            console.log('yes');
        };

    }

    var page4 = function(){
        wrap.innerHTML = '<img src="./data/background2.png"><div id="p3box" style="width:1536px; top:0px; position:absolute;"><img id="p4bg" src="./data/p2bg1.png" style="width:100%; top:0px;"><img id="p4item" src="" style="position:absolute; top:100px; left:500px; "><img id="p4arrowR" src="./data/p4L.png"><img id="p4arrowL" src="./data/p4R.png"></div><div style="position:absolute; top:1500px; left:470px; font-size:80px; font-family:sans-serif; width:1536px; height:10px;text-align:center; left:0px;">자살 방법을 선택해주세요.</div><img src="./data/arrRight.png" id="arrRight"><img src="./data/arrLeft.png" id="arrLeft"><div id="exptext" style="position:absolute; width:700px; top:1000px; left:420px; text-align:center; font-family:sans-serif; font-size:40px;"></div>';
        
        var p4bg = document.querySelector('#p4bg');
        var born = 0;
        var exptext = document.querySelector('#exptext');

        if(obj.how == 1){
            p4bg.src = './data/p3bgy.png';
            p4item.src = './data/item1_nor.png';
            exptext.innerHTML = textborn.yellow[0];
        } else if(obj.how ==2){
            p4bg.src = './data/p3bgb.png';
            p4item.src = './data/item2_nor.png';
            exptext.innerHTML = textborn.blue[0];
        } else if(obj.how ==3){
            p4bg.src = './data/p3bgr.png';
            p4item.src = './data/item3_nor.png';
            exptext.innerHTML = textborn.red[0];
       } else if(obj.how ==4){
            p4bg.src = './data/p3bgg.png';
            p4item.src = './data/item4_nor.png';
            exptext.innerHTML = textborn.green[0];
        }

        var p4arrowR = document.querySelector('#p4arrowR');
        var p4arrowL = document.querySelector('#p4arrowL');

        p4arrowR.onclick = function(){
            if(born == 0){
                if(obj.how == 1){
                    p4item.src = './data/item1_brand.png';
                    exptext.innerHTML = textborn.yellow[1];
                } else if(obj.how ==2){
                    p4item.src = './data/item2_brand.png';
                    exptext.innerHTML = textborn.blue[1];
                } else if(obj.how ==3){
                    p4item.src = './data/item3_brand.png';
                    exptext.innerHTML = textborn.red[1];
                } else if(obj.how ==4){
                    p4item.src = './data/item4_brand.png';
                    exptext.innerHTML = textborn.green[1];
                }
                born = 1;
                obj.born = 1;
            } else if(born == 1){
                if(obj.how == 1){
                    p4item.src = './data/item1_nor.png';
                    exptext.innerHTML = textborn.yellow[0];
                } else if(obj.how ==2){
                    p4item.src = './data/item2_nor.png';
                    exptext.innerHTML = textborn.blue[0];
                } else if(obj.how ==3){
                    p4item.src = './data/item3_nor.png';
                    exptext.innerHTML = textborn.red[0];
                } else if(obj.how ==4){
                    p4item.src = './data/item4_nor.png';
                    exptext.innerHTML = textborn.green[0];
                }
                born = 0;
                obj.born = 0;
            }
        }

        p4arrowL.onclick = function(){
            if(born == 0){
                if(obj.how == 1){
                    p4item.src = './data/item1_brand.png';
                    exptext.innerHTML = textborn.yellow[1];
                } else if(obj.how ==2){
                    p4item.src = './data/item2_brand.png';
                    exptext.innerHTML = textborn.blue[1];
                } else if(obj.how ==3){
                    p4item.src = './data/item3_brand.png';
                    exptext.innerHTML = textborn.red[1];
                } else if(obj.how ==4){
                    p4item.src = './data/item4_brand.png';
                    exptext.innerHTML = textborn.green[1];
                }
                born = 1;
                obj.born = 1;
            } else if(born == 1){
                if(obj.how == 1){
                    p4item.src = './data/item1_nor.png';
                    exptext.innerHTML = textborn.yellow[0];
                } else if(obj.how ==2){
                    p4item.src = './data/item2_nor.png';
                    exptext.innerHTML = textborn.blue[0];
                } else if(obj.how ==3){
                    p4item.src = './data/item3_nor.png';
                    exptext.innerHTML = textborn.red[0];
                } else if(obj.how ==4){
                    p4item.src = './data/item4_nor.png';
                    exptext.innerHTML = textborn.green[0];
                }
                born = 0;
                obj.born = 0;
            }
        }

        var arrLeft = document.querySelector('#arrLeft');
        var arrRight = document.querySelector('#arrRight');

        arrLeft.onclick = function(){
            page3();
        };
        arrRight.onclick = function(){
            page5();
        };
    }

    var page5 = function(){
        wrap.innerHTML = '<img src="./data/background2.png"><div id="p3box" style="width:1536px; top:0px; position:absolute;"><img id="p4bg" src="./data/p2bg1.png" style="width:100%; top:0px;"><img id="p5item" src="" style="position:absolute; top:250px; left:500px; "><img id="p4arrowR" src="./data/p4L.png"><img id="p4arrowL" src="./data/p4R.png"><div id="exp" style="width:1000px; font-size:35px;"></div></div><div style="position:absolute; top:1500px; left:470px; font-size:80px; font-family:sans-serif; width:1536px; height:10px;text-align:center; left:0px;">바디백 (body bag)을 선택해주세요.<br>사후 시신 운반용입니다.</div><img src="./data/arrRight.png" id="arrRight"><img src="./data/arrLeft.png" id="arrLeft"><div id="text" style="position:absolute; text-align:center; font-family:sans-serif; width:1536px;></div>';        
        var p4bg = document.querySelector('#p4bg');
        var bag = 0;
        var text = document.querySelector('#text');

        if(obj.how == 1){
            p4bg.src = './data/p3bgy.png';
        } else if(obj.how ==2){
            p4bg.src = './data/p3bgb.png';
        } else if(obj.how ==3){
            p4bg.src = './data/p3bgr.png';
        } else if(obj.how ==4){
            p4bg.src = './data/p3bgg.png';
        }

        var p5item = document.querySelector('#p5item');
        p5item.src = './data/bag_nor.png';
        
        var p4arrowR = document.querySelector('#p4arrowR');
        var p4arrowL = document.querySelector('#p4arrowL');

        p4arrowR.onclick = function(){
            if(bag == 0){
                p5item.src = './data/bag_brand.png';
                bag = 1;
                obj.bag = 1;
            } else {
                p5item.src = './data/bag_nor.png';
                bag = 0;
                obj.bag = 0;
            }
        }

        p4arrowL.onclick = function(){
            if(bag == 0){
                p5item.src = './data/bag_brand.png';
                bag = 1;
                obj.bag = 1;
            } else {
                p5item.src = './data/bag_nor.png';
                bag = 0;
                obj.bag = 0;
            }
        }

        var arrLeft = document.querySelector('#arrLeft');
        var arrRight = document.querySelector('#arrRight');

        arrLeft.onclick = function(){
            page4();
        };
        arrRight.onclick = function(){
            page6();
        };
    }

    var page6 = function(){
        wrap.innerHTML = '<img src="./data/background2.png"><img id="colorbg" style="position:absolute; top:0px; left:0px;" src=""><div id="calc">결과를 계산중입니다.</div><img id="loading" class="rotating" style="position:absolute; top:600px; left:560px;" src="./data/loading.png">';
        var colorbg = document.querySelector('#colorbg');
        colorbg.src = './data/bg'+obj.how+'.png';
        setTimeout(function(){
            page7();
        },3000);
    }

    var page7 = function(){
        wrap.innerHTML = '<img src="./data/background2.png"><img id="colorbg" style="position:absolute; top:0px; left:0px;" src=""><img id="char" src="" style="position:absolute; top:0px; left:0px;"><img id="expp" src="" style="position:absolute; top:0px; left:0px;"><div id="text" style="width:1536px; position:absolute; top:1450px; left:0px; font-size:70px; font-family:sans-serif; text-align:center;"></div><img id="back" src="./data/back.png" style="position:absolute; top:100px; left:1250px;"><div style="position:absolute; left:1275px; top:300px; font-size:50px; width:200px; font-family:sans-serif;">다시하기</div>';
        var colorbg = document.querySelector('#colorbg');
        colorbg.src = './data/bg'+obj.how+'.png';

        var chars = document.querySelector('#char');
        var expp = document.querySelector('#expp');
        var text = document.querySelector('#text');
        var back = document.querySelector('#back');
        var facebook = document.querySelector('#facebook');


        chars.src = './data/'+obj.sex+''+obj.how+''+obj.born+''+obj.bag+'.png';
        expp.src = './data/t_'+obj.sex+''+obj.how+''+obj.born+''+obj.bag+'.png';
        text.innerHTML = obj.name +'님의<br>컨설팅 결과입니다.';

        back.onclick = function(){
            location.reload();
        }
    }

    page7();
};

window.onload = init;