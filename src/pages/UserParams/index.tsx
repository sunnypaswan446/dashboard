import { useNavigate, useParams } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const handleChange = () => {
    navigate("/");
  };
  const { id } = useParams();
  return (
    <div>
      index:{id}
      <button onClick={handleChange}>click to navigate</button>
    </div>
  );
};

export default Index;
