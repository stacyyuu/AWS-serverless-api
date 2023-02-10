import DynamoDB from "@aws-sdk/client-dynamodb";
import DynamoDBLib from "@aws-sdk/lib-dynamodb";
const { DynamoDBClient } = DynamoDB;

const ddbClient = new DynamoDBClient({ region: "us-west-2" });

export const handler = async (event) => {
  const book = JSON.parse(event.body);
  book.book_id = String(Math.ceil(Math.random() * 10000000000));

  const command = new DynamoDBLib.PutCommand({
    TableName: "books",
    Item: book,
  });

  await ddbClient.send(command);

  // TODO implement
  const response = {
    statusCode: 200,
    body: book,
  };
  return response;
};
