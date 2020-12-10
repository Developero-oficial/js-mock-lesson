import { getRandomNumberFact } from "./";
import { getRandomNumberFactService } from "./service";
import { fakeResponse } from "./__fixture__";

jest.mock("./service");

beforeEach(() => {
  getRandomNumberFactService.mockClear();
});

test("getRandomNumberFact", async () => {
  getRandomNumberFactService.mockReturnValueOnce(fakeResponse);

  const result = await getRandomNumberFact();
  expect(getRandomNumberFactService).toHaveBeenCalledTimes(1);
  expect(result.text).toBe(fakeResponse.text);
});

test("getRandomNumberFact error", async () => {
  getRandomNumberFactService.mockReturnValueOnce(new Error("ups"));

  const result = await getRandomNumberFact();
  expect(getRandomNumberFactService).toHaveBeenCalledTimes(1);
  expect(result).toBeInstanceOf(Error);
});
