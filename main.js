var params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=400,height=400,left=0,top=0`;

var main_window = window.open ("","Twitch Notifier",params,);
bodyTag = main_window.document.getElementsByTagName("body");
bodyTag[0].setAttribute("style","background: #36245c")

setting_button = main_window.document.createElement("input");
setting_button.setAttribute("value", "settings");
setting_button.setAttribute("type","button")
bodyTag[0].appendChild(setting_button);

