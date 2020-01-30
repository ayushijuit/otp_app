/**
 *  <sms-receiver> is a custom element that extends <input> elements
 *  with an autocomplete="one-time-code" with the imperative
 *  navigator.sms.receive() API. Submits the form when it receives
 *  the SMS.
 * 
 *  Example:
 *
 *  <form>
 *    <input is="sms-receiver" 
 *           name="otp" 
 *           regex="\s([A-Za-z0-9]{6})\." 
 *           autocomplete="one-time-code" 
 *           placeholder="Code (6 digits)" 
 *           required />
 *    <input type="submit" />
 *  </form>
 *
 *  Parameters:
 *
 *    - regex: a regular expression used to parse the contents of the
 *             sms message and get the OTP code.
 *
 *
 *  Degrades gracefully to the autofill UI or manual input when the
 *  API is not available.
 *
 */

const verify = document.querySelector('#verify');
const otp_input=document.querySelector('#otp-input');


const smsReceiver = async () => {
    if (!navigator.sms) return;
  
    try {
      const sms = await navigator.sms.receive();
      const code = sms.content.match(/^[\s\S]*otp=([0-9]{6})[\s\S]*$/m)[1];
      if (code) {
        otp_input.value = code;
       
       
      } else {
    
        throw 'Received the SMS, but failed to retrieve the OTP.';
      }
    } catch (e) {
     console.log(e);
    }
  };
  
   verify.addEventListener('click', async e => {
    e.preventDefault();
    try {
      
      await smsReceiver();
    } catch (e) {
      console.log(e);
    }  
  });
  
  
