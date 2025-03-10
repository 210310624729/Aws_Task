exports.handler = async (event) => {
    const { path, httpMethod } = event;
    if (path === "/hello" && httpMethod === "GET") {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello, World!" }),
      };
    }
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: `Bad Request: {path} {method} is not allowed`,
      }),
    };
  };
  