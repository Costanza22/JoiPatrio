import React from 'react';
import './Settings.css';

const Settings = () => {
  return (
    <div className="settings-container">
      <h2>Configurações</h2>
      <form>
        <label>
          Notificações:
          <input type="checkbox" />
        </label>
        <label>
          Tema:
          <select>
            <option value="light">Claro</option>
            <option value="dark">Escuro</option>
          </select>
        </label>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default Settings;
