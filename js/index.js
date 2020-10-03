 var script_url = 'https://script.google.com/macros/s/AKfycbxYOjHosmodcljp811Cj3xAn1ZAjtchCdGH-S9YQzVzRE4vmqA/exec';
function insert_value(){
    var id1=0;
    var Student_Name = $("#Student_Name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var Course_Name = $("#Course_Name option:selected").val();
    var subject = $("#subject").val();
    
    var url= script_url +"?callback=ctrlq&Student_Name=" +Student_Name + "&id="+id1 + "&email="+email +"&phone="+phone +"&Course_Name="+Course_Name +"&subject="+subject +"&action=insert";
    var request= jQuery.ajax({
     crossDomain : true,
     url:url,
     method:"GET",
     dataType: "jsonp"    
    });
    alert('Submitting completed , Thank you')
}
 function ctrlq(e){
     alert('Submitting completed , Thank you')
 }