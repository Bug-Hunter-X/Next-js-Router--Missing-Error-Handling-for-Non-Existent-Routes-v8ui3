```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/non-existent-route').catch(error => {
      // Handle the error appropriately
      console.error('Error navigating to route:', error);
      // Optionally, display an error message to the user
      alert('Route not found!');
    }); 
  };

  return (
    <button onClick={handleClick}>Go to Non-Existent Route</button>
  );
}
```