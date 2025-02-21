```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic here. Using the return value of setTimeout to clear the timer
    const timeoutId = setTimeout(() => {
      setCount(count + 1);
    }, 1000);

    //Return a cleanup function
    return () => clearTimeout(timeoutId);
  }, [count]);

  return <div>Count: {count}</div>;
}
```