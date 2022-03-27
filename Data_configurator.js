// Клапан притока
var klapanIn={
    klapanSwitch:true,
    heater:0.0,
    marka:"",
    qwantity:0
}
// Жидкостный преднагреватель
var waterPredHeater={
    marka:"",
    P_nasosa:0.0,
    U_nasosa:0,
    qwantity:0,
    nomer:0
}
// Электрический преднагреватель
var electroPredHeater={
    P_nagrevaTotal:0,
    U_nagreva:0,
    Stupeni:"",
    qwantity:0
}
// Фильтры
var filtr={
    filtrIn:0,
    filtrOut:0
}
// Клапан рециркуляции
var klapanRec={
    klapanSwitch:true,
    heater:0.0,
    marka:"",
    qwantity:0
}
// Пластинчатый рекуператор
var plastRecuperator={
    klapanSwitch:true,
    klapanKanal:false,
    marka:"",
    qwantity:0
}
// Жидкостный рекуператор
var waterRecuperator={
    marka:"",
    P_nasosa:0.0,
    U_nasosa:0,
    qwantity:0,
    nomer:0
}
// Роторный рекуператор
var rotorRecuperator={
    P_motor:0.0,
    U_motor:0,
    I_motor:0.0,
    qwantity:0
}
// Водяной нагреватель
var waterHeater={
    marka:"",
    P_nasosa:0.0,
    U_nasosa:0,
    qwantity:0,
    nomer:0
}
// Электронагреватель
var electroHeater={
    P_nagrevaTotal:0,
    U_nagreva:0,
    Stupeni:"",
    qwantity:0  
}
// Приточный вентилятор
var ventIn={
    reg:0,
    P_motor:0.0,
    U_motor:0,
    I_motor:0.0,
    qwantity:0
}
// Вытяжной вентилятор
var ventOut={
    reg:0,
    P_motor:0.0,
    U_motor:0,
    I_motor:0.0,
    qwantity:0
}
// Приточный вентилятор с резервом
var ventInRes={
    motorOrVent:false,
    reg:0,
    P_motor:0.0,
    U_motor:0,
    I_motor:0.0,
    qwantity:0
}
// Отсечные клапана приточного вентилятора
var blockKlapanIn={
    klapanSwitch:true,
    marka:"",
    qwantity:0
}
// Вытяжной вентилятор с резервом
var ventIOutRes={
    motorOrVent:false,
    reg:0,
    P_motor:0.0,
    U_motor:0,
    I_motor:0.0,
    qwantity:0
}
// Отсечные клапана вытяжного вентилятора
var blockKlapanOut={
    klapanSwitch:true,
    marka:"",
    qwantity:0
}
// Клапан вытяжки
var klapanOut={
    klapanSwitch:true,
    heater:0.0,
    marka:"",
    qwantity:0
}
// Жидкостный охладитель
var waterCool={
    marka:"",
    P_nasosa:0.0,
    U_nasosa:0,
    qwantity:0,
    nomer:0
}
// Фреоновый охладитель
var freonCool={
    Stupen:0,
    qwantity:0
}
// Увлажнитель воздуха
var humidifier={
    marka:"",
    P_nasosa:0.0,
    U_nasosa:0,
    qwantity:0
}
// Электрический догреватель
var dopElectroHeater={
    P_nagrevaTotal:0.0,
    U_nagreva_max:0,
    Stupeni:"",
    qwantity:0
}
// Описание данных установки
var ventSistema={
    name:"",
    markirovka:"",
    object:"",
    number:"",
    data:"",
    kontakt:""
}
// Данные для шкафа
var SAU={
    numberPowerInput:"",
    P_ust:0.0,
    U_ust:0,
    PowerWHeater:false,
    P_ustWHeater:0.0,
    U_ustWHeater:0,
    CPU:"",
    GOST:"",
    tempGOST:"",
    IP:54,
    kabelInput:"",
    Size:""
}