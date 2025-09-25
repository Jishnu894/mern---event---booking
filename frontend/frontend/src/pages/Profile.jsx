import { useAuth } from "../context/useAuth";


const Profile = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2>Profile</h2>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Please login first</p>
      )}
    </div>
  );
};

export default Profile;
