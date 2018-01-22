        $('#about-btn').on('click',function(){
            $('#about').fadeToggle('slow');
        });
        $('#close-btn').on('click',function(){
            $('#about').css({
                "display":" none"
            });
        });

        // $('#team-view').on('click',function(){
        //     $('#team-data').fadeToggle('slow');
        // });
        function clearAll(){
            $('#g1').val('0');$('#g2').val('0');$('#g3').val('0');$('#g4').val('0');$('#g5').val('0');$('#g6').val('0');$('#g7').val('0');$('#g8').val('0');$('#g9').val('0');$('#g10').val('0');
            $('#c1').val('0');$('#c2').val('0');$('#c3').val('0');$('#c4').val('0');$('#c5').val('0');$('#c6').val('0');$('#c7').val('0');$('#c8').val('0');$('#c9').val('0');$('#c10').val('0');
        }
        $('#gbtn').on('click',function(){
            var g1=0,g2=0,g3=0,g4=0,g5=0,g6=0,g7=0,g8=0,g9=0,g10=0,c1=0,c2=0,c3=0,c4=0,c5=0,c6=0,c7=0,c8=0,c9=0,c10=0,sum=0,gpa=0;
            g1=parseInt($('#g1').val()),g2=parseInt($('#g2').val()),g3=parseInt($('#g3').val()),g4=parseInt($('#g4').val()),g5=parseInt($('#g5').val()),g6=parseInt($('#g6').val()),g7=parseInt($('#g7').val()),g8=parseInt($('#g8').val()),g9=parseInt($('#g9').val()),g10=parseInt($('#g10').val()),c1=parseInt($('#c1').val()),c2=parseInt($('#c2').val()),c3=parseInt($('#c3').val()),c4=parseInt($('#c4').val()),c5=parseInt($('#c5').val()),c6=parseInt($('#c6').val()),c7=parseInt($('#c7').val()),c8=parseInt($('#c8').val()),c9=parseInt($('#c9').val()),c10=parseInt($('#c10').val());
            gpa=(c1*g1+c2*g2+c3*g3+c4*g4+c5*g5+c6*g6+c7*g7+c8*g8+c9*g9+c10*g10)/(c1+c2+c3+c4+c5+c6+c7+c8+c9+c10);

            if(isNaN(gpa)){
                alert("Insufficient data!");
                gpa="Unavailable";
            }
            $('#grades').html("<p><strong>Your GPA is  "+gpa.toFixed(2)+"</strong></p>");
            document.getElementById('reset').classList.remove("hide");
            // document.getElementById('cbtn').classList.remove("hide");
            // document.getElementById("gbtn").className="gbtn hide";
            // $('.body-container').hide(1000);
        });
            // $('#cbtn').click(function(){
            //     document.getElementById('reset').classList.remove("hide");
            //     document.getElementById('cgpa-box').classList.remove("hide");
            //     document.getElementById('cbtn').className="hide";
            //     // $('#gbtn').attr('disabled','disabled');
            //     $('form > input').on('keyup',function(){
            //     var empty=false;
            //     $('form > input').each(function(){
            //         if($(this).val() == '')
            //             empty=true;
            //     if(empty)
            //         $('#submit').attr('disabled','disabled');
            //     else
            //         $('#submit').removeAttr('disabled');
            //     });
            // });
            $('.cgpa-input').on('keyup',function(){
                var input=document.getElementById(this.id).value;
                if(!input==''){
                var re=/^\d+\.?\d{0,2}$/;
                    if (!(re.test(input))){
                        alert("Please enter a valid data.");
                        $(this).val('');
                    }
                }
                if((input>10 || input<0) && this.id==='gpa'){
                    alert('Your GPA should be between 0 and 10 !');
                    $(this).val('');
                }
                else if((input>10 || input<0) && this.id==='cgpa'){
                    alert('Your CGPA should be between 0 and 10 !');
                    $(this).val('');
                }
                else if((input>27 || input<0) && this.id==='c'){
                    alert('Your Credits should be between 16 and 27 !');
                    $(this).val('');
                }
                else if((input>200 || input<0) && this.id==='tc'){
                    alert('Your Credits should be between 0 and 200 !');
                    $(this).val('');
                }
            });
        // });
        $('#submit').click(function(){
            document.getElementById('cgpa-msg').classList.remove("hide");
            // document.getElementById('cbtn').className="btn btn-warning hide";
            var cgpa=parseFloat($('#cgpa').val());
            var gpa=parseFloat($('#gpa').val());
            var c=parseFloat($('#c').val());
            var tc=parseFloat($('#tc').val());

            var f=(((cgpa*tc)+(gpa*c))/(tc+c));
            if(isNaN(f)){
                alert("Insufficient data!");
                f="Unavailable";
            }
            document.getElementById('cgpa-msg').innerHTML="<br>Your CGPA is  "+f.toFixed(2);
        });
        // $('#close').click(function(){
        //     document.getElementById('cgpa-box').className="cgpa-box hide";
        //     // $('#cbtn').attr('disabled','disabled'); //This disables the Get CGPA btn after close is pressed for all the time.
        //     // document.getElementById('gbtn').className="hide"; //adds hide to get GPA btn which is not required.
        //     document.getElementById('cgpa-msg').className="hide";
        //     document.getElementById('cbtn').className="btn btn-warning";
        // });
        $('.form-control').on('keyup',function(){
                var input=document.getElementById(this.id).value;
                if(!input==''){
                var re=/^\d+\.?\d{0,2}$/;
                    if (!(re.test(input))){
                        alert("Please enter a valid data.");
                        $(this).val('');
                    }
                }
                if((input>10 || input<0) && (this.id==='gpa1' || this.id==='gpa2' || this.id==='gpa3' || this.id==='gpa4' || this.id==='gpa5' || this.id==='gpa6' || this.id==='gpa7' || this.id==='gpa8')){
                    alert('Your GPA should be between 0 and 10 !');
                    $(this).val('');
                }
                else if((input>27 || input<0) && (this.id==='fc1' || this.id==='fc2' || this.id==='fc3' || this.id==='fc4' || this.id==='fc5' || this.id==='fc6' || this.id==='fc7' || this.id==='fc8')){
                    alert('Your Credits should be between 16 and 27 !');
                    $(this).val('');
                }
            });
        $('#sem-cgpa-btn').on('click',function(){
            var gpa1, gpa2, gpa3, gpa4, gpa5, gpa6, gpa7, gpa8,fc1=0, fc2=0, fc3=0, fc4=0, fc5=0, fc6=0, fc7=0, fc8=0,fcgpa=0;
            gpa1=$('#gpa1').val();
            fc1 = $('#fc1').val();
            if(gpa1 =='' || fc1===''){
                fc1 = 0;
                gpa1 = 0;
            }
            gpa2=$('#gpa2').val();
            fc2 = $('#fc2').val();
            if(gpa2 =='' || fc2===''){
                fc2 = 0;
                gpa2 = 0;
            }
            gpa3=$('#gpa3').val();
            fc3 = $('#fc3').val();
            if(gpa3 =='' || fc3===''){
                fc3 = 0;
                gpa3 = 0;
            }
            gpa4=$('#gpa4').val();
            fc4 = $('#fc4').val();
            if(gpa4 =='' || fc4===''){
                fc4 = 0;
                gpa4 = 0;
            }
            gpa5=$('#gpa5').val();
            fc5 = $('#fc5').val();
            if(gpa5 =='' || fc5===''){
                fc5 = 0;
                gpa5 = 0;
            }
            gpa6=$('#gpa6').val();
            fc6 = $('#fc6').val();
            if(gpa6 =='' || fc6===''){
                fc6 = 0;
                gpa6 = 0;
            }
            gpa7=$('#gpa7').val();
            fc7 = $('#fc7').val();
            if(gpa7 =='' || fc7===''){
                fc7 = 0;
                gpa7 = 0;
            }
            gpa8=$('#gpa8').val();
            fc8 = $('#fc8').val();
            if(gpa8 =='' || fc8===''){
                fc8 = 0;
                gpa8 = 0;
            }
            fcgpa=((parseFloat(gpa1)*fc1)+(parseFloat(gpa2)*fc2)+(parseFloat(gpa3)*fc3)+(parseFloat(gpa4)*fc4)+(parseFloat(gpa5)*fc5)+(parseFloat(gpa6)*fc6)+(parseFloat(gpa7)*fc7)+(parseFloat(gpa8)*fc8))/(fc1*1+fc2*1+fc3*1+fc4*1+fc5*1+fc6*1+fc7*1+fc8*1);
            if(isNaN(fcgpa)){
                alert("Insufficient Data !!");
            }
            else{
                $('#fcgpa').html('Your CGPA would be '+fcgpa.toFixed(2));
            }
        });