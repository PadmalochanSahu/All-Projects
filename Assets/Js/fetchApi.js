function getDataPost() {
    let url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let tableHead = `<tr>
          <th>Srl no.</th>
          <th>Title</th>
          <th>Body</th>
           </tr>`;
        document.getElementById("tableHead").innerHTML = tableHead;
        let tableData = "";
        data.map((element) => {
          tableData += ` <tr>
              <td>${element.id}</td>
              <td>${element.title}</td>
              <td>${element.body}</td>
          </tr>`;
              document.getElementById("first").innerHTML = tableData;
          
        });
      });
  }
  getDataPost();
      
      function pagination(){
        let record = document.getElementById('first');
        let fullCollection = record.getElementsByTagName('tr');
        console.log(fullCollection)
        let records = Array.from(fullCollection); 
        let records_per_page = 10;
        let page = 2;
        console.log('r',records);
        let total_records = records.length;
        console.log('l',total_records);
        let total_page =  total_records/records_per_page;
        console.log('al',total_page);
        
        function DisplayRecords(){
            let start_index = (page -1) * records_per_page;
            console.log('start',start_index);
            let end_index = start_index + (records_per_page)
            console.log('end',end_index);
            let displayScreen = "";
            for(let i = start_index + 1; i < end_index + 1; i++){
              // console.log('num',i);
              // console.log(records);
             
                // displayScreen += `<tr>${records[i].innerHTML}</tr>`;
                // console.log('records',records[i]);
                
            }
           record.innerHTML = displayScreen;
        }
        genrateBtn();
        DisplayRecords();
        function genrateBtn() {
          let prevBtn = `<li id="pre" class="pageSelect">Previous</li>`;
          let nextBtn = `<li id="nex" class="pageSelect">Next</li>`
          let button = '';
          for(let i= 1; i <= total_page;i++){
            button +=  `<li id="one" class="pageSelect">${i}</li>`;
            console.log(i);
          }
          let pagina = document.getElementById('pages').innerHTML = `${prevBtn} ${button} ${nextBtn}`;
          console.log('pages', pagina)
          
        }
      }
    
    
    pagination();
  let btn = document.getElementById("btn");
  btn.addEventListener("click", function click() {
    let inputValue = document.getElementById("input").value.toLowerCase();
    console.log("In", inputValue);
    let tr = document.getElementsByTagName("tr");
    for (let i = 1; i < tr.length; i++) {
      let td = tr[i].getElementsByTagName("td")[1].textContent;
      if (td == inputValue) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  });
  