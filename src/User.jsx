function User() {
  
const useList=[
    {id:1,name:"Jonah"},
    {id:2,name:"Judu"},
    {id:3,name:"Janett"},
    {id:4,name:"Jisho"},
    {id:5,name:"Jingle"},
    {id:6,name:"Jophin"},
    {id:7,name:"Jincy"},
]
  return (
   <div style={{textAlign:'center'}}>

    <h2>User Data Page</h2>
    {

    useList.map((item)=>(
        <div>
            <h3>
                <link>{Item.name}</link>
                
            </h3>
        </div>
    ))
    
    </div>
  )
}

export default User
