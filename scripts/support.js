
function hideChatBox () {
    document.getElementById("Support-chatBox").style.display = "none" ;
    document.getElementById("Support-chatBtn").style.display = "block" ;
}

function showChatBox () {
    document.getElementById("Support-chatBox").style.display = "block" ;
    document.getElementById("Support-chatBtn").style.display = "none" ;
}

function create_a_received_msg() {
    var msg = document.createElement('div');
    var paragraph_value = document.createElement('p');
    var profile = document.createElement('div');
    paragraph_value.className = 'supp_one_message_txt';
    msg.className = "supp_one_message_receive";
    profile.className = "profile";
    paragraph_value.innerHTML = "سلام خوبی ؟؟؟؟ من خوسنسثحلصئثلئ سیلتنقدلدش حقخئلحخقئل قئخئقخلئخئخخ"
    var div1 = document.createElement('div');
    var div2 = document.createElement('div');
    var div3 = document.createElement('div');
    div1.appendChild(paragraph_value);
    div3.appendChild(profile);
    msg.appendChild(div1);
    msg.appendChild(div2);
    msg.appendChild(div3);

    var content = document.getElementById("Support-chatBox-content");
    content.appendChild(msg);
}


function create_a_send_msg() {
    var inputTxt = document.getElementById("inputTextBox").value;
    var msg = document.createElement('div');
    var paragraph_value = document.createElement('p');
    var profile = document.createElement('div');
    paragraph_value.className = 'supp_one_message_txt';
    msg.className = "supp_one_message_send";
    profile.className = "profile";
    paragraph_value.innerHTML = inputTxt;
    var div1 = document.createElement('div');
    var div2 = document.createElement('div');
    var div3 = document.createElement('div');
    div1.appendChild(paragraph_value);
    div3.appendChild(profile);
    msg.appendChild(div3);
    msg.appendChild(div2);
    msg.appendChild(div1);

    var content = document.getElementById("Support-chatBox-content");
    content.appendChild(msg);
}