import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import HeroBanner from "../components/HeroBanner";
import HeroBannerImage from "../assets/images/banner.png";

test("Banner renders with alt text", async () => {
  const screen = render(<HeroBanner />);
  const img = screen.getByRole("img") as HTMLImageElement;
  expect(img.src).toContain(HeroBannerImage);
  expect(img.alt).toBe("Banner");
});
