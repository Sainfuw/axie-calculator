import { SCALE_MODES, MIPMAP_MODES, DRAW_MODES } from "@pixi/constants";
import { Container } from "@pixi/display";
import { Texture, BaseTexture } from "@pixi/core";
import { Sprite } from "@pixi/sprite";
import { Rectangle, Matrix, Transform, Polygon } from "@pixi/math";
import { Graphics, GraphicsGeometry } from "@pixi/graphics";
import { SimpleMesh } from "@pixi/mesh-extras";
import { Loader, LoaderResource } from "@pixi/loaders";
import { rgb2hex, hex2rgb } from "@pixi/utils";

window.PIXI = {
  VERSION: "5.0.0",
  SCALE_MODES,
  MIPMAP_MODES,
  DRAW_MODES,
  Container,
  Texture,
  BaseTexture,
  Sprite,
  Rectangle,
  Matrix,
  Transform,
  Polygon,
  Graphics,
  GraphicsGeometry,
  SimpleMesh,
  Loader,
  LoaderResource,
  utils: {
    rgb2hex,
    hex2rgb,
  },
};
