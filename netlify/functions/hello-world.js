exports.handler = async () => {
    const mySecret = process.env.MY_SECRET;
    return {
      statusCode: 201,
      body: `hello world! I have a ${mySecret}`,
    };
  };