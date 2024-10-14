(function(){
    var province_data = {
        '北京':'0001', 
        '河北省':'0002', 
        '河南省':'0003',
    };
    var city_data = {
        '0001':{
            '北京市':'001'
        },
        '0002':{
            '石家庄市':'002',
            '唐山市':'003',
        },
        '0003':{
            '郑州市':'004',
            '洛阳市':'005',
        },
    };
    var school_data = {
        '001':{
            '北京大学':'0011',
            '清华大学':'0012',
        }, 
        '002':{
            '河北大学':'0021',
            '河北工业大学':'0022',
        },
        '003':{
            '河北师范大学':'0031',
            '河北农业大学':'0032',
        },
        '004':{
            '郑州大学':'0041',
            '河南大学':'0042',
        },
        '005':{
            '洛阳大学':'0051',
            '洛阳师范大学':'0052',
        },

    };
    var province = document.querySelector('.container.province select');
    var city = document.querySelector('.container.city select');
    var school = document.querySelector('.container.school select');

    generateOption(province_data, province);


    province.addEventListener('change', function(){
        var index = province.selectedIndex;
        var value = province.options[index].value;
        city.innerHTML = '';
        school.innerHTML = '';
        generateOption(city_data[value], city);
        var index = city.selectedIndex;
        var value = city.options[index].value;
        generateOption(school_data[value], school);

    });

    city.addEventListener('change', function(){
        var index = city.selectedIndex;
        var value = city.options[index].value;
        school.innerHTML = '';
        generateOption(school_data[value], school);       
    });

    function generateOption(data, target){
        for(var item in data){
            var option = document.createElement('option');
            option.innerText = item;
            option.value = data[item];
            target.appendChild(option);
        }
    }
})();