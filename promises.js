// Promises and Async/Await

// Task 1: Create a promise that resolves with with a message after a 2 second timeout and log the message to the console.
/*
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("The promise has resolved");
  }, 2000);
});

promise.then((message) => {
  console.log(message);
});
*/
// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using '.catch()'.
/*
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("this promise is rejected");
  }, 2000);
});

promise1.then((message) => {
  console.log(message);
});
*/
// Chaining Promises

// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
/*
const fetchPosts = (message, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, delay);
  });
};

fetchPosts("fetching data from server 1", 3000)
  .then(() => fetchPosts("fetching data from server 2", 4000))
  .then(() => fetchPosts("fetching data from server 3", 5000));
*/
// Using Async/Await

// Task 4: write an async function that waits for a promise to resolve and then logs the resolved value.
// Task 5: write an async function that handles a rejected promise using try-catch and logs the error message.

const fetchPost = (message, fail) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve(message);
      reject(fail);
    }, 3000);
  });
};

const fetchData = async () => {
  try {
    console.time("timer");
    const res = await fetchPost(
      "Hello Aftab, I have fetched the data",
      "Hello Aftab, Promise has been rejected"
    );
    console.timeEnd("timer");
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// const result = fetchData();
// console.log(result);
// setTimeout(() => {
//   console.log(result);
// }, 4000);

// Fetching Data from an API

// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
/*
fetch("https://jsonplaceholde.typicode.com/users")
  .then((res) => {
    if (res.status === 200) {
      return res.json();
    } else {
      throw new Error("please provide valid url");
    }
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
*/
// Task 7: Use the 'fetch' API to get data from a public API and log the response data to the console using async/await.

async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

//  getUsers();

// 5. Concurrent Promises

// Task 8: Use 'Promise.all' to wait for multiple promises to resolve and then log all their values.
// Task 8: Use 'Promise.race' to wait for multiple promises to resolve and then log all their values.
const fetchData1 = (message) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, 1000);
  });
};
const fetchData2 = (message) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, 2000);
  });
};
const fetchData3 = (message) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, 3000);
  });
};
const fetchData4 = (message) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve(message);
      reject("this promise has rejected");
    }, 1000);
  });
};

Promise.allSettled([
  fetchData1("this promise1 has resolved"),
  fetchData2("this promise2 has resolved"),
  fetchData3("this promise3 has resolved"),
  fetchData4("this promise4 has resolved"),
  s,
]).then((res) => {
  console.log(res);
});
// console.log(promise);
