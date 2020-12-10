import fetch from "node-fetch";

import { getRandomNumberFactService } from "./service";
import { fakeResponse } from "./__fixture__";

jest.mock("node-fetch");

beforeEach(() => {
  fetch.mockClear();
});

test("getRandomNumberFactService", async () => {
  fetch.mockReturnValueOnce({
    json: () => Promise.resolve(fakeResponse),
  });
  const result = await getRandomNumberFactService();

  expect(result).toEqual(fakeResponse);
});
