

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

                                                
  document.getElementById('otp-input').value = code[1];
  } catch (e) {
   console.log(e);
  }
}

main();


  
