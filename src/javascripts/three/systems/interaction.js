import * as THREE from 'three';

function isDescendant(parent, child) {
  if (!parent || !child) return false;
  let node = child;
  while (node) {
    if (node === parent) return true;
    node = node.parent;
  }
  return false;
}

export function attachHoverScale(scene, camera, targetObjectRef, { scaleOnHover = new THREE.Vector3(1.2, 1.2, 1.2), defaultScale = new THREE.Vector3(0.5, 0.5, 0.5) } = {}) {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);
    if (intersects.length > 0 && targetObjectRef.current && intersects[0].object && isDescendant(targetObjectRef.current, intersects[0].object)) {
      targetObjectRef.current.scale.copy(scaleOnHover);
    } else if (targetObjectRef.current) {
      targetObjectRef.current.scale.copy(defaultScale);
    }
  }

  window.addEventListener('mousemove', onMouseMove);
  return () => {
    window.removeEventListener('mousemove', onMouseMove);
  };
}

export function attachClickToggle(scene, camera, { predicate, onClick }) {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  function onMouseClick(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);
    if (intersects.length > 0) {
      const obj = intersects[0].object;
      if (!predicate || predicate(obj)) onClick?.(obj);
    }
  }

  window.addEventListener('click', onMouseClick);
  return () => window.removeEventListener('click', onMouseClick);
}
