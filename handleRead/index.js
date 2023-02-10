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
  const { Item } = await ddbDocClient.send(
    new DynamoDBLib.GetCommand({
      TableName: "books",
      Key: {
        book_id,
      },
    })
  );

  const response = {
    statusCode: 200,
    body: Item,
  };

  return response;
};
