"use client";

interface ViewUserProps {
  userId: number;
}

const ViewUserButton: React.FC<ViewUserProps> = ({ userId }) => {
  const handleClick = () => alert(`user id: ${userId}`);

  return (
    <div>
      <button onClick={handleClick}>lihat user</button>
      <div>situ lah usernya</div>
    </div>
  );
};

export default ViewUserButton;
