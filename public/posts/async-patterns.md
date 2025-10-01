# Async Patterns in JavaScript

Personal notes on handling async operations in JavaScript.

## The Basics

### Callbacks (Old School)

```js
getData(function(result) {
  processData(result, function(processed) {
    saveData(processed, function() {
      console.log('Done!');
    });
  });
});
// Callback hell 😱
```

### Promises

```js
getData()
  .then(processData)
  .then(saveData)
  .then(() => console.log('Done!'))
  .catch(handleError);
```

### Async/Await (Modern)

```js
async function handleData() {
  try {
    const result = await getData();
    const processed = await processData(result);
    await saveData(processed);
    console.log('Done!');
  } catch (error) {
    handleError(error);
  }
}
```

## Parallel Execution

### Promise.all

Wait for all promises:

```js
const [users, posts, comments] = await Promise.all([
  fetchUsers(),
  fetchPosts(),
  fetchComments()
]);
```

### Promise.allSettled

Get all results, even if some fail:

```js
const results = await Promise.allSettled([
  promise1,
  promise2,
  promise3
]);

results.forEach(result => {
  if (result.status === 'fulfilled') {
    console.log(result.value);
  } else {
    console.error(result.reason);
  }
});
```

### Promise.race

First one to complete wins:

```js
const result = await Promise.race([
  fetchFromAPI(),
  timeout(5000)
]);
```

## Error Handling

### Try-Catch

```js
async function fetchData() {
  try {
    const data = await fetch('/api/data');
    return await data.json();
  } catch (error) {
    console.error('Failed to fetch:', error);
    return null;
  }
}
```

### Custom Error Classes

```js
class APIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

async function callAPI() {
  const response = await fetch('/api');
  if (!response.ok) {
    throw new APIError('API failed', response.status);
  }
  return response.json();
}
```

## Advanced Patterns

### Retry Logic

```js
async function retry(fn, maxAttempts = 3) {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === maxAttempts - 1) throw error;
      await delay(1000 * (i + 1));
    }
  }
}
```

### Debounce with Async

```js
function debounceAsync(fn, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    return new Promise((resolve) => {
      timeoutId = setTimeout(() => resolve(fn(...args)), delay);
    });
  };
}
```

## Key Takeaways

- Always handle errors with try-catch
- Use Promise.all for parallel operations
- Avoid awaiting in loops (use Promise.all instead)
- Consider race conditions
- Implement proper timeout handling
