import { getRandomNumberFact } from "./";
import { getRandomNumberFactService } from "./service";

jest.mock("./service");

beforeEach(() => {
  getRandomNumberFactService.mockClear();
});

test("getRandomNumberFact", async () => {
  getRandomNumberFactService.mockReturnValueOnce({
    text:
      "652 is the year that Khazaria becomes an independent state (approximate date).",
  });

  const result = await getRandomNumberFact();
  expect(getRandomNumberFactService).toHaveBeenCalledTimes(1);
  expect(result.text).toBe(
    "652 is the year that Khazaria becomes an independent state (approximate date)."
  );
});

test("getRandomNumberFact error", async () => {
  getRandomNumberFactService.mockReturnValueOnce(new Error("ups"));

  const result = await getRandomNumberFact();
  expect(getRandomNumberFactService).toHaveBeenCalledTimes(1);
  expect(result).toBeInstanceOf(Error);
});
