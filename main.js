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

setting_button = main_window.document.createElement("input");
setting_button.setAttribute("value", "settings");
setting_button.setAttribute("type","button")
bodyTag[0].appendChild(setting_button);
setting_button.addEventListener("click",SetNickName);


nick = ""

prevCount = 0;
count = 0;

timer = setInterval(loadViewerCount,5000);

function SetNickName()
{
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