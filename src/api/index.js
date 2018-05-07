import request from "superagent";

export const fetchDataApi = async () => {
  const { body } = await request.get(
    "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
  );
  return body;
};
