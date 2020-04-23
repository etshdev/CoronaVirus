let searchInp=document.getElementById("searhInp");
let myData=[];
let totalData={};
let http=new XMLHttpRequest;
http.open("get","https://api.covid19api.com/summary");
http.send();
http.addEventListener("readystatechange",function(){
    if(http.status==200&&http.readyState==4)
    {
        myData=JSON.parse(http.response).Countries;
        totalData=JSON.parse(http.response).Global;
        TotalData();
        displaydata();
        
    }
});
function TotalData()
{
    let content=`<div class="col-12  bg-danger text-center total rounded-lg">
    <div class="x text-center pt-4 pb-4  "> 
           
      <h3 class=" text-danger "> إجمالى الإحصائيات العالمية </h3>
      
       <div class="container">
       <div class="row">
           <div class="col-md-4 col-12 mt-2">
             <h4  class="mt-2 text-black">حالات الشفاء الجديدة  </h4>
             <button class="btn btn-success rounded-lg mb-2 px-3 py-3">`+totalData.NewRecovered+`</button>
           </div>
           <div class="col-md-4 col-12 mt-2 ">
             <h4  class="mt-2 text-black ">الوفيات الجديدة  </h4>
             <button class="btn btn-dark  rounded-lg mb-3 px-3 py-3">`+totalData.NewDeaths+`</button>
           </div>
           <div class="col-md-4 col-12 mt-2">
             <h4  class="mt-2 text-black"> الحالات الجديدة</h4>
             <button class="btn btn-danger rounded-lg mb-3 px-3 py-3">`+totalData.NewConfirmed+`</button>
           </div>
           <div class="col-md-4 col-12 mt-2">
             <h4  class="mt-2 text-black">إجمالي حالات الشفاء  </h4>
             <button class="btn btn-success rounded-lg mb-3 px-3 py-3">`+totalData.TotalRecovered+`</button>
           </div>
           <div class="col-md-4 col-12 mt-2">
             <h4  class="mt-2 text-black">إجمالي الوفيات  </h4>
             <button class="btn btn-dark rounded-lg mb-3 px-3 py-3">`+totalData.TotalDeaths+`</button>
           </div>
           <div class="col-md-4 col-12 mt-2">
             <h4  class="mt-2 text-black">إجمالي الحالات  </h4>
             <button class="btn btn-danger rounded-lg mb-3 px-3 py-3">`+totalData.TotalConfirmed+`</button>
           </div>

          

       </div>
   </div>

   </div>

    

   
  </div>`;
  


    document.getElementById("totalResult").innerHTML=content;
    
};
function displaydata()
{
    let content=``;
    for (let i=0; i<myData.length;i++)
    {
        content+=` <div class="col-md-6 col-lg-4  rounded-lg text-center mt-3 mb-3   " >
        <div class="x text-center pt-4 pb-2  "> 
       
       <h3 class=" text-danger ">`+myData[i].Country+`</h3>
        <h4 class="text-muted">`+myData[i].CountryCode+`</h4>
        <div class="container">
        <div class="row">
            <div class="col-5 mt-2">
              <h4  class="mt-2 text-black">حالات الشفاء الجديدة  </h4>
              <button class="btn btn-success rounded-lg mb-2 px-3 py-3">`+myData[i].NewRecovered+`</button>
            </div>
            <div class="col-3 mt-2 ">
              <h4  class="mt-2 text-black ">الوفيات الجديدة  </h4>
              <button class="btn btn-dark  rounded-lg mb-3 px-3 py-3">`+myData[i].NewDeaths+`</button>
            </div>
            <div class="col-4 mt-2">
              <h4  class="mt-2 text-black"> الحالات الجديدة</h4>
              <button class="btn btn-danger rounded-lg mb-3 px-3 py-3">`+myData[i].NewConfirmed+`</button>
            </div>
            <div class="col-5 mt-2">
              <h4  class="mt-2 text-black">إجمالي حالات الشفاء  </h4>
              <button class="btn btn-success rounded-lg mb-3 px-3 py-3">`+myData[i].TotalRecovered+`</button>
            </div>
            <div class="col-3 mt-2">
              <h4  class="mt-2 text-black">إجمالي الوفيات  </h4>
              <button class="btn btn-dark rounded-lg mb-3 px-3 py-3">`+myData[i].TotalDeaths+`</button>
            </div>
            <div class="col-4 mt-2">
              <h4  class="mt-2 text-black">إجمالي الحالات  </h4>
              <button class="btn btn-danger rounded-lg mb-3 px-3 py-3">`+myData[i].TotalConfirmed+`</button>
            </div>
            <button class=" btn btn-light  py-3 px-3  w-100 m-auto">UPDATE TIME :  `+myData[i].Date+`</button>
            

           

        </div>
    </div>

    </div>
    </div>`
    }

document.getElementById("rowResult").innerHTML=content;
};

function search(term)
{
let content=``;
let newtxt=``;
for(let i=0;i<myData.length;i++)

{
    if(myData[i].Country.toUpperCase().includes(term.toUpperCase())==true)
    {
        newtxt=myData[i].Country.toUpperCase().replace(term.toUpperCase(),'<span style="color:orange">'+term.toUpperCase()+'</span>')
        content+=` <div class="col-md-6 col-lg-4  rounded-lg text-center mt-3 mb-3   " >
        <div class="x text-center pt-4 pb-2  "> 
       
       <h3 class=" text-danger ">`+newtxt+`</h3>
        <h4 class="text-muted">`+myData[i].CountryCode+`</h4>
        <div class="container">
        <div class="row">
            <div class="col-5 mt-2">
              <h4  class="mt-2 text-black">حالات الشفاء الجديدة  </h4>
              <button class="btn btn-success rounded-lg mb-2 px-3 py-3">`+myData[i].NewRecovered+`</button>
            </div>
            <div class="col-3 mt-2 ">
              <h4  class="mt-2 text-black ">الوفيات الجديدة  </h4>
              <button class="btn btn-dark  rounded-lg mb-3 px-3 py-3">`+myData[i].NewDeaths+`</button>
            </div>
            <div class="col-4 mt-2">
              <h4  class="mt-2 text-black"> الحالات الجديدة</h4>
              <button class="btn btn-danger rounded-lg mb-3 px-3 py-3">`+myData[i].NewConfirmed+`</button>
            </div>
            <div class="col-5 mt-2">
              <h4  class="mt-2 text-black">إجمالي حالات الشفاء  </h4>
              <button class="btn btn-success rounded-lg mb-3 px-3 py-3">`+myData[i].TotalRecovered+`</button>
            </div>
            <div class="col-3 mt-2">
              <h4  class="mt-2 text-black">إجمالي الوفيات  </h4>
              <button class="btn btn-dark rounded-lg mb-3 px-3 py-3">`+myData[i].TotalDeaths+`</button>
            </div>
            <div class="col-4 mt-2">
              <h4  class="mt-2 text-black">إجمالي الحالات  </h4>
              <button class="btn btn-danger rounded-lg mb-3 px-3 py-3">`+myData[i].TotalConfirmed+`</button>
            </div>
            <button class=" btn btn-light  py-3 px-3  w-100 m-auto">UPDATE TIME :  `+myData[i].Date+`</button>
            

           

        </div>
    </div>

    </div>
    </div>`
    }
    document.getElementById("rowResult").innerHTML=content;
}
};
searchInp.addEventListener("keyup",function(){

    search(searchInp.value);
});
