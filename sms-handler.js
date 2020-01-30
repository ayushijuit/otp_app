


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

const otp_input=document.getElementById('otp-input');                                                 
    otp_input.value = "1234";
  } catch (e) {
   console.log(e);
  }
}

main();


  
