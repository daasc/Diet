import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import CalendarView from "../../../views/CalendarView.vue";
import BoxAlert from "../../../components/BoxAlert.vue";
import { nextTick } from "vue"; // im using a helper plugin since my project with Vue 2 + script setup

const makeSut = async () => {
  const sut = mount(CalendarView);
  await nextTick();
  return sut;
};

describe("CalendarView", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders properly", async () => {
    const sut = await makeSut();
    expect(sut.exists).toBeTruthy();
  });

  it("should find the BoxAlert component", async () => {
    const sut = await makeSut();
    const boxAlert = sut.findComponent(BoxAlert);
    expect(boxAlert.exists).toBeTruthy();
  });
});
