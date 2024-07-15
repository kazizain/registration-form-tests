
import { useLocation } from 'react-router-dom';

const Welcome = () => {
  const location = useLocation();
  const { fullName } = location.state || { fullName: 'Guest' };

  return (
    <div>
      <h2>Welcome, {fullName}</h2>
      {/* Add your welcome message or content here */}
    </div>
  );
};

export default Welcome;
