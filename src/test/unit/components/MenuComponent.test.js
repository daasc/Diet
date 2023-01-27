import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import MenuComponent from "../../../components/MenuComponent.vue";
import { nextTick } from "vue";

const makeSut = async () => {
  const sut = mount(MenuComponent);
  await nextTick();
  return sut;
};

describe("MenuComponent", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders properly", async () => {
    const sut = await makeSut();
    expect(sut.exists).toBeTruthy();
  });
});
