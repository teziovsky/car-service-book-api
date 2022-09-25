import { useAuth } from "context/authContext";

const Index = () => {
  const { user } = useAuth();
  return (
    <>
      <div className="flex flex-col items-center gap-5"></div>
      <p>{JSON.stringify(user)}</p>
    </>
  );
};

export default Index;
