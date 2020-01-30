


const otp_input=document.getElementById('otp-input');
async function main() {
  if (!navigator.sms) {
    alert("feature not available :(");
    return;
  }
  try {
    
    const sms = await navigator.sms.receive();
    const code = sms.content.match(/^[\s\S]*otp=([0-9]{4})[\s\S]*$/m)[1];
            if (!code) {
                console.log("SMS message doesn't match regex");
                 return;
            }
       
       alert("sms received! " + code);

    otp_input.value = code;
  } catch (e) {
   console.log(e);
  }
}

main();


  
