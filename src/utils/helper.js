export function filterdata(searchText,restaurants){

    const filterData=restaurants.filter((resta)=> resta.data.name.toLowerCase().includes(searchText.toLowerCase()));
    console.log(filterData.length);
    return filterData;
    
  }