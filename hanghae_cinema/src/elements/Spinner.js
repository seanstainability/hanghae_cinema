import React from "react";
import styled from "styled-components";

const Spinner = (props) => {
  const { type, size, is_dim } = props;

  return (
    <React.Fragment>
      <SpinnerWrap type={type} is_dim={is_dim}>
        <SpinnerSvg size={size} />
      </SpinnerWrap>
    </React.Fragment>
  );
};

Spinner.defaultProps = {
  type: "page", // inline, page
  is_dim: false,
  size: 60,
};

const SpinnerWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  ${(props) =>
    props.type === "page"
      ? `position: fixed;
        height: 95vh;
        top: 0;
        left: 0;
        padding: 0;
        zIndex: 9999;`
      : ``}
  ${(props) =>
    props.is_dim
      ? `
     background: rgba(0,0,0,0.4); 
     height: 100vh;
  `
      : ``}
`;

const SpinnerSvg = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='margin: auto; background: rgb(255, 255, 255); display: block; shape-rendering: auto;' width='200px' height='200px' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid'%3E%3Cg transform='translate(80,50)'%3E%3Cg transform='rotate(0)'%3E%3Ccircle cx='0' cy='0' r='6' fill='%23ff727d' fill-opacity='1'%3E%3CanimateTransform attributeName='transform' type='scale' begin='-0.875s' values='1.5 1.5;1 1' keyTimes='0;1' dur='1s' repeatCount='indefinite'%3E%3C/animateTransform%3E%3Canimate attributeName='fill-opacity' keyTimes='0;1' dur='1s' repeatCount='indefinite' values='1;0' begin='-0.875s'%3E%3C/animate%3E%3C/circle%3E%3C/g%3E%3C/g%3E%3Cg transform='translate(71.21320343559643,71.21320343559643)'%3E%3Cg transform='rotate(45)'%3E%3Ccircle cx='0' cy='0' r='6' fill='%23ff727d' fill-opacity='0.875'%3E%3CanimateTransform attributeName='transform' type='scale' begin='-0.75s' values='1.5 1.5;1 1' keyTimes='0;1' dur='1s' repeatCount='indefinite'%3E%3C/animateTransform%3E%3Canimate attributeName='fill-opacity' keyTimes='0;1' dur='1s' repeatCount='indefinite' values='1;0' begin='-0.75s'%3E%3C/animate%3E%3C/circle%3E%3C/g%3E%3C/g%3E%3Cg transform='translate(50,80)'%3E%3Cg transform='rotate(90)'%3E%3Ccircle cx='0' cy='0' r='6' fill='%23ff727d' fill-opacity='0.75'%3E%3CanimateTransform attributeName='transform' type='scale' begin='-0.625s' values='1.5 1.5;1 1' keyTimes='0;1' dur='1s' repeatCount='indefinite'%3E%3C/animateTransform%3E%3Canimate attributeName='fill-opacity' keyTimes='0;1' dur='1s' repeatCount='indefinite' values='1;0' begin='-0.625s'%3E%3C/animate%3E%3C/circle%3E%3C/g%3E%3C/g%3E%3Cg transform='translate(28.786796564403577,71.21320343559643)'%3E%3Cg transform='rotate(135)'%3E%3Ccircle cx='0' cy='0' r='6' fill='%23ff727d' fill-opacity='0.625'%3E%3CanimateTransform attributeName='transform' type='scale' begin='-0.5s' values='1.5 1.5;1 1' keyTimes='0;1' dur='1s' repeatCount='indefinite'%3E%3C/animateTransform%3E%3Canimate attributeName='fill-opacity' keyTimes='0;1' dur='1s' repeatCount='indefinite' values='1;0' begin='-0.5s'%3E%3C/animate%3E%3C/circle%3E%3C/g%3E%3C/g%3E%3Cg transform='translate(20,50.00000000000001)'%3E%3Cg transform='rotate(180)'%3E%3Ccircle cx='0' cy='0' r='6' fill='%23ff727d' fill-opacity='0.5'%3E%3CanimateTransform attributeName='transform' type='scale' begin='-0.375s' values='1.5 1.5;1 1' keyTimes='0;1' dur='1s' repeatCount='indefinite'%3E%3C/animateTransform%3E%3Canimate attributeName='fill-opacity' keyTimes='0;1' dur='1s' repeatCount='indefinite' values='1;0' begin='-0.375s'%3E%3C/animate%3E%3C/circle%3E%3C/g%3E%3C/g%3E%3Cg transform='translate(28.78679656440357,28.786796564403577)'%3E%3Cg transform='rotate(225)'%3E%3Ccircle cx='0' cy='0' r='6' fill='%23ff727d' fill-opacity='0.375'%3E%3CanimateTransform attributeName='transform' type='scale' begin='-0.25s' values='1.5 1.5;1 1' keyTimes='0;1' dur='1s' repeatCount='indefinite'%3E%3C/animateTransform%3E%3Canimate attributeName='fill-opacity' keyTimes='0;1' dur='1s' repeatCount='indefinite' values='1;0' begin='-0.25s'%3E%3C/animate%3E%3C/circle%3E%3C/g%3E%3C/g%3E%3Cg transform='translate(49.99999999999999,20)'%3E%3Cg transform='rotate(270)'%3E%3Ccircle cx='0' cy='0' r='6' fill='%23ff727d' fill-opacity='0.25'%3E%3CanimateTransform attributeName='transform' type='scale' begin='-0.125s' values='1.5 1.5;1 1' keyTimes='0;1' dur='1s' repeatCount='indefinite'%3E%3C/animateTransform%3E%3Canimate attributeName='fill-opacity' keyTimes='0;1' dur='1s' repeatCount='indefinite' values='1;0' begin='-0.125s'%3E%3C/animate%3E%3C/circle%3E%3C/g%3E%3C/g%3E%3Cg transform='translate(71.21320343559643,28.78679656440357)'%3E%3Cg transform='rotate(315)'%3E%3Ccircle cx='0' cy='0' r='6' fill='%23ff727d' fill-opacity='0.125'%3E%3CanimateTransform attributeName='transform' type='scale' begin='0s' values='1.5 1.5;1 1' keyTimes='0;1' dur='1s' repeatCount='indefinite'%3E%3C/animateTransform%3E%3Canimate attributeName='fill-opacity' keyTimes='0;1' dur='1s' repeatCount='indefinite' values='1;0' begin='0s'%3E%3C/animate%3E%3C/circle%3E%3C/g%3E%3C/g%3E%3C!-- %5Bldio%5D generated by https://loading.io/ --%3E%3C/svg%3E");
  background-size: var(--size);
`;

export default Spinner;
