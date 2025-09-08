// import {Link} from 'react-router';

//  function PageNotFound(){
//     return (
//         <div style={{textAlign:'center'}}>
//             <h1>Page not Found</h1>
            
//         </div>
//     );
    
// }
// export default PageNotFound;





import { Link,useNavigate} from 'react-router';
function PageNotFound() {

    function PageNotFound(){
        const navigate=useNavigate();

        function handle(){
            navigate("/login");
        }
    


    return (
        <div style={{ textAlign: 'center' }}>

            <div> <Link to="/">Go Back to Home</Link></div>

            <h2>Page Not Found!!</h2>
            <img style={{width:"60%"}} src="https://static.vecteezy.com/system/resources/previews/008/255/804/non_2x/page-not-found-error-404-system-updates-uploading-computing-operation-installation-programs-system-maintenance-graffiti-sprayed-page-not-found-error-404-isolated-on-white-background-vector.jpg" alt="404Error" />

            <br/>
            <button onClick={handle}>Go Back</button>

        </div>
    );
}
}

export default PageNotFound
