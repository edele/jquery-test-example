import { accordionClickHandler } from "./accordion";

const classNameWhenHidden = "accordion--hidden";

test("adds hidden class name when clicked on open accordion", () => {
  // prepare
  const fakeDomNode = { className: "accordion" };

  // act
  accordionClickHandler({ currentTarget: fakeDomNode });

  // check
  expect(fakeDomNode.className).toEqual(
    expect.stringContaining(classNameWhenHidden)
  );
});

test("removes hidden class name when clicked on closed accordion", () => {
  // prepare
  const fakeDomNode = {
    className: ["accordion", classNameWhenHidden].join(" ")
  };

  // act
  accordionClickHandler({ currentTarget: fakeDomNode });

  // check
  expect(fakeDomNode.className).not.toEqual(
    expect.stringContaining(classNameWhenHidden)
  );
});
