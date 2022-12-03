import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import BoxAlert from "../../components/BoxAlert.vue";
import { nextTick } from "vue"; // im using a helper plugin since my project with Vue 2 + script setup

const makeSut = async () => {
  const sut = mount(BoxAlert, {
    props: {
      color: "black",
      text: "breakfast",
      hour: "9:00",
      description: "in my breakfast i'll eat bread and banana",
      recipe: "diet recipe",
    },
  });
  await nextTick();
  return sut;
};

describe("BoxAlert", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders properly", async () => {
    const sut = await makeSut();
    expect(sut.exists).toBeTruthy();
  });
});
