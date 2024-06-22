import { color } from 'framer-motion';
import {proxy} from 'valtio';

const state = proxy({
  intro:true,
  color:'#7BA05B',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png'
});

export default state;