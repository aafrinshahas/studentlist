import { useState } from "react";

function Studentlist(props){
const sList = props.sList;
const setsList = props.setsList;
const fList = props.fList;
const setfList = props.setfList
const [buttonDisable, setbuttonDisable] = useState(false) 

function handleAdd(selectedId){
console.log(selectedId)
const temp = sList.filter((item)=>{
return item.id == selectedId
})

console.log(temp)
const selectedItem = temp.map((item)=>{
return item.name
})


console.log(selectedItem)
setfList([...fList, selectedItem])
setbuttonDisable(true)
}

// function disableCount(event){
//   event.preventDefault();
//   setbuttonDisable(true)
// }

return(

<div className="p-5">
<h1 className="text-xl">Student List</h1>
<ul className="border mt-4 p-2" style={{width: '35%'}}>
{
sList.map((item, index)=>{
    return(
    <li key={index} className="py-3 flex justify-between">{index+1}. {item.name} 
  <button 
  className="bg-black text-white px-2 py-1 rounded-md"
      onClick={buttonDisable ? ()=>{} : ()=>handleAdd(item.id)}>Add to Favourite</button>
    </li>
    )
})
}
</ul>

</div>

)
}

export default Studentlist;