function filter(){
    var input, filter, table, tr, td, cell, i, j;
	filter = document.getElementById("inputFiltro").value.toUpperCase();
	console.log(filter);
    table = document.getElementById("tabela")
	tr = table.getElementsByTagName("tr")
	dados = document.querySelectorAll(".dados")
    for (i = 1; i < tr.length; i++){
		tr[i].style.display = "none"
		td = tr[i].getElementsByTagName("td")
		
    	for (j = 0; j < td.length; j++){
			cell = tr[i].getElementsByTagName("td")[j]

        	if (cell){
        		if (cell.innerHTML.toUpperCase().indexOf(filter) > -1){
            		tr[i].style.display = ""
    				break
          		} 
        	}
    	}
	}
}
