import { expect, describe, it } from "vitest";

import * as CircleFun from "../src/CircleMotion.js";

// describe("CircleFun.findPointY", () => {
//   const radius = 10;

//   // Test case for leftmost point
//   it("should return 0 at x = -radius (leftmost point)", () => {
//     const result = CircleFun.findPointY(-10, 10);
//     expect(result).toBe(0);
//   });

//   // Test case for point between left and top
//   it("should return ~4.359 at x = -9", () => {
//     const result = CircleFun.findPointY(-9, 10);
//     expect(result).toBeCloseTo(4.35888, 4);
//   });

//   // Test case for random point on circle
//   it("should return ~4.359 at x = -9", () => {
//     const result = CircleFun.findPointY(-7, 10);
//     expect(result).toBeCloseTo(7.141428428, 4);
//   });

//   // Test case for random point on circle
//   it("should return ~4.359 at x = -9", () => {
//     const result = CircleFun.findPointY(2, 10);
//     expect(result).toBeCloseTo(9.79795897, 4);
//   });

//   // Test case for topmost point
//   it("should return radius (10) at x = 0 (top point)", () => {
//     const result = CircleFun.findPointY(0, 10);
//     expect(result).toBeCloseTo(10, 5);
//   });

//   // Test case for rightmost point
//   it("should return 0 at x = radius (rightmost point)", () => {
//     const result = CircleFun.findPointY(10, 10);
//     expect(result).toBeCloseTo(0, 5);
//   });

//   it("should return 0 at x = -radius", () => {
//     const x = -10;
//     const result = CircleFun.findPointY(x, radius);
//     console.log(`Testing x=${x}, radius=${radius}`);
//     console.log(`Expected: 0`);
//     console.log(`Received: ${result}`);
//     expect(result).toBeCloseTo(0);
//   });
// });

describe("CircleFun.findPointX", () => {
  it("should return -9 for x, speed 1", () => {
    // Variables
    let speed = 1;
    const radius = 10;
    const x = -10;

    const result = CircleFun.findPointX(x, radius);

    console.log(`Testing x=${x}, radius=${radius}, speed=${speed}`);
    console.log(`Expected: -9`);
    console.log(`Received: ${result}`);

    expect(result).toBeCloseTo(-9, 2);
  });

  it("should return 10 for x, speed -1", () => {
    // Variables
    CircleFun.speed = -1;
    const radius = 10;
    const x = 10;

    console.log(`Testing x=${x}, radius=${radius}, speed=${CircleFun.speed}`);
    const result = CircleFun.findPointX(x, radius);

    console.log(`Testing x=${x}, radius=${radius}, speed=${CircleFun.speed}`);
    console.log(`Expected: 9`);
    console.log(`Received: ${result}`);

    expect(result).toBeCloseTo(9, 2);
  });

  // Test multiple movements of the speed change
  it("should correctly handle multiple position updates", () => {
    CircleFun.speed = 1; // Reset speed
    const radius = 10;
    let x = 0;

    console.log("Test: Multiple movements");
    console.log("Starting sequence of movements...");

    // Test several movements and log each step
    for (let i = 0; i < radius + 2; i++) {
      const prevSpeed = CircleFun.speed;
      x = CircleFun.findPointX(x, radius);
      console.log(`Step ${i + 1}:`);
      console.log(`Position: ${x}`);
      console.log(`Speed: ${CircleFun.speed} \n`);

      // If we hit a boundary, speed should have reversed
      if (Math.abs(x) >= radius) {
        expect(CircleFun.speed).toBe(-prevSpeed);
      } else {
        expect(CircleFun.speed).toBe(prevSpeed);
      }
    }
  });
});
