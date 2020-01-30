



async function main() {
  if (!navigator.sms) {
    alert("feature not available :(");
    return;
  }
  try {
    let {content} = await navigator.sms.receive();
    alert("sms received! " + content);
  } catch (e) {
    alert("time out!");
  }
}

main();


  
