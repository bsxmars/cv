import { ALLOWED_LANGS } from '../constants';
import type { AllowedLang } from '../types';

export const isAllowedLang = (lang: any): lang is AllowedLang => {
  return ALLOWED_LANGS.includes(lang);
};

export const isHexColor = (color: any): boolean => {
  return typeof color === 'string' && /^#[0-9A-Fa-f]{6}$/.test(color);
};
