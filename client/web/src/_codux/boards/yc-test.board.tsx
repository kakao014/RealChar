import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Index from '../../components/Header/index.jsx';

export default createBoard({
  name: 'ycTest',
  Board: () => (
    <div>
      <Index />
      <h1>Test Davinci</h1>
    </div>
  ),
});
