(function(){
    var province_data = new Array('北京', '河北省', '河南省', '山东省', '山西省');
    var city_data = new Array('北京市', '石家庄市', '郑州市', '济南市', '太原市');
    var school_data = new Array('北京大学', '河北大学', '河南大学', '山东大学', '山西大学');
    var province = document.querySelector('.container.province select');
    var city = document.querySelector('.container.city select');
    var school = document.querySelector('.container.school select');

    generateOption(province_data, province);
    generateOption(city_data, city);
    generateOption(school_data, school);

    province.addEventListener('change', function(){
        var index = province.selectedIndex;
        
    });

    function generateOption(data, target){
        for(var i = 0; i < data.length; i++){
            var option = document.createElement('option');
            option.innerHTML = data[i];
            target.appendChild(option);
        }
    }
})();