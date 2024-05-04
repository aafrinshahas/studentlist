function Favstudentlist(props){
   const fList = props.fList;
   const setfList = props.setfList;
   function handleRemove(selectedindex){
        console.log(selectedindex)
       var temp = fList.filter((item, index)=>{
        if(index == selectedindex){
          return false
        }
       else{
        return true
       }
       })
  
       console.log(temp)
       setfList(temp)
   }
    return(
        <div className="p-5">
        <h1 className="text-xl">Favourite List</h1>
        <ul className="border mt-4 p-2" style={{width: '35%'}}>
        {
          fList.map((item, index)=>{
             return(
              <li key={index} className="py-3 flex justify-between">{index+1}. {item} 
               <button className="bg-red-500 text-white px-2 py-1 rounded-md w-40 text-center" 
               onClick={()=>handleRemove(index)}>Remove</button></li>
             )
          })
        }
        </ul>
        
  </div>
        
    )
}

export default Favstudentlist;