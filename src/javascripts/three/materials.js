import * as THREE from 'three';
import { materialConfig } from './config.js';
import aoUrl from '../../images/texture/Test_texture.png';

const textureLoader = new THREE.TextureLoader();
// Use Webpack-managed asset URL instead of a hard-coded public path
export const aoTexture = textureLoader.load(
  aoUrl,
  undefined,
  undefined,
  (err) => console.error('Failed to load AO texture:', err)
);

// テクスチャ設定を追加（繰り返しやフィルタリングを調整）
aoTexture.wrapS = THREE.RepeatWrapping;
aoTexture.wrapT = THREE.RepeatWrapping;
aoTexture.minFilter = THREE.LinearMipmapLinearFilter;
aoTexture.magFilter = THREE.LinearFilter;
// glTF メッシュに外部テクスチャを貼る場合の推奨設定
// 色テクスチャとして使う時は sRGB、Y軸反転は無効化
aoTexture.flipY = false;
aoTexture.colorSpace = THREE.SRGBColorSpace;

// Redマテリアル
export const redMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000, aoMap: aoTexture });
redMaterial.aoMapIntensity = 1; // aoMap の強度を設定
redMaterial.needsUpdate = true; // マテリアルを更新

// Blueマテリアル
export const blueMaterial = new THREE.MeshStandardMaterial({ color: 0x0000ff, aoMap: aoTexture });
blueMaterial.aoMapIntensity = 1; // aoMap の強度を設定
blueMaterial.needsUpdate = true; // マテリアルを更新

// デフォルトのGreenマテリアル
export const greenMaterial = new THREE.MeshBasicMaterial(materialConfig.green);
