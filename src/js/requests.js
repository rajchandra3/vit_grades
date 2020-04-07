var BASE_URL = `https://www.rajchandra.me/calculator`;
// https://www.rajchandra.me
// http://localhost:8083

let question_id;
let getFeebackQuestion = ()=>{
    let cookie = getCookie('q1');
    if(!cookie){
        setCookie('q1','false',1000);
    }else if(cookie == 'true'){
        $('#feedback').css({
            "display" : "none"
        });
    }
    if(cookie == 'false' || !cookie){
        axios.get(`${BASE_URL}/feedback/question`)
        .then(function (response) {
            $('#question').html(response.data.q);
            question_id = response.data.id;
            $('#feedback').css({
                "display" : "block"
            });
        })
        .catch(function (error) {
            $('#message-placeholder').html('Something is not right');
            $('#feedback').css({
                "display" : "none"
            });
        });
    }
}
let sendFeedback = ()=>{
    let response = $("input[name='q1']:checked").val();
    let data = {
        response : response,
        id : question_id
    }
    if(response){
        axios.post(`${BASE_URL}/feedback/response`, data)
          .then(function (response) {
            $('#message-placeholder').html(response.data.message);
            if(response.data.code == 0){
                setCookie('q1','true',1000);
                // remove the feeback
                $('#feedback').css({"display" : "none"});
            }
          })
          .catch(function (error) {
            $('#message-placeholder').html("Error Occured!!");
          });
    }else{
        alert('Please select one of the choices!!')
    }
}

//set cookies
let setCookie = (cname, cvalue, exdays)=> {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
//get cookies
let getCookie =(cname) => {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }