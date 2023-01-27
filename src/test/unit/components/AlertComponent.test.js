import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import AlertComponent from "../../../components/AlertComponent.vue";

const makeSut = async ({ type = "danger", msg = "alert test" } = {}) => {
  const sut = mount(AlertComponent, {
    props: {
      msg,
      type,
    },
  });
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

  it.only("should render a component of type danger ", async () => {
    const sut = await makeSut();

    const dangerClass = sut.find('[data-testid="type"]');
    const imgUrl = sut.find('[data-testid="img"]').attributes("src");

    expect(dangerClass.classes()).toContain("danger");
    expect(imgUrl).toContain("/assets/images/danger.svg");
  });

  it("should render a component of type success ", async () => {
    const sut = await makeSut({ type: "success" });

    const dangerClass = sut.find('[data-testid="type"]');
    const imgUrl = sut.find('[data-testid="img"]').attributes("src");

    expect(dangerClass.classes()).toContain("success");
    expect(imgUrl).toContain("/assets/images/success.svg");
  });

  it("should render a component of type warning ", async () => {
    const sut = await makeSut({ type: "warning" });

    const dangerClass = sut.find('[data-testid="type"]');
    const imgUrl = sut.find('[data-testid="img"]').attributes("src");

    expect(dangerClass.classes()).toContain("warning");
    expect(imgUrl).toContain("/assets/images/warning.svg");
  });

  it("should render a component of type info", async () => {
    const sut = await makeSut({ type: "info" });

    const dangerClass = sut.find('[data-testid="type"]');
    const imgUrl = sut.find('[data-testid="img"]').attributes("src");

    expect(dangerClass.classes()).toContain("info");
    expect(imgUrl).toContain("/assets/images/info.svg");
  });
});
