var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["product"] = document.getElementById("product").value;
    formData["quantity"] = document.getElementById("quantity").value;

    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("shoppingList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.product;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.quantity;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = `<a class="btn btn-danger" onClick="onDelete(this)">Remove</a>`;
}

function resetForm() {
    document.getElementById("product").value = "";
    document.getElementById("quantity").value = "";

    selectedRow = null;
}




function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("shoppingList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("product").value == "") {
      alert("Product Name Field is Required !");

        isValid = false;

    } else if (document.getElementById("quantity").value == 0) {
      alert("Quantity Field is required and should be Greater than 0 ");
        isValid = false;

    } else {
        isValid = true;

    }
    return isValid;
}
