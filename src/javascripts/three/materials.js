import * as THREE from 'three';
import { materialConfig } from './config.js';

// Redマテリアル
export const redMaterial = new THREE.MeshBasicMaterial(materialConfig.red);

// Blueマテリアル
export const blueMaterial = new THREE.MeshBasicMaterial(materialConfig.blue);

// デフォルトのGreenマテリアル
export const greenMaterial = new THREE.MeshBasicMaterial(materialConfig.green);