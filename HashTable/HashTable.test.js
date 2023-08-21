import HashTable from "./HashTable";

describe("HashTable", () => {
  let table;
  beforeEach(() => {
    table = new HashTable(); //Create a HashTable
    table.insert("This", 1);
    table.insert("is", 2);
    table.insert("a", 3);
    table.insert("Test", 4);
    table.insert("Driver", 5);
  });

  test("table size", () => {
    const size = table.getSize();
    expect(size).toBe(5);
  });

  test("delete", () => {
    table.deleteVal("is");
    table.deleteVal("a");

    expect(table.getSize()).toBe(3);
  });

  test("delete", () => {
    table.deleteVal("is");
    table.deleteVal("a");

    expect(table.getSize()).toBe(3);
  });

  test("search", () => {
    const val = table.search("is");

    expect(val).toBe(2);
  });
});
