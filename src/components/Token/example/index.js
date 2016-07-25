/* eslint-disable react/jsx-key */
import React from 'react';
import Token from '../index';

export default [
  {
    examples: [
      <Token name="Duck" testSection="token-test" />,
      <Token name="Duck" style="primary" />,
      <Token name="Goose"
             style="primary"
             testSection="goose"
             isDismissible={ true }
             onDismiss={() => {
	        alert('Hello!'); //eslint-disable-line
	      }} />,
    ],
  },
];
