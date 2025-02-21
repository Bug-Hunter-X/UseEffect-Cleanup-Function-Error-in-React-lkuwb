```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic here.  The return value of setTimeout is not a cleanup function.
    const timeoutId = setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, [count]);

  return <div>Count: {count}</div>;
}
```