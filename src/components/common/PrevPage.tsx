import { FC } from "react";
import { useNavigate } from "react-router-dom";

const PrevPage: FC = () => {
  const navigate = useNavigate();

  const goBack = (): void => navigate(-1);

  return <button onClick={goBack}>Go back</button>;
};

export default PrevPage;
