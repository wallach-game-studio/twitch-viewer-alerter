/*if(main_window != null) 
{
    main_window.close();
}*/

params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=400,height=400,left=0,top=0`;

main_window = window.open ("","Twitch Notifier",params,);
main_window.document.title = "Twitch.tv 🔴 Notifier"
bodyTag = main_window.document.getElementsByTagName("body");
bodyTag[0].setAttribute("style","background: #36245c")

useAlert = true;
useNotitification = true;

/*Zalozeni tlacitka settigns*/
setting_button = main_window.document.createElement("input");
setting_button.setAttribute("value", "settings");
setting_button.setAttribute("type","button")
bodyTag[0].appendChild(setting_button);
setting_button.addEventListener("click",SetNickName);

/*Zalozeni tlacitka povolit notifikace zap vyp*/
notificationText = main_window.document.createElement("p");
notificationText.innerText = "Notification: "

notification_button = main_window.document.createElement("input");
notification_button.setAttribute("value", "On");
notification_button.setAttribute("type","button")
bodyTag[0].appendChild(notificationText);
bodyTag[0].appendChild(notification_button);
notification_button.addEventListener("click", function(useNotitification,notification_button){
    useNotitification = ChangeSettings(useNotitification,notification_button);
 } );

/*Zalozeni tlacitka alert box zap Vyp*/ 
alertBoxText = main_window.document.createElement("p");
alertBoxText.innerText = "AlertBox: "

alert_button = main_window.document.createElement("input");
alert_button.setAttribute("value", "On");
alert_button.setAttribute("type","button");
alert_button.setAttribute("id","alert_button");
alertBoxText.innerText = "Alert Box: "
bodyTag[0].appendChild(alertBoxText);
bodyTag[0].appendChild(alert_button);
var alrBtn = main_window.document.getElementById("alert_button");

alert_button.addEventListener("click", function(useAlert,alrBtn){
    useAlert = ChangeSettings(useAlert,alrBtn);
 } );

nick = ""





prevCount = 0;
prevCountNot = 0;
count = 0;
countNot = 0;

timer = setInterval(loadViewerCount,5000);
setInterval(notificationOutputFuntion,5000);

function ChangeSettings(setting,button)
{
    setting = !setting;
    if(setting)
    {
        button.setAttribute("value", "On");
    }
    else
    {
        button.setAttribute("value", "Off");
    }
    return setting;
}

function SetNickName()
{
    Notification.requestPermission();
    nick = main_window.prompt("Insert Your 🔴 Twitch Nick","");
    main_window.alert(nick);
}

function loadViewerCount()
{
    count = parseInt(document.getElementsByClassName("tw-animated-number")[0].innerText);
    if(count != prevCount)
    {
        console.log("user count change");
        if(count>prevCount)
        {
            
            clearInterval(timer);
            main_window.alert(" ❤  You have new viever 🔴 , greet him",5000);
            timer = setInterval(loadViewerCount,5000);
        }
        prevCount = count;
    }
}

function notificationOutputFuntion()
{
    countNot = parseInt(document.getElementsByClassName("tw-animated-number")[0].innerText);
    if(countNot != prevCountNot)
    {
        console.log("user count change Not");
        if(countNot>prevCountNot)
        {
            var n = new Notification('❤  You have new viever 🔴 , greet him');
        }
        prevCountNot = countNot;
    }
}