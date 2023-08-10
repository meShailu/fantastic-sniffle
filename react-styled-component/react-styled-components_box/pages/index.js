import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import { BoxWithStyledComponents } from "../components/BoxWithClassName/BoxWithStyledComponents.js";
export default function HomePage({ isBlack }) {
  return (
    <>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents isBlack={true} />
    </>
  );
}
