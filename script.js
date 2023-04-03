function addForm() {
    var formContainer = document.getElementById("formContainer");
    
    var form = document.createElement("form");
    
    var label1 = document.createElement("label");
    label1.innerHTML = "Établissement:";
    
    var input1 = document.createElement("input");
    input1.type = "text";
    
    form.appendChild(label1);
    form.appendChild(input1);
    
    var label2 = document.createElement("label");
    label2.innerHTML = "Date de début:";
    
    var input2 = document.createElement("input");
    input2.type = "date";
    
    form.appendChild(label2);
    form.appendChild(input2);
    
    var label3 = document.createElement("label");
    label3.innerHTML = "Date de fin:";
    
    var input3 = document.createElement("input");
    input3.type = "date";
    
    form.appendChild(label3);
    form.appendChild(input3);
    
    var label4 = document.createElement("label");
    label4.innerHTML = "En cours";
    
    var input4 = document.createElement("input");
    input4.type = "checkbox";
    
    form.appendChild(label4);
    form.appendChild(input4);
    
    var label5 = document.createElement("label");
    label5.innerHTML = "Tâches:";
    
    var input5 = document.createElement("textarea");
    
    form.appendChild(label5);
    form.appendChild(input5);
    
    var removeButton = document.createElement("button");
    removeButton.innerHTML = "Supprimer";
    removeButton.type="button";
    removeButton.onclick = function() {
    form.remove();
    }
    form.appendChild(removeButton);
    
    formContainer.appendChild(form);
    }