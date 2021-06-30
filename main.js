main_window_parametres = "scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=400,height=400,left=0,top=0";


//!for some reason main window does not opening

// window.open("", "_blank","Twitch Notifier", "scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=400,height=400,left=0,top=0");
alert("please allow pop up windows");
//window.open("","_blank");
main_window = window.open("", "_blank","Twitch Notifier", main_window_parametres);
main_window.document.title = "Twitch.tv 🔴 Notifier";
bodyTag = main_window.document.getElementsByTagName("body");

bodyTag = bodyTag[0];

bodyTag.setAttribute("style", "background: #36245c");

useAlert = true;
useNotitification = true;

//!new code after code review.
let helper = createBasicHelper();

console.log(bodyTag);
let settings_button = helper.create_button("settings", bodyTag);
helper.create_text("Notification: ", bodyTag);
let notification_button = helper.create_button("On", bodyTag);

//Nastavení notifikaci idk 
//TODO analyze in future
notification_button.addEventListener("click", function (useNotitification, notification_button) {
    useNotitification = ChangeSettings(useNotitification, notification_button);
});

helper.create_text("AlertBox: ", bodyTag);
alert_button = helper.create_button("On", bodyTag);

alert_button.addEventListener("click",
    function (useAlert, alert_button) {
        useAlert = ChangeSettings(useAlert, alert_button);
    }
);


nick = ""

donate_button = main_window.document.createElement("div");

donate_button.innerHTML = '<form action="https://www.paypal.com/donate" method="post" target="_top"><input type="hidden" name="business" value="jirklym@gmail.com" /><input type="hidden" name="item_name" value="Buy me coffe 😂" /><input type="hidden" name="currency_code" value="USD" /><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" /><img alt="" border="0" src="https://www.paypal.com/en_CZ/i/scr/pixel.gif" width="1" height="1" /></form>';

helper.add_node(bodyTag, donate_button)





prevCount = 0;
prevCountNot = 0;
count = 0;
countNot = 0;

notification_time = setInterval(display_notification, 2500);
viewer_count_timer = setInterval(load_viewer_count, 5000);

function ChangeSettings(settings_variable, settings_button) {
    settings_variable = !settings_variable;

    if (settings_variable) {
        settings_button.setAttribute("value", "On");
    }
    else {
        settings_button.setAttribute("value", "Off");
    }

    return settings_variable;
}

function set_nick_name() {
    //no idea why notification call is here
    //TODO fixme
    Notification.requestPermission();
    //nick = main_window.prompt("Insert Your 🔴 Twitch Nick", "");
    //main_window.alert(nick);
}

function load_viewer_count() {
    count = parseInt(document.getElementsByClassName("ScAnimatedNumber-acnd2k-0")[0].innerText.replace(",", ""));
    if (count != prevCount) {
        console.log("user count change");
        if (count > prevCount) {
            clearInterval(viewer_count_timer);
            main_window.alert(" ❤  You have new viever 🔴 , greet him", 5000);
            viewer_count_timer = setInterval(load_viewer_count, 5000);
        }
        prevCount = count;
    }
}

function display_notification() {
    countNot = parseInt(document.getElementsByClassName("ScAnimatedNumber-acnd2k-0")[0].innerText.replace(",", ""));
    if (countNot != prevCountNot) {
        console.log("user count change Not");
        if (countNot > prevCountNot) {
            var n = new Notification('❤  You have new viever 🔴 , greet him');
        }
        prevCountNot = countNot;
    }
}

function createBasicHelper() {
    let helper = {};
    /**
     * @param value, name of button {} name
     * @param obj parent of future button {} parent
     */
    helper.create_button = function (name, parent) {
        console.log(parent);
        let new_button = main_window.document.createElement("input");
        new_button.setAttribute("value", name);
        new_button.setAttribute("type", "button");
        new_button.addEventListener("click", set_nick_name);

        let helper = createBasicHelper();
        helper.add_node(parent, new_button);
        helper = undefined;

        return new_button;
    }
/**
 * @param value of future text {} data
 * @param parent of future text {} parent
 */
helper.create_text = function (data, parent) {
        new_text_panel = main_window.document.createElement("p");
        new_text_panel.innerText = data;

        let helper = createBasicHelper();
        console.log(parent);
        helper.add_node(parent, new_text_panel);
        helper = undefined;

    }

    
    /**
     * omg this cannot work xD
     */
    helper.add_node = function(parent, element){
        parent.appendChild(element);
    }

    return helper;
}