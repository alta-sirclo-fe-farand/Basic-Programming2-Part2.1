const primaSegiEmpat = require("./problem3");

test("Test 1", () => {
  expect(primaSegiEmpat(2, 3, 13)).toEqual(`17 19\n23 29\n31 37\n156`);
});
test("Test 2", () => {
  expect(primaSegiEmpat(5, 2, 1)).toEqual(`2 3 5 7 11\n13 17 19 23 29\n129`);
});
test("Test 3", () => {
  expect(primaSegiEmpat(9, 3, 17)).toEqual(
    `19 23 29 31 37 41 43 47 53\n59 61 67 71 73 79 83 89 97\n101 103 107 109 113 121 127 131 137\n2051`
  );
});
test("Test 4", () => {
  expect(primaSegiEmpat(3, 7, 22)).toEqual(
    `23 29 31\n37 41 43\n47 53 59\n61 67 71\n73 79 83\n89 97 101\n103 107 109\n1403`
  );
});
test("Test 5", () => {
  expect(primaSegiEmpat(5, 10, 5)).toEqual(
    `7 11 13 17 19\n23 29 31 37 41\n43 47 53 59 61\n67 71 73 79 83\n89 97 101 103 107\n109 113 121 127 131\n137 139 143 149 151\n157 163 167 169 173\n179 181 187 191 193\n197 199 209 211 221\n5478`
  );
});
