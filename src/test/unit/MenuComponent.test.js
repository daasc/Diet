import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import MenuComponent from "../../components/MenuComponent.vue";
import { nextTick } from "vue";
import { useRouter } from "vue-router"; // im using a helper plugin since my project with Vue 2 + script setup
vi.mock("vue-router", () => ({
  useRouter: vi.fn(() => ({
    push: () => {},
    path: "",
  })),
}));
const makeSut = async () => {
  const push = vi.fn(); // needs to write this code before render()
  useRouter.mockImplementation(() => ({
    push,
  }));
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
