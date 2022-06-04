



var Sname = document.getElementById("name");

var Sroll = document.getElementById("roll");

var Sgroup = document.getElementById("group");

var btn = document.getElementById("btn_record");



btn.addEventListener('click', function(para){

    para.preventDefault();

    console.log(Sname.value)  
    
    if (Sname.value === ''){

        alert(" Please emter Name")

    }    else if ( Sroll.value === ''){

        alert(" Please Enter roll")
    }else
    
    // Auto make Table with JavaScript : 
    
    {
        var tbody = document.getElementById('tbody');
        var tr = document.createElement('tr');

        // for student name 
        var td = document.createElement('td');

        tr.appendChild(td);

        td.innerHTML = Sname.value ;

        // for Student ID 
       
        var td1 = document.createElement('td'); 
        tr.appendChild(td1);
        td1.innerHTML = Sroll.value ; 
        
        // for Student Group

        var td3 = document.createElement('td'); 
        tr.appendChild(td3);
        td3.innerHTML = Sgroup.value ; 

        tbody.appendChild(tr)





    
    
    }
})
