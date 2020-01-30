


const otp_input=document.getElementById('otp-input');
async function main() {
  if (!navigator.sms) {
    alert("feature not available :(");
    return;
  }
  try {
    let {content} = await navigator.sms.receive();
      let regex = this.getAttribute("regex");
            let code = new RegExp(regex).exec(content);
            if (!code) {
                console.log("SMS message doesn't match regex");
                 return;
            }
       
       alert("sms received! " + code);

    otp_input.value = code[1];
  } catch (e) {
   console.log(e);
  }
}

main();


  
