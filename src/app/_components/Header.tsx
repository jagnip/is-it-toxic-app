import FadeScaleInDownContainer from "../_animations/FadeScaleInDownContainer";

export default function Header() {
  return (
    <FadeScaleInDownContainer>
      <h1 className="flex flex-col md:flex-row items-center justify-center">
        <span className="mb-[-24px] md:mb-0 mr-1">🪴</span>{" "}
        <span>Is it toxic to?</span>
      </h1>
    </FadeScaleInDownContainer>
  );
}
