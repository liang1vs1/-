

var keyCode = {
    0:7,
    1:8,
    2:9,
    3:10,
    4:11,
    5:12,
    6:13,
    7:14,
    8:15,
    9:16};
var flag = false;
var appName = '钉钉';
var curr_time = new Date();
var now_Hours = curr_time.getHours();
var now_Minutes = curr_time.getMinutes();
var now_day = curr_time.getDay();
function hitDing(){
    // 点亮屏幕
    if(device.isScreenOn() !=true){
        log("未唤醒");
        device.wakeUpIfNeeded();
        // 向上滑动出密码
        swipe(500,2000,500,1,1000);
        log("输入密码")
        // 需要自行获取密码的坐标
        sleep(100);
        //1
        click(1,1);
        sleep(100);
        //2
        click(1,1);
        sleep(100);
        //3
        click(1,1);
        sleep(100);
        //4
        click(1,1);
        sleep(100);
        //5
        click(1,1);
        sleep(100);
        //6
        click(1,1);
        sleep(500);

    };


    // 打开钉钉
    log('打开钉钉')
    launchApp(appName);
};

if(now_day <= 6){
    log("工作日")
    var i = 0;
    while(flag == false || i == 4){
        curr_time = new Date();
        now_Hours = curr_time.getHours();
        now_Minutes = curr_time.getMinutes();
        now_day = curr_time.getDay();
        log("当前系统时间："+now_Hours+':'+now_Minutes)
    if (now_Hours == 8 && now_Minutes >= 45)
    // 8点45分运行
    {
        log("正确的时间，开始进行打卡");
        flag = true;
        hitDing();
        break;

    }else{
        log("not this time, wait for "+'5'+" mintes");
        sleep(1000*5*60);
        i+=1;      
    }};
}else{
    log("非工作日");
};

