// src/components/ColorPicker.tsx
import React, { useState } from 'react';
import { useColor } from '../context/ColorContext';
import { IoColorPaletteSharp } from "react-icons/io5";
import { FiPlus } from 'react-icons/fi';
import './ColorPicker.scss';

const presetColors: string[] = ['#4f46e5', '#f43f5e', '#10b981', '#f59e0b'];

const ColorPicker: React.FC = () => {
  const { primaryColor, setPrimaryColor } = useColor();
  const [showPalette, setShowPalette] = useState<boolean>(false);

  const togglePalette = () => setShowPalette(!showPalette);

  return (
    <div className="color-picker-wrapper">
      <button
        className="palette-icon-button"
        onClick={togglePalette}
        title="Choose Theme Color"
      >
        <IoColorPaletteSharp size={22} color='rgb(31, 30, 30)' />
      </button>

      {showPalette && (
        <div className="color-palette-popup">
          {presetColors.map((color) => (
            <div
              key={color}
              className={`color-option ${primaryColor === color ? 'active' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => {
                setPrimaryColor(color);
                setShowPalette(false);
              }}
              title={color}
            />
          ))}

          <label className="color-option custom-picker">
            <input
              type="color"
              onChange={(e) => {
                setPrimaryColor(e.target.value);
                setShowPalette(false);
              }}
              title="Custom color"
            />
            <FiPlus color="#fff" />
          </label>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
