    // input
    let titel = document.querySelector("#titel");
    let price = document.querySelector("#price");
    let taxes = document.querySelector("#taxes");
    let ads = document.querySelector("#ads");
    let discound = document.querySelector("#discound");
    let totel = document.querySelector("#totel");
    let count = document.querySelector("#count");
    let category = document.querySelector("#category");

    // output
    let Create = document.querySelector("#Create");
    let search = document.querySelector("#search");
    let search_category = document.querySelector("#search-category");
    let search_title = document.querySelector("#search_title");

    // mood
    let mood = "create";

    // error validition
    let error = false;

    //  Get Totel function in crud
    function Get_Totel() {
    // Operations calc get total
    let ALLtest = +price.value + +taxes.value;
    let FiristSecond_ADS = (+ads.value / 100) * +ALLtest;
    let data_total = ALLtest + FiristSecond_ADS;
    let MonySecond_DIS = (discound.value / 100) * +data_total;

    if (price.value != "") {
    if (MonySecond_DIS > data_total) {
        document.querySelector("#isError5").innerHTML =
        "Please, maximum value is 100%";
        error = true;
    } else if (price.value < 0) {
        document.querySelector("#isError2").innerHTML =
        "Please, Enter Valid Data ";
        error = true;
    } else if (taxes.value < 0) {
        document.querySelector("#isError3").innerHTML =
        "Please, Enter Valid Data ";
        error = true;
    } else if (ads.value < 0) {
        document.querySelector("#isError4").innerHTML =
        "Please, Enter Valid Data ";
        error = true;
    } else if (discound.value < 0) {
        document.querySelector("#isError5").innerHTML =
        "Please, Enter Valid Data ";
        error = true;
    } else {
        let result = ALLtest + FiristSecond_ADS - +MonySecond_DIS;
        totel.innerHTML = Math.round(result);
        document.querySelector("#isError5").innerHTML = "";
    }
    totel.style.background = "rgb(0 123 0)";
    } else {
    totel.innerHTML = "";
    totel.style.background = "#0f008b";
    }
    }
    Get_Totel();

    let dataArr; // هخزن بداخلها البيانات

    // Create function in crud
    if (localStorage.product != null) {
    dataArr = JSON.parse(localStorage.product);
    } else {
    dataArr = [];
    }
    Create.onclick = function () {
    // save obj data in store
    let newItems = {
    titel: titel.value.toLowerCase(),
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    discound: discound.value,
    totel: totel.innerHTML,
    count: count.value,
    category: category.value.toLowerCase(),
    };

    // validation in data
    if (titel.value == 0) {
    document.querySelector("#isError1").innerHTML = "Please, Enter Your Titel";
    error = true;
    } else if (titel.value.length > 11) {
    document.querySelector("#isError1").innerHTML =
        "Please, maximum value is 11 ";
    error = true;
    } else if (titel.value < 0) {
    document.querySelector("#isError1").innerHTML = "Please, Enter Valid Data ";
    error = true;
    } else {
    document.querySelector("#isError1").innerHTML = " ";
    }

    if (price.value == 0) {
    document.querySelector("#isError2").innerHTML = "Please, Enter Your Price";
    error = true;
    } else if (price.value < 0) {
    document.querySelector("#isError2").innerHTML = "Please, Enter Valid Data ";
    error = true;
    } else if (price.value.length > 8) {
    document.querySelector("#isError2").innerHTML =
        "Please, maximum value is 8 Number";
    error = true;
    } else {
    document.querySelector("#isError2").innerHTML = " ";
    }

    if (taxes.value == "") {
    document.querySelector("#isError3").innerHTML = "Please, Enter Your Taxes";
    error = true;
    } else if (taxes.value.length > 8) {
    document.querySelector("#isError3").innerHTML =
        "Please, maximum value is 8 Number";
    error = true;
    } else if (taxes.value < 0) {
    document.querySelector("#isError3").innerHTML = "Please, Enter Valid Data ";
    error = true;
    } else {
    document.querySelector("#isError3").innerHTML = " ";
    }

    if (ads.value == "") {
    document.querySelector("#isError4").innerHTML = "Please, Enter Your Ads";
    error = true;
    } else if (ads.value < 0) {
    document.querySelector("#isError4").innerHTML = "Please, Enter Valid Data ";
    error = true;
    } else {
    document.querySelector("#isError4").innerHTML = " ";
    }

    if (discound.value == "") {
    document.querySelector("#isError5").innerHTML =
        "Please, Enter Your Discound";
    error = true;
    } else if (discound.value > 100) {
    document.querySelector("#isError5").innerHTML =
        "Please, maximum value is 100%";
    error = true;
    } else if (discound.value < 0) {
    document.querySelector("#isError5").innerHTML = "Please, Enter Valid Data ";
    error = true;
    } else {
    document.querySelector("#isError5").innerHTML = " ";
    }

    if (count.value == "") {
    document.querySelector("#isError6").innerHTML = "Please, Enter Your Count ";
    error = true;
    } else if (count.value.length > 12) {
    document.querySelector("#isError6").innerHTML =
        "Please, maximum value is 11 ";
    error = true;
    } else if (count.value < 0) {
    document.querySelector("#isError6").innerHTML = "Please, Enter Valid Data ";
    error = true;
    } else {
    document.querySelector("#isError6").innerHTML = " ";
    }

    if (category.value == 0) {
    document.querySelector("#isError7").innerHTML =
        "Please, Enter Your Category";
    error = true;
    } else if (category.value.length > 11) {
    document.querySelector("#isError7").innerHTML =
        "Please, maximum value is 11 ";
    error = true;
    } else if (category.value < 0) {
    document.querySelector("#isError7").innerHTML = "Please, Enter Valid Data ";
    error = true;
    } else {
    document.querySelector("#isError7").innerHTML = " ";
    }

    // When data is not equal to the error message associated with the error
    if (error) {
    error = false;
    } else {
    error = true;

    if (mood === "create") {
        // functin count cereat data
        dataArr.push(newItems);
        totel.style.background = "#0f008b";
    } else {
        dataArr[temp] = newItems;
        Create.innerHTML = "Create";
        mood = "create";
        totel.style.background = "#0f008b";
    }
    error.innerHTML = "";
    clearData();
    }

    localStorage.setItem("product", JSON.stringify(dataArr));
    showData();
    };

    // if I wanna Create data bun i wanna create new data == ( clear data )
    // بعد ما اضيف الداته الي انا عايزها هيفضيلي الحقول عشان اقدر اضيف تاني بسهوله
    function clearData() {
    titel.value = "";
    price.value = "";
    taxes.value = "";
    ads.value = "";
    discound.value = "";
    totel.innerHTML = "";
    count.value = "";
    category.value = "";
    }

    // show Data function
    function showData() {
    let table = "";
    for (let i = 0; i < dataArr.length; i++) {
    var index_glopal = i;
    table += `
            <tr>
                <td><input type="checkbox"  id="checkboxItems"  onclick ="Salected_Items(id)"></td>
                <td>${index_glopal}</td>
                <td>${dataArr[i].titel}</td>
                <td>${dataArr[i].price}</td>
                <td>${dataArr[i].taxes}</td>
                <td>${dataArr[i].ads}</td>
                <td>${dataArr[i].discound}</td>
                <td class="color_td">${dataArr[i].totel}</td>
                <td>${dataArr[i].category}</td>
                <td class="color_td">${dataArr[i].count}</td>
                <td><button onclick = "UpdateData(${index_glopal})">update</button></td>
                <td><button onclick = "dataDelet(${index_glopal})" = >delete</button></td>
            </tr>
                    `;
    }
    document.querySelector("#tbodyy").innerHTML = table;
    let dataBtn = document.getElementById("dataDelete");
    if (dataArr.length > 0) {
    dataBtn.innerHTML = ` 
        <button onclick ="dataDeletAll()" id="dataDeletAll" class="btn-1" type="submit" >Delete All ${dataArr.length}</button>
        `;
    } else {
    dataBtn.innerHTML = "";
    }
    }
    showData();

    // AutoComplet in search
    let spase = "  ";
    let Filter = dataArr.map((datafilter) => {
    return datafilter.titel;
    });

    function seatchData() {
    removeDtat();
    let value = search.value.toLowerCase();

    let div_list_box = document.querySelector("#listAll");

    if (value.length != "") {
    div_list_box.style.display = "block";
    }

    if (value.length === 0) {
    div_list_box.style.display = "none";
    showData();
    }

    let FiterName = [];

    Filter.forEach((Filters) => {
    if (Filters.includes(value.toLowerCase())) {
        FiterName.push(Filters);
    }
    });
    // show data in tabel after get value in input search
    let table = "";
    for (let i = 0; i < dataArr.length; i++) {
    dataArr[i];
    if (dataArr[i].titel.includes(value.toLowerCase())) {
        table += ` <tr>
                                <td><input type="checkbox" id="checkboxItems"  onclick ="Salected_Items(id)" ></td>
                                <td>${i}</td>
                                <td>${dataArr[i].titel}</td>
                                <td>${dataArr[i].price}</td>
                                <td>${dataArr[i].taxes}</td>
                                <td>${dataArr[i].ads}</td>
                                <td>${dataArr[i].discound}</td>
                                <td class="color_td">${dataArr[i].totel}</td>
                                <td>${dataArr[i].category}</td>
                                <td class="color_td">${dataArr[i].count}</td>
                                <td><button onclick = "UpdateData(${i})">update</button></td>
                                <td><button onclick = "dataDelet(${i})" = >delete</button></td>
                            </tr>`;
    } else {
        if (dataArr[i].category.includes(value.toLowerCase())) {
        table += ` <tr>
                                    <td><input type="checkbox" id="checkboxItems"   onclick ="Salected_Items(id)" ></td>
                                    <td>${i}</td>
                                    <td>${dataArr[i].titel}</td>
                                    <td>${dataArr[i].price}</td>
                                    <td>${dataArr[i].taxes}</td>
                                    <td>${dataArr[i].ads}</td>
                                    <td>${dataArr[i].discound}</td>
                                    <td class="color_td">${dataArr[i].totel}</td>
                                    <td>${dataArr[i].category}</td>
                                    <td class="color_td">${dataArr[i].count}</td>
                                    <td><button onclick = "UpdateData(${i})">update</button></td>
                                    <td><button onclick = "dataDelet(${i})" = >delete</button></td>
                                    </tr>`;
        list += `
                <li> ${dataArr[i].titel} </li>
                `;
        }
    }
    document.querySelector("#tbodyy").innerHTML = table;

    // if delete data = delet error masseg
    document.querySelector("#isError1").innerHTML = " ";
    document.querySelector("#isError2").innerHTML = " ";
    document.querySelector("#isError3").innerHTML = " ";
    document.querySelector("#isError4").innerHTML = " ";
    document.querySelector("#isError5").innerHTML = " ";
    document.querySelector("#isError6").innerHTML = " ";
    document.querySelector("#isError7").innerHTML = " ";
    }
    CreateAutoComplet(FiterName);
    }
    seatchData();

    function CreateAutoComplet(list) {
    let list_ul = document.createElement("ul");
    list_ul.className = "list";
    list_ul.id = "data_list";

    list.forEach((datafilter) => {
    let list = document.createElement("li");
    list.className = "listAllData";

    let button = document.createElement("button");
    button.className = "btn_search";
    button.innerHTML = datafilter;
    button.addEventListener("click", Add_Items_Data_in_search);
    list.appendChild(button);
    list_ul.appendChild(list);
    });
    document.querySelector("#listAll").appendChild(list_ul);
    }

    // remove data list if not found data in input search
    function removeDtat() {
    let list_ul = document.querySelector("#data_list");
    if (list_ul) list_ul.remove();
    }

    function Add_Items_Data_in_search(e) {
    e.preventDefault();
    let button_LI = e.target;
    search.value = button_LI.innerHTML;

    seatchData();
    removeDtat();
    let div_list_box = document.querySelector("#listAll");
    div_list_box.style.display = "none";
    }

    // Data Delet function
    function dataDelet(index_glopal) {
    dataArr.splice(index_glopal, 1);
    // localStorage.setItem('product', JSON.stringify(dataArr));
    localStorage.product = JSON.stringify(dataArr);

    // if delete data = delet error masseg
    document.querySelector("#isError1").innerHTML = " ";
    document.querySelector("#isError2").innerHTML = " ";
    document.querySelector("#isError3").innerHTML = " ";
    document.querySelector("#isError4").innerHTML = " ";
    document.querySelector("#isError5").innerHTML = " ";
    document.querySelector("#isError6").innerHTML = " ";
    document.querySelector("#isError7").innerHTML = " ";

    showData();
    }

    // delete all data and show confirmation masseg ----------
    // Data Delet All function
    function dataDeletAll() {
    // add the confirmation masseg
    let message = document.querySelector(".container_all");
    message.classList.add("show");
    }
    // if click on botton "yes" = delet data and heddin box
    function startScan() {
    localStorage.clear();
    dataArr.splice(0);
    clearData();
    showData();
    count.style.display = "block";
    Create.innerHTML = "Create";
    mood = "create";
    search.value = "";
    let SalectedALL = document.querySelector("#SalectedALL");
    SalectedALL.checked = false;

    // if delete data = delet error masseg
    document.querySelector("#isError1").innerHTML = " ";
    document.querySelector("#isError2").innerHTML = " ";
    document.querySelector("#isError3").innerHTML = " ";
    document.querySelector("#isError4").innerHTML = " ";
    document.querySelector("#isError5").innerHTML = " ";
    document.querySelector("#isError6").innerHTML = " ";
    document.querySelector("#isError7").innerHTML = " ";
    hideConfirmation();
    }

    // if click on botton "No" =  heddin box
    function cancelScan() {
    let checkboxItems = document.querySelectorAll("#checkboxItems");
    let SalectedALL = document.querySelector("#SalectedALL");
    SalectedALL.checked = false;
    for (let i = 0; i < checkboxItems.length; i++) {
    checkboxItems[i];
    checkboxItems[i].checked = false;
    }
    hideConfirmation();
    }
    // remove the confirmation masseg
    function hideConfirmation() {
    let message = document.querySelector(".container_all");
    message.classList.remove("show");
    }
    // delete all data and show confirmation masseg ----------

    let temp;
    // Update
    function UpdateData(i) {
    titel.value = dataArr[i].titel;
    price.value = dataArr[i].price;
    taxes.value = dataArr[i].taxes;
    ads.value = dataArr[i].ads;
    discound.value = dataArr[i].discound;
    Get_Totel();
    category.value = dataArr[i].category;
    count.value = dataArr[i].count;
    Create.innerHTML = "Update";
    mood = "Update";

    document.querySelector("#isError1").innerHTML = " ";
    document.querySelector("#isError2").innerHTML = " ";
    document.querySelector("#isError3").innerHTML = " ";
    document.querySelector("#isError4").innerHTML = " ";
    document.querySelector("#isError5").innerHTML = " ";
    document.querySelector("#isError6").innerHTML = " ";
    document.querySelector("#isError7").innerHTML = " ";

    temp = i;
    }

    // checkbox_btn Salected ALL data
    function Salected() {
    let SalectedALL = document.querySelector("#SalectedALL");
    let checkboxItems = document.querySelectorAll("#checkboxItems");
    let Delet_All = document.querySelector("#dataDeletAll");

    if (SalectedALL.checked == true) {
    for (let i = 0; i < checkboxItems.length; i++) {
        checkboxItems[i].checked = true;
        Delet_All.style.display = "block";
    }
    } else {
    for (let i = 0; i < checkboxItems.length; i++) {
        checkboxItems[i].checked = false;
        Delet_All.style.display = "none";
    }
    }
    }
    Salected();

    // confirmation masseg in click on check box
    function Salected_Items() {
    // add the confirmation masseg
    let message = document.querySelector(".container_all2");
    message.classList.add("show");
    }

    // if click on botton "yes" = delet data and heddin box
    function startScan_delet() {
    let checkboxItems = document.querySelectorAll("#checkboxItems");
    let Checkrd_Box = [];
    // loop on button check box
    for (let i = 0; i < checkboxItems.length; i++) {
    checkboxItems[i];
    if (checkboxItems[i].checked == true) {
        Checkrd_Box.push(checkboxItems[i]);
        dataArr.splice(i, 1);
    }
    }
    localStorage.product = JSON.stringify(dataArr);
    hideConfirmation2();
    showData();
    }

    // if click on botton "No" =  heddin box
    function cancelScan2() {
    let checkboxItems = document.querySelectorAll("#checkboxItems");
    for (let i = 0; i < checkboxItems.length; i++) {
    checkboxItems[i];
    checkboxItems[i].checked = false;
    }
    hideConfirmation2();
    }
    // remove the confirmation masseg
    function hideConfirmation2() {
    let message = document.querySelector(".container_all2");
    message.classList.remove("show");
    }
    // delete all data and show confirmation masseg ----------

    /* Dark mood icon */
    const DarkBtn = document.querySelector("#dark_btn");
    const DarkTheme = "dark-theme";
    const DarkIcon = "fa-sun";

    const SelectedTheme = localStorage.getItem("selected-theme");
    const SelectedIcon = localStorage.getItem("selected-icon");

    const GetTheme = () =>
    document.body.classList.contains(DarkTheme) ? "light" : "dark";
    const GetIcon = () =>
    DarkBtn.classList.contains(DarkIcon) ? "fa-sun" : "fa-moon";

    if (SelectedTheme) {
    document.body.classList[SelectedTheme === "light" ? "add" : "remove"](
    DarkTheme
    );
    DarkBtn.classList[SelectedIcon === "fa-sun" ? "add" : "remove"](DarkIcon);
    }
    DarkBtn.addEventListener("click", () => {
    document.body.classList.toggle(DarkTheme);
    DarkBtn.classList.toggle(DarkIcon);

    localStorage.setItem("selected-theme", GetTheme());
    localStorage.setItem("selected-icon", GetIcon());
    });

    // dark mood in pc auto matchResult
    function checkColorScheme() {
    let matchResult = window.matchMedia("(prefers-color-scheme : dark)");

    // if mood is equal dark remove the styleing === dark
    if (matchResult.matches == true) {
    document.body.classList.remove("dark-theme");
    // if mood is equal light ade the styleing === light
    } else {
    document.body.classList.add("dark-theme");
    }
    }
    checkColorScheme();
