import { Application } from "@pixi/app";

export const AxiePIXI = ({ model, position }) => {
  const app = new Application({
    width: 200,
    height: 165,
    backgroundColor: 0x242735,
  });

  app.stage.interactive = true;
  position.appendChild(app.view);

  app.loader.add("axie", model).load(() => draw(app));

  const draw = () => {
    const axie = new window.PIXI.spine.Spine(
      app.loader.resources.axie.spineData
    );
    axie.position.set(96, 135);
    axie.scale.set(0.18);
    axie.state.setAnimation(0, "action/idle", true);
    app.stage.addChild(axie);
  };
};
