var BASE_URL = `http://localhost:8083/calculator`;
let question_id;
let getFeebackQuestion = ()=>{
    axios.get(`${BASE_URL}/feedback/question`)
    .then(function (response) {
        console.log(response.data);
        $('#question').html(response.data.q);
        question_id = response.data.id;
    })
    .catch(function (error) {
      console.log(error);
      $('#message-placeholder').val('something is not right');
    });
}
let sendFeedback = ()=>{
    let data = $("input[name='q1']:checked").val();
    if(data){
        axios.post(`${BASE_URL}/feedback/response`, {
            response : data,
            id : question_id
        })
          .then(function (response) {
            $('#message-placeholder').html(response.data.message);
          })
          .catch(function (error) {
            $('#message-placeholder').html("Error Occured!!");
          });
    }else{
        alert('Please select one of the choices!!')
    }
}