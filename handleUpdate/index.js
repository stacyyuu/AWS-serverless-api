import DynamoDB from "@aws-sdk/client-dynamodb";
import DynamoDBLib from "@aws-sdk/lib-dynamodb";
const { DynamoDBClient } = DynamoDB;

const ddbClient = new DynamoDBClient({ region: "us-west-2" });
const ddbDocClient = new DynamoDBLib.DynamoDBDocumentClient(ddbClient, {
  marshallOptions: {
    removeUndefinedValues: true,
  },
});

export const handler = async (event) => {
  const { book_id } = event.pathParameters;

  // TODO implement
  const updateBook = new DynamoDBLib.UpdateCommand({
    TableName: "books",
    Key: {
      book_id,
    },
    UpdateExpression: "set #f = :title, #u = :author, #c = :genre",
    ExpressionAttributeNames: {
      "#f": "title",
      "#u": "author",
      "#c": "genre",
    },
    ExpressionAttributeValues: {
      ":title": JSON.parse(event.body).title,
      ":author": JSON.parse(event.body).author,
      ":genre": JSON.parse(event.body).genre,
    },
  });

  await ddbDocClient.send(updateBook);

  const response = {
    statusCode: 200,
    body: JSON.parse(event.body),
  };

  return response;
};
