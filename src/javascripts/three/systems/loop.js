export function startLoop({ renderer, scene, camera, update = () => {} }) {
  function onFrame(time) {
    update(time);
    renderer.render(scene, camera);
  }
  renderer.setAnimationLoop(onFrame);
  return () => renderer.setAnimationLoop(null);
}

