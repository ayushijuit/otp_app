


const otp_input=document.querySelector('#otp-input');
async function main() {
  if (!navigator.sms) {
    alert("feature not available :(");
    return;
  }
  try {
    let {content} = await navigator.sms.receive();
    alert("sms received! " + content);
      let regex = this.getAttribute("regex");
            let code = new RegExp(regex).exec(content);
            if (!code) {
                console.log("SMS message doesn't match regex");
                 return;
            }
       
   
    otp_input.value = code;
  } catch (e) {
    alert("time out!");
  }
}

main();


  
