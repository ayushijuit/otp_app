

async function main() {
  if (!navigator.sms) {
    console.log("bye");
  }
  else{
console.log("hii");
  }
  try {
    
    const sms = await navigator.sms.receive();
    const code = sms.content.match(/^[\s\S]*otp=([0-9]{4})[\s\S]*$/m)[1];
            if (!code) {
                console.log("SMS message doesn't match regex");
                 return;
            }
       
       alert("sms received! " + code);

                                                
  document.getElementById('otp-input').value = code;
  } catch (e) {
   console.log(e);
  }
}

main();


  
