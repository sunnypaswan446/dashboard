import { useNavigate, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const handleChange = () => {
    navigate("/");
  };
  const { id } = useParams();
  return (
    <div>
      <h2>Server Details: {id}</h2>
      <button onClick={handleChange}>Back to Home</button>
      <Outlet />
    </div>
  );
};

export default Index;
