import { useNavigate } from "react-router-dom";


const ErrorPage = () => {
    const navigate = useNavigate(); 
    return (
        <div>
            <div className="text-white mx-auto bg-gradient-to-b from-purple-600 to-purple-700 py-8 text-center min-h-screen flex items-center flex-col justify-center">
                <h2 className="text-3xl font-bold">Page not Found</h2>
                <button onClick={()=>navigate(-1)} className="btn text-purple-600 mt-4">Go Back</button>
            </div>
            
        </div>
    );
};

export default ErrorPage;