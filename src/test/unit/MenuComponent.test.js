import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import MenuComponent from "../../components/MenuComponent.vue";

const makeSut = () => {
  const sut = mount(MenuComponent);

  return sut;
};

describe("MenuComponent", () => {
  it("renders properly", () => {
    const sut = makeSut();
    expect(sut.exists).toBeTruthy();
  });
});
