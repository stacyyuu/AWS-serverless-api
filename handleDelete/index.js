import DynamoDB from "@aws-sdk/client-dynamodb";
import DynamoDBLib from "@aws-sdk/lib-dynamodb";
const { DynamoDBClient } = DynamoDB;

const ddbClient = new DynamoDBClient({ region: "us-west-2" });

export const handler = async (event) => {
  const { book_id } = event.pathParameters;
  // TODO implement
  const command = new DynamoDBLib.DeleteCommand({
    TableName: "books",
    Key: {
      book_id,
    },
  });

  await ddbClient.send(command);

  const response = {
    statusCode: 200,
    body: `Book: ${book_id} has been deleted.`,
  };

  return response;
};
